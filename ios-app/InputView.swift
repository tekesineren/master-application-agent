//
//  InputView.swift
//  MasterApplicationAgent
//
//  Kullanıcı giriş ekranı
//

import SwiftUI

struct InputView: View {
    @State private var gpa: String = ""
    @State private var languageScore: String = ""
    @State private var motivationLetter: String = ""
    @State private var selectedBackgrounds: Set<String> = []
    @State private var isLoading = false
    @State private var showResults = false
    @State private var matchResponse: MatchResponse?
    
    let backgroundOptions = [
        "engineering",
        "robotics",
        "control systems",
        "mechanical engineering",
        "computer science",
        "electrical engineering",
        "mathematics",
        "physics"
    ]
    
    var body: some View {
        NavigationView {
            Form {
                Section(header: Text("Akademik Bilgiler")) {
                    HStack {
                        Text("GPA (0-4.0)")
                        Spacer()
                        TextField("3.5", text: $gpa)
                            .keyboardType(.decimalPad)
                            .frame(width: 100)
                            .multilineTextAlignment(.trailing)
                    }
                    
                    HStack {
                        Text("Dil Skoru (TOEFL/IELTS)")
                        Spacer()
                        TextField("110", text: $languageScore)
                            .keyboardType(.numberPad)
                            .frame(width: 100)
                            .multilineTextAlignment(.trailing)
                    }
                }
                
                Section(header: Text("Background")) {
                    ForEach(backgroundOptions, id: \.self) { option in
                        Toggle(option.capitalized, isOn: Binding(
                            get: { selectedBackgrounds.contains(option) },
                            set: { isOn in
                                if isOn {
                                    selectedBackgrounds.insert(option)
                                } else {
                                    selectedBackgrounds.remove(option)
                                }
                            }
                        ))
                    }
                }
                
                Section(header: Text("Motivation Letter")) {
                    TextEditor(text: $motivationLetter)
                        .frame(height: 200)
                        .overlay(
                            Group {
                                if motivationLetter.isEmpty {
                                    Text("Motivation letter'ınızı buraya yazın...")
                                        .foregroundColor(.gray)
                                        .padding(.top, 8)
                                        .padding(.leading, 4)
                                }
                            },
                            alignment: .topLeading
                        )
                }
                
                Section {
                    Button(action: {
                        Task {
                            await submitForm()
                        }
                    }) {
                        HStack {
                            if isLoading {
                                ProgressView()
                                    .progressViewStyle(CircularProgressViewStyle())
                            }
                            Text(isLoading ? "Analiz ediliyor..." : "Eşleştirmeyi Başlat")
                        }
                        .frame(maxWidth: .infinity)
                    }
                    .disabled(isLoading || !isFormValid)
                }
            }
            .navigationTitle("Master Application Agent")
            .sheet(isPresented: $showResults) {
                if let response = matchResponse {
                    ResultsView(matchResponse: response)
                }
            }
        }
    }
    
    var isFormValid: Bool {
        guard let gpaValue = Double(gpa),
              let langValue = Int(languageScore),
              !motivationLetter.isEmpty,
              !selectedBackgrounds.isEmpty else {
            return false
        }
        return gpaValue >= 0 && gpaValue <= 4.0 && langValue >= 0
    }
    
    func submitForm() async {
        guard let gpaValue = Double(gpa),
              let langValue = Int(languageScore) else {
            return
        }
        
        isLoading = true
        
        let userInput = UserInput(
            gpa: gpaValue,
            languageScore: langValue,
            motivationLetter: motivationLetter,
            background: Array(selectedBackgrounds)
        )
        
        do {
            let response = try await APIService.matchUniversities(userInput: userInput)
            matchResponse = response
            showResults = true
        } catch {
            print("Hata: \(error.localizedDescription)")
            // Hata mesajı göster (ileride alert eklenebilir)
        }
        
        isLoading = false
    }
}

#Preview {
    InputView()
}

