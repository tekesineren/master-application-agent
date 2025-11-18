//
//  APIService.swift
//  MasterApplicationAgent
//
//  Backend API ile iletişim
//

import Foundation

class APIService {
    // Backend API URL'i - geliştirme için localhost
    // Gerçek cihazda test ederken bilgisayarınızın IP adresini kullanın
    static let baseURL = "http://localhost:5000/api"
    
    // Simulator için localhost çalışır
    // Gerçek iPhone için: "http://[BILGISAYAR_IP]:5000/api"
    
    static func matchUniversities(userInput: UserInput) async throws -> MatchResponse {
        let url = URL(string: "\(baseURL)/match")!
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        // UserInput'u backend'in beklediği formata çevir
        let requestBody: [String: Any] = [
            "gpa": userInput.gpa,
            "language_score": userInput.languageScore,
            "motivation_letter": userInput.motivationLetter,
            "background": userInput.background
        ]
        
        request.httpBody = try JSONSerialization.data(withJSONObject: requestBody)
        
        let (data, _) = try await URLSession.shared.data(for: request)
        let decoder = JSONDecoder()
        decoder.keyDecodingStrategy = .convertFromSnakeCase
        
        return try decoder.decode(MatchResponse.self, from: data)
    }
    
    static func getUniversities() async throws -> [University] {
        let url = URL(string: "\(baseURL)/universities")!
        let (data, _) = try await URLSession.shared.data(from: url)
        let decoder = JSONDecoder()
        decoder.keyDecodingStrategy = .convertFromSnakeCase
        
        let response = try decoder.decode([String: [University]].self, from: data)
        return response["universities"] ?? []
    }
}

