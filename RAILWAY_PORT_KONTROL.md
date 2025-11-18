# 🔍 Railway Port Kontrol Rehberi

## ❌ 502 Bad Gateway Hatası

Port güncellemesi yapıldı ama hala 502 hatası alınıyor.

## ✅ Kontrol Listesi

### 1. Railway Variables Kontrolü

1. **Railway.app dashboard** → Backend service
2. **Settings** → **Variables** sekmesi
3. `PORT` değişkenini kontrol et:
   - ✅ `PORT=8080` olmalı
   - ❌ Yoksa ekle: `PORT=8080`

### 2. Domain Port Kontrolü

1. **Settings** → **Domains** sekmesi
2. Domain'i kontrol et:
   - ✅ Target Port: `8080` olmalı
   - ❌ `5000` ise güncelle

### 3. Backend Logs Kontrolü

1. **Backend service** → **Logs** sekmesi
2. Son logları kontrol et:
   - ✅ `Running on http://127.0.0.1:8080` görünmeli
   - ❌ Farklı port görünüyorsa sorun var

### 4. Backend Restart

1. **Backend service** → **Settings**
2. **Redeploy** veya **Restart** butonuna tıkla
3. 2-3 dakika bekle
4. Tekrar test et

---

## 🎯 Hızlı Çözüm

**En garantili yöntem:**

1. **Variables** → `PORT=8080` ekle/güncelle
2. **Domains** → Target Port: `8080` güncelle
3. **Backend'i restart et** (Redeploy)
4. **2-3 dakika bekle**
5. **Test et**

---

## 📋 Kontrol Adımları

1. ✅ Variables: `PORT=8080`
2. ✅ Domains: Target Port `8080`
3. ✅ Logs: Backend port 8080'de çalışıyor
4. ✅ Restart: Backend yeniden başlatıldı

**Hepsi ✅ ise backend çalışmalı!**

