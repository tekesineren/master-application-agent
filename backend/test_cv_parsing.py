"""
CV Parsing Test Script
CV dosyasını parse edip çıkarılan bilgileri gösterir
"""

import requests
import sys

def test_cv_parsing(cv_file_path):
    """CV dosyasını backend'e gönder ve sonuçları göster"""
    
    url = "http://localhost:5000/api/parse-cv"
    
    try:
        with open(cv_file_path, 'rb') as f:
            files = {'cv': f}
            response = requests.post(url, files=files)
        
        if response.status_code == 200:
            data = response.json()
            print("✅ CV Başarıyla Parse Edildi!")
            print(f"\nConfidence: {data.get('confidence', 0):.2%}")
            print(f"\nÇıkarılan Text (İlk 500 karakter):")
            print("-" * 50)
            print(data.get('extracted_text', '')[:500])
            print("-" * 50)
            
            print("\n📊 Çıkarılan Bilgiler:")
            print("=" * 50)
            extracted = data.get('extracted_data', {})
            
            print(f"GPA: {extracted.get('gpa', 'Bulunamadı')}")
            print(f"Dil: {extracted.get('language', 'N/A')}")
            print(f"Dil Sınavı: {extracted.get('language_test_type', 'Bulunamadı')}")
            print(f"Dil Skoru: {extracted.get('language_test_score', 'Bulunamadı')}")
            print(f"Background: {extracted.get('background', [])}")
            print(f"Araştırma Deneyimi: {extracted.get('research_experience', 0)} yıl")
            print(f"İş Deneyimi: {extracted.get('work_experience', 0)} yıl")
            print(f"Yayınlar: {extracted.get('publications', 0)}")
            print(f"Ülke: {extracted.get('country', 'N/A')}")
            print("=" * 50)
            
        else:
            print(f"❌ Hata: {response.status_code}")
            print(response.json())
            
    except FileNotFoundError:
        print(f"❌ Dosya bulunamadı: {cv_file_path}")
    except requests.exceptions.ConnectionError:
        print("❌ Backend'e bağlanılamadı. Backend çalışıyor mu? (python app.py)")
    except Exception as e:
        print(f"❌ Hata: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Kullanım: python test_cv_parsing.py <cv_dosya_yolu>")
        print("Örnek: python test_cv_parsing.py cv.pdf")
    else:
        test_cv_parsing(sys.argv[1])

