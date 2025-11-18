# 🔗 Railway.app - Backend URL Nasıl Alınır?

## 📍 URL Alma Yöntemleri

### Yöntem 1: Settings → Domains (En Kolay)

1. **Railway.app dashboard** → Projenizi açın
2. **Backend servisinizi** seçin (deploy edilen servis)
3. **"Settings"** sekmesine tıklayın
4. **"Domains"** sekmesine gidin
5. **"Generate Domain"** butonuna tıklayın
6. ✅ URL görünecek: `https://xxx.up.railway.app`

**Örnek:**
```
https://master-application-agent-production.up.railway.app
```

---

### Yöntem 2: Deploy Sonrası Otomatik

1. Deploy tamamlandıktan sonra
2. **Backend servisinin yanında** küçük bir link görünecek
3. Üzerine tıklayın → URL açılacak
4. URL'i kopyalayın

---

### Yöntem 3: Service → Settings → Networking

1. **Backend servisini** seçin
2. **"Settings"** → **"Networking"** sekmesi
3. **"Public Domain"** bölümünde URL görünecek
4. **"Generate Domain"** butonuna tıklayın (yoksa)

---

### Yöntem 4: Service Logs'da Görünür

1. Deploy sırasında **"Logs"** sekmesine bakın
2. URL genelde log'larda görünür:
   ```
   Server running on https://xxx.up.railway.app
   ```

---

## 📋 Adım Adım (Görsel)

### 1. Railway Dashboard
```
Railway.app Dashboard
├── Your Projects
    └── master-application-agent
        └── Backend Service (tıkla)
```

### 2. Service Sayfası
```
Backend Service
├── [Deployments] ← Deploy durumu
├── [Logs] ← Loglar
├── [Metrics] ← Metrikler
└── [Settings] ← AYARLAR (BURAYA TIKLA)
```

### 3. Settings Sayfası
```
Settings
├── General
├── Environment
├── Domains ← BURAYA TIKLA
└── Networking
```

### 4. Domains Sayfası
```
Domains
└── [Generate Domain] ← BURAYA TIKLA

Sonuç:
✅ https://xxx.up.railway.app
```

---

## 🔍 URL Formatı

Railway URL'leri genelde şu formatta:
```
https://[service-name]-[project-id].up.railway.app
```

**Örnekler:**
- `https://backend-production.up.railway.app`
- `https://master-app-backend.up.railway.app`
- `https://xxx-1234.up.railway.app`

---

## ⚠️ Önemli Notlar

1. **URL otomatik oluşturulur** - Deploy sonrası hemen görünür
2. **Custom domain ekleyebilirsiniz** - Ama gerekli değil
3. **HTTPS otomatik** - SSL sertifikası Railway tarafından sağlanır
4. **URL değişebilir** - Ama genelde sabit kalır

---

## ✅ URL'i Aldıktan Sonra

1. **URL'i kopyala:** `https://xxx.up.railway.app`
2. **Web app `.env` dosyasını güncelle:**
   ```
   VITE_API_URL=https://xxx.up.railway.app/api
   ```
3. **GitHub'a push et**
4. **Vercel otomatik deploy edecek**

---

## 🎯 Hızlı Özet

1. Railway.app → Projeniz → Backend Service
2. **Settings** → **Domains**
3. **Generate Domain** (yoksa)
4. URL'i kopyala: `https://xxx.up.railway.app`
5. Web app `.env` → `VITE_API_URL=https://xxx.up.railway.app/api`

---

**Sorun olursa:** Railway dashboard'da "Logs" sekmesinden backend'in çalışıp çalışmadığını kontrol edin.

