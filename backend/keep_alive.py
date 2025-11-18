"""
Backend'i uyanık tutmak için basit ping scripti
Bu script'i bir servis olarak çalıştırabilirsiniz
"""
import requests
import time
from datetime import datetime

BACKEND_URL = "https://master-application-agent.onrender.com/api/health"
PING_INTERVAL = 10 * 60  # 10 dakikada bir ping (Render.com 15 dakika sonra uyuyor)

def ping_backend():
    """Backend'e ping at"""
    try:
        response = requests.get(BACKEND_URL, timeout=10)
        if response.status_code == 200:
            print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] ✅ Backend uyanık")
            return True
        else:
            print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] ⚠️ Backend yanıt verdi ama status: {response.status_code}")
            return False
    except Exception as e:
        print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] ❌ Hata: {e}")
        return False

if __name__ == "__main__":
    print(f"🚀 Backend keep-alive başlatıldı")
    print(f"📍 URL: {BACKEND_URL}")
    print(f"⏰ Ping aralığı: {PING_INTERVAL // 60} dakika")
    print("-" * 50)
    
    while True:
        ping_backend()
        time.sleep(PING_INTERVAL)

