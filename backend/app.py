"""
Master Application Agent - Backend API
Ana eşleştirme algoritması ve API endpoint'leri
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)

# CORS ayarları - Tüm originlere izin ver (Expo Go ve web için)
CORS(app, resources={
    r"/api/*": {
        "origins": "*",  # Expo Go ve tüm web uygulamaları için
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})

# Örnek okul veritabanı (ileride gerçek veritabanına dönüştürülecek)
UNIVERSITIES = [
    {
        "id": 1,
        "name": "ETH Zurich",
        "program": "MSc in Robotics, Systems and Control",
        "country": "Switzerland",
        "min_gpa": 3.5,
        "min_language_score": 100,  # TOEFL veya IELTS eşdeğeri
        "required_background": ["engineering", "robotics", "control systems"],
        "match_score": 0  # Hesaplanacak
    },
    {
        "id": 2,
        "name": "MIT",
        "program": "Master of Science in Mechanical Engineering",
        "country": "USA",
        "min_gpa": 3.7,
        "min_language_score": 100,
        "required_background": ["engineering", "mechanical engineering"],
        "match_score": 0
    },
    {
        "id": 3,
        "name": "Stanford University",
        "program": "MS in Computer Science",
        "country": "USA",
        "min_gpa": 3.8,
        "min_language_score": 100,
        "required_background": ["computer science", "engineering", "mathematics"],
        "match_score": 0
    },
    {
        "id": 4,
        "name": "Carnegie Mellon University",
        "program": "MS in Robotics",
        "country": "USA",
        "min_gpa": 3.6,
        "min_language_score": 100,
        "required_background": ["robotics", "engineering", "computer science"],
        "match_score": 0
    },
    {
        "id": 5,
        "name": "University of California, Berkeley",
        "program": "MEng in Electrical Engineering and Computer Sciences",
        "country": "USA",
        "min_gpa": 3.5,
        "min_language_score": 90,
        "required_background": ["electrical engineering", "computer science", "engineering"],
        "match_score": 0
    },
    {
        "id": 6,
        "name": "Imperial College London",
        "program": "MSc in Advanced Robotics",
        "country": "UK",
        "min_gpa": 3.5,
        "min_language_score": 92,
        "required_background": ["robotics", "engineering", "mechanical engineering"],
        "match_score": 0
    },
    {
        "id": 7,
        "name": "University of Cambridge",
        "program": "MPhil in Advanced Computer Science",
        "country": "UK",
        "min_gpa": 3.7,
        "min_language_score": 110,
        "required_background": ["computer science", "mathematics", "engineering"],
        "match_score": 0
    },
    {
        "id": 8,
        "name": "EPFL",
        "program": "Master in Robotics",
        "country": "Switzerland",
        "min_gpa": 3.5,
        "min_language_score": 100,
        "required_background": ["robotics", "engineering", "control systems"],
        "match_score": 0
    },
    {
        "id": 9,
        "name": "TU Delft",
        "program": "MSc in Robotics",
        "country": "Netherlands",
        "min_gpa": 3.3,
        "min_language_score": 90,
        "required_background": ["robotics", "engineering", "mechanical engineering"],
        "match_score": 0
    },
    {
        "id": 10,
        "name": "Technical University of Munich",
        "program": "MSc in Robotics, Cognition, Intelligence",
        "country": "Germany",
        "min_gpa": 3.4,
        "min_language_score": 88,
        "required_background": ["robotics", "computer science", "engineering"],
        "match_score": 0
    },
    {
        "id": 11,
        "name": "ETH Zurich",
        "program": "MSc in Computer Science",
        "country": "Switzerland",
        "min_gpa": 3.5,
        "min_language_score": 100,
        "required_background": ["computer science", "mathematics", "engineering"],
        "match_score": 0
    },
    {
        "id": 12,
        "name": "Georgia Institute of Technology",
        "program": "MS in Robotics",
        "country": "USA",
        "min_gpa": 3.5,
        "min_language_score": 100,
        "required_background": ["robotics", "engineering", "computer science"],
        "match_score": 0
    },
    {
        "id": 13,
        "name": "University of Oxford",
        "program": "MSc in Computer Science",
        "country": "UK",
        "min_gpa": 3.7,
        "min_language_score": 110,
        "required_background": ["computer science", "mathematics", "engineering"],
        "match_score": 0
    },
    {
        "id": 14,
        "name": "University of Toronto",
        "program": "MSc in Mechanical and Industrial Engineering",
        "country": "Canada",
        "min_gpa": 3.3,
        "min_language_score": 93,
        "required_background": ["mechanical engineering", "engineering"],
        "match_score": 0
    },
    {
        "id": 15,
        "name": "National University of Singapore",
        "program": "MSc in Mechanical Engineering",
        "country": "Singapore",
        "min_gpa": 3.4,
        "min_language_score": 85,
        "required_background": ["mechanical engineering", "engineering"],
        "match_score": 0
    },
    {
        "id": 16,
        "name": "KAIST",
        "program": "MS in Robotics",
        "country": "South Korea",
        "min_gpa": 3.3,
        "min_language_score": 83,
        "required_background": ["robotics", "engineering", "computer science"],
        "match_score": 0
    },
    {
        "id": 17,
        "name": "University of Tokyo",
        "program": "Master in Information Science and Technology",
        "country": "Japan",
        "min_gpa": 3.4,
        "min_language_score": 90,
        "required_background": ["computer science", "engineering", "mathematics"],
        "match_score": 0
    },
    {
        "id": 18,
        "name": "KTH Royal Institute of Technology",
        "program": "MSc in Systems, Control and Robotics",
        "country": "Sweden",
        "min_gpa": 3.3,
        "min_language_score": 90,
        "required_background": ["robotics", "control systems", "engineering"],
        "match_score": 0
    },
    {
        "id": 19,
        "name": "Aalto University",
        "program": "MSc in Automation and Electrical Engineering",
        "country": "Finland",
        "min_gpa": 3.2,
        "min_language_score": 92,
        "required_background": ["electrical engineering", "engineering", "control systems"],
        "match_score": 0
    },
    {
        "id": 20,
        "name": "University of Edinburgh",
        "program": "MSc in Robotics and Autonomous Systems",
        "country": "UK",
        "min_gpa": 3.4,
        "min_language_score": 92,
        "required_background": ["robotics", "engineering", "computer science"],
        "match_score": 0
    }
]

def normalize_language_score(test_type, score):
    """
    Farklı dil sınavlarını 0-100 arası normalize eder
    """
    score = float(score)
    
    if test_type == 'toefl':
        # TOEFL iBT: 0-120 -> 0-100
        return (score / 120.0) * 100
    elif test_type == 'ielts':
        # IELTS: 0-9 -> 0-100
        return (score / 9.0) * 100
    elif test_type == 'cambridge_cae':
        # Cambridge CAE: 0-210 -> 0-100 (Grade A: 200-210, B: 193-199, C: 180-192)
        return (score / 210.0) * 100
    elif test_type == 'cambridge_cpe':
        # Cambridge CPE: 0-230 -> 0-100 (Grade A: 220-230, B: 213-219, C: 200-212)
        return (score / 230.0) * 100
    elif test_type == 'pte':
        # PTE Academic: 0-90 -> 0-100
        return (score / 90.0) * 100
    elif test_type == 'duolingo':
        # Duolingo: 0-160 -> 0-100
        return (score / 160.0) * 100
    elif test_type == 'toeic':
        # TOEIC: 0-990 -> 0-100
        return (score / 990.0) * 100
    elif test_type == 'yds' or test_type == 'yokdil':
        # YDS/YÖKDİL: 0-100 -> direkt
        return score
    elif test_type == 'testdaf':
        # TestDaF: 0-5 -> 0-100 (3.0 = 60, 4.0 = 80, 5.0 = 100)
        return (score / 5.0) * 100
    elif test_type == 'goethe':
        # Goethe: 0-100 -> direkt
        return score
    elif test_type == 'dsh':
        # DSH: 0-3 -> 0-100 (DSH-1 = 33, DSH-2 = 67, DSH-3 = 100)
        return (score / 3.0) * 100
    elif test_type == 'delf' or test_type == 'dalf':
        # DELF/DALF: 0-100 -> direkt
        return score
    elif test_type == 'tcf':
        # TCF: 0-699 -> 0-100
        return (score / 699.0) * 100
    else:
        return 0

def convert_gpa_to_4_0(gpa, grading_system):
    """
    Farklı notlandırma sistemlerini 4.0 GPA sistemine dönüştürür
    """
    if not gpa or gpa == 0:
        return 0.0
    
    grading_system = grading_system or '4.0'
    
    if grading_system == '4.0':
        return float(gpa)
    elif grading_system == 'uk':
        # UK sistemi: 70+ = First (3.7-4.0), 60-69 = Upper Second (3.0-3.6), 50-59 = Lower Second (2.0-2.9), <50 = Third (0-1.9)
        if gpa >= 70:
            return min(4.0, 3.7 + ((gpa - 70) / 30.0) * 0.3)
        elif gpa >= 60:
            return 3.0 + ((gpa - 60) / 10.0) * 0.6
        elif gpa >= 50:
            return 2.0 + ((gpa - 50) / 10.0) * 0.9
        else:
            return (gpa / 50.0) * 1.9
    elif grading_system == 'german':
        # Alman sistemi: 1.0 en iyi, 4.0 en kötü - ters çevir
        return 5.0 - float(gpa)  # 1.0 -> 4.0, 2.0 -> 3.0, 3.0 -> 2.0, 4.0 -> 1.0
    elif grading_system == 'french':
        # Fransız sistemi: 0-20, 20 en iyi - (Not / 20) * 4.0
        return (float(gpa) / 20.0) * 4.0
    else:
        # Diğer sistemler için varsayılan olarak 100'lük sistem kabul et
        return (float(gpa) / 100.0) * 4.0

# ÖSYM sıralaması kaldırıldı - artık kullanılmıyor

def calculate_bonus_points(user_data):
    """
    Ek puan kriterlerini hesaplar (Savunma Sanayisi kriterlerine göre)
    """
    bonus = 0.0
    
    # 1. İş deneyimi ek puanı
    work_exp = user_data.get('work_experience', 0)
    if 2 <= work_exp < 5:
        bonus += 0.2
    elif 5 <= work_exp < 10:
        bonus += 0.4
    elif work_exp >= 10:
        bonus += 0.6  # 10+ yıl için ekstra
    
    # 2. Yüksek lisans derecesi ek puanı
    has_masters = user_data.get('has_masters_degree', False)
    masters_ranking = user_data.get('masters_university_ranking', '')
    if has_masters:
        if masters_ranking in ['top100', 'top500', 'top1000']:
            bonus += 0.2
        else:
            bonus += 0.1
    
    # 3. Lisans üniversitesi sıralaması (dolaylı etki - GPA'ya eklenir)
    # Bu kısım GPA hesaplamasında kullanılacak
    
    # 4. Proje deneyimi ek puanı
    project_exp = user_data.get('project_experience', 'none')
    if project_exp == 'national':
        bonus += 0.1
    elif project_exp == 'eu':
        bonus += 0.15
    elif project_exp == 'international':
        bonus += 0.15
    elif project_exp == 'multiple':
        bonus += 0.2
    
    # 5. Yayınlar ek puanı (SCI, SCI Exp, SSCI)
    publications = user_data.get('publications', 0)
    if publications >= 1:
        bonus += 0.1
    
    # 6. GRE/GMAT ek puanı
    gre_score = user_data.get('gre_score')
    gmat_score = user_data.get('gmat_score')
    if gre_score and gre_score >= 320:
        bonus += 0.1
    elif gre_score and gre_score >= 310:
        bonus += 0.05
    if gmat_score and gmat_score >= 700:
        bonus += 0.1
    elif gmat_score and gmat_score >= 650:
        bonus += 0.05
    
    # 7. Yarışma başarıları ek puanı
    competition = user_data.get('competition_achievements', 'none')
    if competition == 'bronze':
        bonus += 0.05
    elif competition == 'silver':
        bonus += 0.08
    elif competition == 'gold':
        bonus += 0.1
    elif competition == 'multiple':
        bonus += 0.15
    
    return min(bonus, 1.0)  # Maksimum 1.0 ek puan

def calculate_minimum_gpa_requirement(user_data):
    """
    Ülke bazlı minimum GPA gereksinimini hesaplar (4.0 sisteminde)
    """
    gpa = user_data.get('gpa', 0)
    grading_system = user_data.get('grading_system', '4.0')
    country = user_data.get('country', 'turkey')
    
    # GPA'yi 4.0 sistemine dönüştür
    gpa_4_0 = convert_gpa_to_4_0(gpa, grading_system)
    
    # Bonus puanları hesapla
    bonus_points = calculate_bonus_points(user_data)
    
    # Türkiye için standart minimum (ÖSYM sıralaması kaldırıldı)
    if country == 'turkey':
        return 2.50 - bonus_points
    
    # Diğer ülkeler için standart minimum
    return 2.50 - bonus_points

def calculate_match_score(user_data, university):
    """
    Gelişmiş eşleşme skoru hesaplama (Savunma Sanayisi kriterlerine göre uyarlanmış)
    
    Temel Puanlar (100 puan üzerinden):
    - GPA: 30 puan
    - Dil skoru: 20 puan
    - Background: 15 puan
    - Research experience: 10 puan
    - Work experience: 8 puan
    - Publications: 5 puan
    - Recommendation letters: 5 puan
    - University ranking: 4 puan
    - GRE/GMAT: 3 puan
    
    Ek Puanlar (bonus):
    - Proje deneyimi
    - Yarışma başarıları
    - Yüksek lisans derecesi
    """
    score = 0.0
    max_score = 100.0
    
    # GPA'yi 4.0 sistemine dönüştür
    gpa = user_data.get('gpa', 0)
    grading_system = user_data.get('grading_system', '4.0')
    gpa_4_0 = convert_gpa_to_4_0(gpa, grading_system)
    
    # Minimum GPA kontrolü
    min_gpa_req = calculate_minimum_gpa_requirement(user_data)
    
    # 10+ yıl iş deneyimi varsa minimum GPA şartı yok
    work_exp = user_data.get('work_experience', 0)
    if work_exp < 10 and gpa_4_0 < min_gpa_req:
        # Minimum GPA'nin altındaysa çok düşük puan
        return 20.0  # Çok düşük uyum
    
    # 1. GPA değerlendirmesi (30 puan) - 4.0 sisteminde
    if gpa_4_0 >= university['min_gpa']:
        gpa_score = min(30, (gpa_4_0 / 4.0) * 30)
        score += gpa_score
    else:
        score += (gpa_4_0 / university['min_gpa']) * 15
    
    # Üniversite sıralaması bonusu (GPA'ya eklenir)
    undergrad_ranking = user_data.get('undergraduate_university_ranking', '')
    if undergrad_ranking == 'top100':
        score += 2.0
    elif undergrad_ranking == 'top500':
        score += 1.5
    elif undergrad_ranking == 'top1000':
        score += 1.0
    
    # 2. Dil skoru değerlendirmesi (20 puan)
    language_test_type = user_data.get('language_test_type', '')
    language_test_score = user_data.get('language_test_score')
    
    if language_test_type and language_test_score:
        # Sınav tipine göre normalize edilmiş skor (0-100 arası)
        normalized_score = normalize_language_score(language_test_type, language_test_score)
        
        if normalized_score >= 90:  # Çok yüksek seviye
            score += 20
        elif normalized_score >= 80:  # Yüksek seviye
            score += 18
        elif normalized_score >= 70:  # İyi seviye
            score += 15
        elif normalized_score >= 60:  # Orta seviye
            score += 10
        else:
            score += 5
    else:
        score += 0  # Dil sınavı yoksa puan yok
    
    # 3. Background eşleşmesi (15 puan)
    user_background = user_data.get('background', [])
    required_background = university.get('required_background', [])
    
    if required_background:
        common_fields = set(user_background) & set(required_background)
        if common_fields:
            background_score = (len(common_fields) / len(required_background)) * 15
            score += min(15, background_score)
    else:
        # Background gereksinimi yoksa tam puan
        score += 15
    
    # 4. Araştırma deneyimi (10 puan)
    research_exp = user_data.get('research_experience', 0)
    if research_exp >= 2:
        score += 10
    elif research_exp >= 1:
        score += 7
    elif research_exp >= 0.5:
        score += 4
    
    # 5. İş deneyimi (8 puan)
    if work_exp >= 10:
        score += 8  # 10+ yıl = tam puan
    elif work_exp >= 5:
        score += 6
    elif work_exp >= 2:
        score += 4
    elif work_exp >= 1:
        score += 2
    
    # 6. Yayınlar (5 puan)
    publications = user_data.get('publications', 0)
    if publications >= 5:
        score += 5
    elif publications >= 3:
        score += 3
    elif publications >= 1:
        score += 2
    
    # 7. Referans mektupları (5 puan)
    rec_letters = user_data.get('recommendation_letters', 0)
    if rec_letters >= 3:
        score += 5
    elif rec_letters >= 2:
        score += 3
    elif rec_letters >= 1:
        score += 2
    
    # 8. GRE/GMAT (3 puan)
    gre_score = user_data.get('gre_score')
    gmat_score = user_data.get('gmat_score')
    if gre_score and gre_score >= 320:
        score += 3
    elif gre_score and gre_score >= 310:
        score += 2
    elif gre_score and gre_score >= 300:
        score += 1
    if gmat_score and gmat_score >= 700:
        score += 3
    elif gmat_score and gmat_score >= 650:
        score += 2
    elif gmat_score and gmat_score >= 600:
        score += 1
    
    # Ek puanlar (bonus - maksimum 10 puan ekstra)
    bonus_points = calculate_bonus_points(user_data)
    score += bonus_points * 10  # 0.1 ek puan = 1 puan bonus
    
    # Maksimum 110 puan olabilir (100 + 10 bonus)
    return round(min(score, 110.0), 2)

@app.route('/api/health', methods=['GET'])
def health_check():
    """API sağlık kontrolü"""
    return jsonify({"status": "ok", "message": "API is running"})

@app.route('/api/universities', methods=['GET'])
def get_universities():
    """Tüm okulları listele"""
    return jsonify({"universities": UNIVERSITIES})

@app.route('/api/match', methods=['POST'])
def match_universities():
    """
    Kullanıcı verilerine göre okulları eşleştir ve sırala
    
    Request body:
    {
        "gpa": 3.8,
        "language_score": 110,
        "motivation_letter": "...",
        "background": ["engineering", "robotics"]
    }
    """
    try:
        user_data = request.json
        
        # Her okul için skor hesapla
        matched_universities = []
        for university in UNIVERSITIES:
            university_copy = university.copy()
            match_score = calculate_match_score(user_data, university)
            university_copy['match_score'] = match_score
            matched_universities.append(university_copy)
        
        # Skora göre sırala (yüksekten düşüğe)
        matched_universities.sort(key=lambda x: x['match_score'], reverse=True)
        
        # Yüksek eşleşme (70+), orta (50-70), düşük (30-50), çok düşük (<30)
        high_match = [u for u in matched_universities if u['match_score'] >= 70]
        medium_match = [u for u in matched_universities if 50 <= u['match_score'] < 70]
        low_match = [u for u in matched_universities if 30 <= u['match_score'] < 50]
        extra_options = [u for u in matched_universities if u['match_score'] < 30]
        
        return jsonify({
            "success": True,
            "results": {
                "high_match": high_match,
                "medium_match": medium_match,
                "low_match": low_match,
                "extra_options": extra_options
            },
            "user_data": user_data
        })
    
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 400

if __name__ == '__main__':
    # Railway ve Render.com için PORT environment variable kullan
    port = int(os.environ.get('PORT', 5000))
    # Geliştirme için debug mode açık
    app.run(debug=True, host='0.0.0.0', port=port)

