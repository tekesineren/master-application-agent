"""
Master Application Agent - Backend API
Ana eşleştirme algoritması ve API endpoint'leri
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)

# CORS ayarları - Production için güvenli
allowed_origins = [
    "http://localhost:3000",  # Local development
    "http://localhost:5000",  # Local backend
    os.getenv("FRONTEND_URL", "*")  # Production frontend URL
]

CORS(app, resources={
    r"/api/*": {
        "origins": allowed_origins if os.getenv("FLASK_ENV") == "production" else "*",
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
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
    # Daha fazla okul eklenecek
]

def calculate_match_score(user_data, university):
    """
    Kullanıcı verilerine göre okul eşleşme skorunu hesaplar
    
    Parametreler:
    - Dil skoru (language_score): 0-120 arası
    - GPA: 0-4.0 arası
    - Motivation letter: metin analizi (basit versiyonda kelime sayısı ve içerik kontrolü)
    - Background: ilgili alanlar listesi
    """
    score = 0
    max_score = 100
    
    # 1. GPA değerlendirmesi (30 puan)
    gpa = user_data.get('gpa', 0)
    if gpa >= university['min_gpa']:
        gpa_score = min(30, (gpa / 4.0) * 30)
        score += gpa_score
    else:
        # Minimum GPA'nin altındaysa düşük puan
        score += (gpa / university['min_gpa']) * 15
    
    # 2. Dil skoru değerlendirmesi (25 puan)
    language_score = user_data.get('language_score', 0)
    if language_score >= university['min_language_score']:
        lang_score = min(25, (language_score / 120) * 25)
        score += lang_score
    else:
        score += (language_score / university['min_language_score']) * 12
    
    # 3. Background eşleşmesi (25 puan)
    user_background = user_data.get('background', [])
    required_background = university.get('required_background', [])
    
    # Ortak alanları bul
    common_fields = set(user_background) & set(required_background)
    if common_fields:
        background_score = (len(common_fields) / len(required_background)) * 25
        score += min(25, background_score)
    
    # 4. Motivation letter değerlendirmesi (20 puan)
    # Basit versiyon: kelime sayısı ve temel kontroller
    motivation_letter = user_data.get('motivation_letter', '')
    word_count = len(motivation_letter.split())
    
    # İdeal kelime sayısı: 500-800 arası
    if 500 <= word_count <= 800:
        score += 20
    elif 300 <= word_count < 500 or 800 < word_count <= 1000:
        score += 15
    elif word_count >= 200:
        score += 10
    else:
        score += 5
    
    return round(score, 2)

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
    # Geliştirme için debug mode açık
    app.run(debug=True, host='0.0.0.0', port=5000)

