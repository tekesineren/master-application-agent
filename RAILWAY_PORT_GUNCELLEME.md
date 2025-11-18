# 🔧 Railway Port Güncelleme - Adım Adım

## 📍 Şu Anki Durum

- **Domain:** `master-application-agent-production.up.railway.app`
- **Mevcut Port:** `5000` ❌ (Yanlış)
- **Backend Çalışan Port:** `8080` ✅ (Doğru)

## ✅ Çözüm: Port'u 8080'e Güncelle

### Adım 1: Domain Ayarlarını Aç
1. Railway dashboard'da zaten açık görünüyor
2. **"Update your domain or target port"** bölümünde
3. **Target port** alanını görüyorsunuz

### Adım 2: Port'u Güncelle
1. **Target port** alanına: `8080` yazın (5000 yerine)
2. **"Update"** butonuna tıklayın
3. ✅ Güncelleme tamamlanacak (1-2 dakika)

### Adım 3: Bekle ve Test Et
1. 1-2 dakika bekle (Railway güncellemeyi uygulayacak)
2. Test et:
   ```
   https://master-application-agent-production.up.railway.app/api/health
   ```
3. ✅ `{"status":"ok"}` görünmeli

---

## 🎯 Hızlı Özet

**Şimdi yapın:**
1. Target port: `5000` → `8080` değiştir
2. **Update** butonuna tıkla
3. 1-2 dakika bekle
4. Test et!

---

**Port'u güncelledikten sonra haber verin, tekrar test edelim!**

