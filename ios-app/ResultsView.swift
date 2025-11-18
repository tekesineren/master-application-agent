//
//  ResultsView.swift
//  MasterApplicationAgent
//
//  Sonuç ekranı - eşleşen okulları gösterir
//

import SwiftUI

struct ResultsView: View {
    let matchResponse: MatchResponse
    @Environment(\.dismiss) var dismiss
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    if let results = matchResponse.results {
                        // Yüksek Eşleşme
                        if !results.highMatch.isEmpty {
                            SectionView(
                                title: "🎯 Yüksek Eşleşme",
                                subtitle: "Bu okullara başvurmanızı öneriyoruz",
                                universities: results.highMatch,
                                color: .green
                            )
                        }
                        
                        // Orta Eşleşme
                        if !results.mediumMatch.isEmpty {
                            SectionView(
                                title: "✅ İyi Eşleşme",
                                subtitle: "Başvurmayı düşünebilirsiniz",
                                universities: results.mediumMatch,
                                color: .blue
                            )
                        }
                        
                        // Düşük Eşleşme
                        if !results.lowMatch.isEmpty {
                            SectionView(
                                title: "⚠️ Düşük Eşleşme",
                                subtitle: "Başvurabilirsiniz ama şansınız düşük",
                                universities: results.lowMatch,
                                color: .orange
                            )
                        }
                        
                        // Ekstra Seçenekler
                        if !results.extraOptions.isEmpty {
                            SectionView(
                                title: "💡 Ekstra Seçenekler",
                                subtitle: "Hiçbir şey kaybetmezsiniz, deneyebilirsiniz",
                                universities: results.extraOptions,
                                color: .gray
                            )
                        }
                    } else {
                        Text("Sonuç bulunamadı")
                            .foregroundColor(.gray)
                            .padding()
                    }
                }
                .padding()
            }
            .navigationTitle("Eşleşme Sonuçları")
            .navigationBarTitleDisplayMode(.large)
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button("Kapat") {
                        dismiss()
                    }
                }
            }
        }
    }
}

struct SectionView: View {
    let title: String
    let subtitle: String
    let universities: [University]
    let color: Color
    
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text(title)
                .font(.title2)
                .fontWeight(.bold)
                .foregroundColor(color)
            
            Text(subtitle)
                .font(.subheadline)
                .foregroundColor(.secondary)
            
            ForEach(universities) { university in
                UniversityCard(university: university, color: color)
            }
        }
        .padding()
        .background(Color(.systemGray6))
        .cornerRadius(12)
    }
}

struct UniversityCard: View {
    let university: University
    let color: Color
    
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack {
                Text(university.name)
                    .font(.headline)
                Spacer()
                Text("\(Int(university.matchScore))%")
                    .font(.subheadline)
                    .fontWeight(.semibold)
                    .foregroundColor(color)
                    .padding(.horizontal, 8)
                    .padding(.vertical, 4)
                    .background(color.opacity(0.2))
                    .cornerRadius(8)
            }
            
            Text(university.program)
                .font(.subheadline)
                .foregroundColor(.secondary)
            
            Text(university.country)
                .font(.caption)
                .foregroundColor(.secondary)
            
            Divider()
            
            HStack {
                Label("Min GPA: \(university.minGPA, specifier: "%.1f")", systemImage: "star.fill")
                    .font(.caption)
                Spacer()
                Label("Min Dil: \(university.minLanguageScore)", systemImage: "text.bubble")
                    .font(.caption)
            }
            .foregroundColor(.secondary)
        }
        .padding()
        .background(Color(.systemBackground))
        .cornerRadius(8)
    }
}

#Preview {
    ResultsView(matchResponse: MatchResponse(
        success: true,
        results: MatchResults(
            highMatch: [
                University(
                    id: 1,
                    name: "ETH Zurich",
                    program: "MSc in Robotics",
                    country: "Switzerland",
                    minGPA: 3.5,
                    minLanguageScore: 100,
                    requiredBackground: ["engineering"],
                    matchScore: 85.5
                )
            ],
            mediumMatch: [],
            lowMatch: [],
            extraOptions: []
        ),
        userData: nil,
        error: nil
    ))
}

