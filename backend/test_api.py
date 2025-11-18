"""
Backend API'yi test etmek için basit script
"""

import requests
import json

BASE_URL = "http://localhost:5000/api"

def test_health():
    """API sağlık kontrolü"""
    print("Health check testi...")
    response = requests.get(f"{BASE_URL}/health")
    print(f"Status: {response.status_code}")
    print(f"Response: {response.json()}")
    print()

def test_match():
    """Eşleştirme API'sini test et"""
    print("Eslestirme testi...")
    
    test_data = {
        "gpa": 3.8,
        "language_score": 110,
        "motivation_letter": "I am passionate about robotics and control systems. I have been working in the field for several years and want to advance my knowledge through a master's degree. My background in engineering and experience with ROS and control algorithms makes me a strong candidate.",
        "background": ["engineering", "robotics", "control systems"]
    }
    
    response = requests.post(
        f"{BASE_URL}/match",
        json=test_data,
        headers={"Content-Type": "application/json"}
    )
    
    print(f"Status: {response.status_code}")
    result = response.json()
    
    if result.get("success"):
        print("[OK] Basarili!")
        print(f"\nYuksek Eslestirme: {len(result['results']['high_match'])} okul")
        print(f"Iyi Eslestirme: {len(result['results']['medium_match'])} okul")
        print(f"Dusuk Eslestirme: {len(result['results']['low_match'])} okul")
        print(f"Ekstra Secenekler: {len(result['results']['extra_options'])} okul")
        
        if result['results']['high_match']:
            print("\nYuksek Eslestirme Ornekleri:")
            for uni in result['results']['high_match'][:3]:
                print(f"  - {uni['name']}: {uni['match_score']:.1f}%")
    else:
        print(f"[HATA] Hata: {result.get('error')}")
    
    print()

if __name__ == "__main__":
    print("=" * 50)
    print("Master Application Agent - API Test")
    print("=" * 50)
    print()
    
    try:
        test_health()
        test_match()
        print("[OK] Tum testler tamamlandi!")
    except requests.exceptions.ConnectionError:
        print("[HATA] Backend API calismiyor!")
        print("   Lutfen once 'python app.py' komutunu calistirin.")
    except Exception as e:
        print(f"[HATA] Hata: {e}")

