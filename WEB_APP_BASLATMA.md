# 🚀 Web App Başlatma Rehberi

## Sorun: localhost:3000'e bağlanılamıyor

### Çözüm 1: Manuel Başlatma (Önerilen)

1. **Yeni PowerShell penceresi açın** (Yönetici olarak)

2. **Backend'i başlatın:**
```powershell
cd c:\Users\user\master-application-agent\backend
python app.py
```
Backend çalışıyor mesajını bekleyin (port 5000)

3. **Yeni bir PowerShell penceresi daha açın**

4. **Web app'i başlatın:**
```powershell
cd c:\Users\user\master-application-agent\web-app
npm run dev
```

5. **Tarayıcıda açın:**
- http://localhost:3000
- Veya http://127.0.0.1:3000

### Çözüm 2: Production Build (Daha Hızlı)

1. **Build alın:**
```powershell
cd c:\Users\user\master-application-agent\web-app
npm run build
```

2. **Preview başlatın:**
```powershell
npm run preview
```

3. **Tarayıcıda açın:**
- http://localhost:4173

### Çözüm 3: Vercel Production (Backend Render.com'da çalışıyorsa)

1. **Vercel'deki app'i açın:**
- https://master-application-agent.vercel.app

2. **Backend'i Render.com'da uyandırın:**
- https://dashboard.render.com
- Backend servisi → "Manual Deploy"

---

## Hızlı Test

**En kolay yol:** İki terminal açın:

**Terminal 1 (Backend):**
```powershell
cd c:\Users\user\master-application-agent\backend
python app.py
```

**Terminal 2 (Web App):**
```powershell
cd c:\Users\user\master-application-agent\web-app
npm run dev
```

Sonra tarayıcıda: **http://localhost:3000**

