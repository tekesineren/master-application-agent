# 🔄 Backend Uyandırma Rehberi

## Sorun
Render.com backend uyku modunda (15 dakika aktivite yoksa uyuyor).

## ✅ Çözümler

### 1. Otomatik Retry (Web App'te Eklendi)
Web app artık otomatik olarak:
- 3 kez deniyor
- Her denemede 5 saniye bekliyor
- Backend uyandırılıyor

**Kullanıcı yapması gereken:** Sadece tekrar "Gönder" butonuna tıklasın!

### 2. Manuel Backend Uyandırma

#### Render.com Dashboard'dan:
1. https://dashboard.render.com → Giriş yap
2. Backend servisini bul
3. "Manual Deploy" → "Deploy latest commit"
4. 2-3 dakika bekle
5. ✅ Backend uyanık!

#### API'den Direkt:
```bash
# Health check ile uyandır
curl https://master-application-agent.onrender.com/api/health
```

### 3. Keep-Alive Script (Zaten Kurulu)
- PC açıkken otomatik çalışıyor
- Her 10 dakikada bir ping atıyor
- Backend uyumuyor

**Kontrol:**
- Task Manager → `python.exe` process'i çalışıyor mu?

## 🎯 Hızlı Çözüm

**Web app'te:**
1. Formu doldur
2. "Gönder" butonuna tıkla
3. İlk denemede hata alırsan
4. **30-60 saniye bekle**
5. Tekrar "Gönder" butonuna tıkla
6. ✅ Çalışacak! (Backend uyanmış olacak)

## 📋 Backend Durumu Kontrol

### Backend Çalışıyor mu?
Tarayıcıda aç:
```
https://master-application-agent.onrender.com/api/health
```

**Yanıt:**
- `{"status":"ok"}` → ✅ Çalışıyor
- Hata/timeout → ❌ Uyku modunda

### Backend'i Uyandır
1. Yukarıdaki URL'i aç
2. 30-60 saniye bekle
3. Tekrar aç
4. ✅ Uyanmış olacak

---

**Not:** Keep-alive script çalışıyorsa backend genelde uyanık kalır. PC kapalıyken uyuyabilir (normal).

