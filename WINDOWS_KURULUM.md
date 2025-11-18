# 🪟 Windows 11'de Kurulum Rehberi

Mac olmadan da uygulamanızı geliştirebilir ve kullanabilirsiniz!

## ✅ Çözüm: Web Uygulaması

iOS native app yerine **modern web uygulaması** oluşturduk. Bu uygulama:
- ✅ Windows'ta tamamen geliştirilebilir
- ✅ iOS'ta PWA (Progressive Web App) olarak kullanılabilir
- ✅ App Store'a web wrapper ile eklenebilir (ileride)
- ✅ Aynı backend API'yi kullanır

## 📋 Gereksinimler

### 1. Node.js Kurulumu

1. **Node.js İndirin**: https://nodejs.org/
   - **LTS versiyonu** seçin (önerilen)
   - Windows Installer (.msi) indirin
   
2. **Kurulum**:
   - İndirilen `.msi` dosyasını çalıştırın
   - "Next" butonlarına tıklayarak kurulumu tamamlayın
   - "Add to PATH" seçeneğinin işaretli olduğundan emin olun

3. **Kontrol Edin**:
   PowerShell veya Command Prompt'ta:
   ```powershell
   node --version
   npm --version
   ```
   Her iki komut da versiyon numarası göstermeli.

### 2. Python (Backend için - zaten var)

Backend için Python zaten yüklü görünüyor. Eğer değilse:
- https://www.python.org/downloads/
- Python 3.8+ indirin ve kurun

## 🚀 Kurulum Adımları

### Adım 1: Web App Paketlerini Yükleyin

```powershell
cd c:\Users\user\master-application-agent\web-app
npm install
```

Bu işlem birkaç dakika sürebilir (ilk sefer).

### Adım 2: Backend'i Başlatın

**Terminal 1** (Backend için):
```powershell
cd c:\Users\user\master-application-agent\backend
python app.py
```

Backend `http://localhost:5000` adresinde çalışacak.

### Adım 3: Web App'i Başlatın

**Terminal 2** (Web app için - yeni terminal penceresi):
```powershell
cd c:\Users\user\master-application-agent\web-app
npm run dev
```

Web app `http://localhost:3000` adresinde açılacak.

### Adım 4: Tarayıcıda Açın

Tarayıcınızda şu adresi açın:
```
http://localhost:3000
```

🎉 **Uygulama hazır!**

## 📱 iOS'ta Kullanım (PWA)

Web uygulamasını iOS'ta **Progressive Web App (PWA)** olarak kullanabilirsiniz:

### Yöntem 1: Local Network (Aynı WiFi)

1. **Bilgisayarınızın IP adresini öğrenin**:
   ```powershell
   ipconfig
   ```
   IPv4 Address'i not edin (örn: 192.168.1.2)

2. **Backend'i network'te erişilebilir yapın**:
   - Backend zaten `0.0.0.0` üzerinde çalışıyor (tüm network'e açık)
   - Güvenlik duvarı izni gerekebilir

3. **Web app'te API URL'ini değiştirin**:
   `web-app/src/App.jsx` dosyasında:
   ```javascript
   const response = await fetch('http://192.168.1.2:5000/api/match', {
   ```
   (IP adresini kendi IP'nizle değiştirin)

4. **iPhone'da Safari'de açın**:
   ```
   http://192.168.1.2:3000
   ```

5. **Ana Ekrana Ekle**:
   - Safari'de paylaş butonuna tıklayın
   - "Ana Ekrana Ekle" seçin
   - Uygulama ana ekranınıza eklenecek!

### Yöntem 2: Production Deployment (İleride)

Web uygulamasını bir hosting servisine (Vercel, Netlify, Heroku) yükleyip her yerden erişilebilir yapabilirsiniz.

## 🎨 Özellikler

Web uygulaması iOS native app ile aynı özelliklere sahip:
- ✅ Form girişi (GPA, dil skoru, motivation letter, background)
- ✅ Backend API entegrasyonu
- ✅ Eşleştirme sonuçları (kategorize edilmiş)
- ✅ Modern, responsive tasarım
- ✅ Mobil uyumlu
- ✅ PWA desteği (iOS'a eklenebilir)

## 🔧 Sorun Giderme

### "npm komutu bulunamadı"
- Node.js'i yeniden kurun
- Terminal'i kapatıp yeniden açın
- PATH değişkenlerinin güncellenmesi için bilgisayarı yeniden başlatın

### "Port 3000 zaten kullanımda"
- Başka bir uygulama port 3000'i kullanıyor olabilir
- `vite.config.js` dosyasında portu değiştirebilirsiniz

### Backend'e bağlanamıyor
- Backend'in çalıştığından emin olun (`python app.py`)
- `http://localhost:5000/api/health` adresini tarayıcıda test edin

### iOS'ta çalışmıyor
- Aynı WiFi ağında olduğunuzdan emin olun
- Güvenlik duvarı ayarlarını kontrol edin
- IP adresinin doğru olduğundan emin olun

## 📚 Sonraki Adımlar

1. ✅ Web uygulamasını test edin
2. ✅ Daha fazla okul ekleyin
3. ✅ UI'ı iyileştirin
4. ✅ Production'a deploy edin (Vercel, Netlify)
5. ✅ iOS'ta PWA olarak kullanın
6. ✅ İleride App Store'a web wrapper ile ekleyin (Mac gerekir ama sadece bir kez)

## 💡 İleride iOS Native App İçin

Eğer ileride gerçek iOS native app yapmak isterseniz:
- **Cloud Mac servisi** kullanabilirsiniz (MacInCloud, AWS Mac instances)
- Veya bir Mac kiralayabilirsiniz
- Veya React Native'e geçiş yapabilirsiniz (yine de build için Mac gerekir)

Ama şu an için **web uygulaması tamamen yeterli** ve iOS'ta PWA olarak mükemmel çalışır!

---

**Başarılar! 🚀**

