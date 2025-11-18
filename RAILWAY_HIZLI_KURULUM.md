# 🚂 Railway.app - Hızlı Kurulum (5 Dakika)

## ✅ Neden Railway.app?

- ✅ **Uyku modu YOK** - Backend sürekli çalışır
- ✅ **Ücretsiz plan** - 500 saat/ay (yeterli)
- ✅ **Hızlı deploy** - GitHub'dan otomatik
- ✅ **Kolay kurulum** - 5 dakika

## 🚀 Adım Adım Kurulum

### Adım 1: Railway.app'e Giriş (1 dk)

1. https://railway.app → "Start a New Project"
2. **"Deploy from GitHub repo"** seç
3. GitHub hesabınızla giriş yap
4. Repo'yu seç: `master-application-agent`

### Adım 2: Backend Deploy Ayarları (2 dk)

1. Railway otomatik olarak backend'i bulacak
2. **Settings** → **Root Directory:** `backend` yaz
3. **Settings** → **Start Command:** `python app.py`
4. **Variables** sekmesi:
   - `FLASK_ENV` = `production`
   - `PORT` = Railway otomatik atar (değiştirme)

### Adım 3: Deploy! (2 dk)

1. **"Deploy"** butonuna tıkla
2. 2-3 dakika bekle
3. ✅ Backend deploy oldu!

### Adım 4: Backend URL'ini Al

1. Deploy tamamlandıktan sonra
2. **Settings** → **Domains** sekmesi
3. Railway size bir URL verecek: `https://xxx.up.railway.app`
4. Bu URL'i not et!

### Adım 5: Web App'i Güncelle

1. `web-app/.env` dosyasını aç
2. Şunu değiştir:
   ```
   VITE_API_URL=https://xxx.up.railway.app/api
   ```
   (xxx yerine Railway'den aldığınız URL)

3. GitHub'a push et:
   ```bash
   git add web-app/.env
   git commit -m "Update API URL to Railway"
   git push
   ```

4. Vercel otomatik deploy edecek (1-2 dakika)

## ✅ Bitti!

Artık backend sürekli çalışacak, uyku modu yok!

---

## 🔍 Kontrol

### Backend Çalışıyor mu?

Tarayıcıda aç:
```
https://xxx.up.railway.app/api/health
```

**Yanıt:**
- `{"status":"ok"}` → ✅ Çalışıyor!

### Web App Çalışıyor mu?

1. https://master-application-agent.vercel.app aç
2. Formu doldur
3. Gönder
4. ✅ Çalışacak!

---

## 📋 Özet

1. Railway.app → GitHub repo bağla
2. Root Directory: `backend`
3. Start Command: `python app.py`
4. Deploy!
5. URL'i al
6. Web app `.env` dosyasını güncelle
7. ✅ Bitti!

**Toplam süre: 5 dakika**

---

**Sorun olursa:** Railway dashboard'da "Logs" sekmesinden hataları görebilirsiniz.

