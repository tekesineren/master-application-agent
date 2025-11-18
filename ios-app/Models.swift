//
//  Models.swift
//  MasterApplicationAgent
//
//  Veri modelleri
//

import Foundation

// Kullanıcı giriş verileri
struct UserInput: Codable {
    var gpa: Double
    var languageScore: Int
    var motivationLetter: String
    var background: [String]
}

// Okul modeli
struct University: Codable, Identifiable {
    let id: Int
    let name: String
    let program: String
    let country: String
    let minGPA: Double
    let minLanguageScore: Int
    let requiredBackground: [String]
    var matchScore: Double
    
    enum CodingKeys: String, CodingKey {
        case id, name, program, country
        case minGPA = "min_gpa"
        case minLanguageScore = "min_language_score"
        case requiredBackground = "required_background"
        case matchScore = "match_score"
    }
}

// API yanıt modeli
struct MatchResponse: Codable {
    let success: Bool
    let results: MatchResults?
    let userData: UserInput?
    let error: String?
    
    enum CodingKeys: String, CodingKey {
        case success, results, error
        case userData = "user_data"
    }
}

struct MatchResults: Codable {
    let highMatch: [University]
    let mediumMatch: [University]
    let lowMatch: [University]
    let extraOptions: [University]
    
    enum CodingKeys: String, CodingKey {
        case highMatch = "high_match"
        case mediumMatch = "medium_match"
        case lowMatch = "low_match"
        case extraOptions = "extra_options"
    }
}

