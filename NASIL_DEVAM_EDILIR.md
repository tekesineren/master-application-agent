# 🚀 Nasıl Devam Edilir?

## 1️⃣ Projeyi Başlatma

### Hızlı Yol (Windows)
```bash
# HIZLI_BASLAT.bat dosyasını çift tıklayın
# veya terminal'de:
HIZLI_BASLAT.bat
```

### Manuel Yol

**Terminal 1 - Backend:**
```bash
cd c:\Users\user\master-application-agent\backend
python app.py
```
Backend http://localhost:5000 adresinde çalışacak.

**Terminal 2 - Frontend:**
```bash
cd c:\Users\user\master-application-agent\web-app
npm run dev
```
Frontend http://localhost:3000 (veya 5173) adresinde çalışacak.

## 2️⃣ Tarayıcıda Test

1. http://localhost:3000 (veya 5173) açın
2. F12 ile Developer Console'u açın
3. CV yükleyin veya manuel giriş yapın
4. Console'da logları kontrol edin

## 3️⃣ CV Test Etme

Backend çalışırken:
```bash
cd backend
python test_cv_parsing.py "cv_dosyanız.pdf"
```

## 4️⃣ Değişiklik Yapma

### Backend Değişiklikleri
- `backend/app.py` dosyasını düzenleyin
- Flask debug mode aktif, otomatik reload olur

### Frontend Değişiklikleri
- `web-app/src/` altındaki dosyaları düzenleyin
- Vite hot reload otomatik çalışır

## 5️⃣ Deploy Etme

```bash
cd c:\Users\user\master-application-agent
git add .
git commit -m "Açıklama"
git push
```

Vercel (frontend) ve Railway (backend) otomatik deploy eder.

## 6️⃣ Server'ları Durdurma

**Windows:**
- Backend ve Frontend pencerelerini kapatın
- veya Ctrl+C ile durdurun

**PowerShell:**
```powershell
# Tüm Python ve Node process'lerini durdur
taskkill /F /IM python.exe
taskkill /F /IM node.exe
```

## 📚 Önemli Dosyalar

- `PROJE_DURUMU.md` - Detaylı proje durumu
- `HIZLI_BASLAT.bat` - Hızlı başlatma
- `TEST_CV.bat` - CV test scripti
- `backend/app.py` - Ana backend kodu
- `web-app/src/App.jsx` - Ana frontend kodu

## 🔍 Sorun Giderme

### Backend çalışmıyor
```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Frontend çalışmıyor
```bash
cd web-app
npm install
npm run dev
```

### CV parsing çalışmıyor
- Backend console'unda logları kontrol edin
- Browser console'unda (F12) hataları kontrol edin
- `test_cv_parsing.py` ile test edin

## 💡 İpuçları

1. **Console Logları:** Her zaman F12 ile console'u açık tutun
2. **Backend Logs:** Backend terminal'inde detaylı loglar görünür
3. **Hot Reload:** Frontend değişiklikleri otomatik yüklenir
4. **Git:** Her önemli değişiklikten sonra commit yapın

---

**Son Güncelleme:** Proje durumu için `PROJE_DURUMU.md` dosyasına bakın.

