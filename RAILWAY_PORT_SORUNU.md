# 🔧 Railway Port Sorunu - Çözüm

## ❌ Sorun

Backend **port 8080**'de çalışıyor ama Railway domain **port 5000**'e yönlendiriyor!

**Loglar:**
```
Running on http://127.0.0.1:8080
Running on http://10.165.113.227:8080
```

**Hata:**
```
connection refused
httpStatus: 502
```

## ✅ Çözüm

### Yöntem 1: Railway Domain Port'unu Güncelle (Önerilen)

1. **Railway.app dashboard** → Backend service
2. **Settings** → **Domains** sekmesi
3. Mevcut domain'i bul
4. **"Edit"** veya **"Configure"** tıkla
5. **Target Port:** `8080` yaz (5000 yerine)
6. **Save**

### Yöntem 2: Railway PORT Environment Variable Kontrolü

1. **Railway.app dashboard** → Backend service
2. **Settings** → **Variables** sekmesi
3. `PORT` değişkenini kontrol et
4. Eğer yoksa ekle: `PORT=8080`
5. Backend otomatik olarak 8080'de çalışacak

### Yöntem 3: Backend Kodunu Güncelle (Alternatif)

Backend zaten PORT environment variable kullanıyor, bu yüzden Railway'in PORT değişkenini kontrol etmek yeterli.

---

## 🎯 Hızlı Çözüm

**Railway dashboard'da:**
1. Backend service → **Settings** → **Domains**
2. Domain'i bul → **Edit**
3. **Target Port:** `8080` yaz
4. **Save**

✅ Backend artık çalışacak!

---

## 📋 Kontrol

Domain port'unu güncelledikten sonra:

1. **1-2 dakika bekle** (Railway güncellemeyi uygulayacak)
2. **Test et:**
   ```
   https://master-application-agent-production.up.railway.app/api/health
   ```
3. **Yanıt:** `{"status":"ok"}` görünmeli

---

**Şimdi yapın:** Railway dashboard'da domain port'unu 8080'e güncelleyin!

