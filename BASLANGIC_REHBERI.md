# 🚀 Başlangıç Rehberi - Master Application Agent

## Hoş Geldiniz!

Bu rehber, uygulamanızı ilk kez çalıştırmak için adım adım talimatlar içerir.

## 📋 Gereksinimler

### Backend için:
- ✅ Python 3.8+ (https://www.python.org/downloads/)
- ✅ pip (Python ile birlikte gelir)

### iOS App için:
- ✅ Mac bilgisayar (Windows'ta iOS geliştirme yapılamaz)
- ✅ Xcode (Mac App Store'dan ücretsiz)

## 🎯 Hızlı Başlangıç

### Adım 1: Backend'i Çalıştırın

1. Terminal/PowerShell'i açın
2. Backend klasörüne gidin:
   ```bash
   cd c:\Users\user\master-application-agent\backend
   ```
3. Gerekli paketleri yükleyin:
   ```bash
   pip install -r requirements.txt
   ```
4. Backend'i başlatın:
   ```bash
   python app.py
   ```
5. Şu mesajı görmelisiniz:
   ```
   * Running on http://127.0.0.1:5000
   ```
   ✅ Backend çalışıyor!

### Adım 2: Backend'i Test Edin

Yeni bir terminal penceresi açın ve test edin:

**Windows PowerShell:**
```powershell
Invoke-WebRequest -Uri "http://localhost:5000/api/health" -Method GET
```

Veya tarayıcıda şu adresi açın:
```
http://localhost:5000/api/health
```

"status": "ok" mesajını görmelisiniz.

### Adım 3: iOS App'i Kurun

**ÖNEMLİ**: iOS uygulaması geliştirmek için **Mac bilgisayar** gereklidir!

1. **Xcode'u İndirin** (Mac App Store'dan, ~12GB)
2. **Xcode'u Açın** ve lisans sözleşmesini kabul edin
3. **Yeni Proje Oluşturun**:
   - File > New > Project
   - iOS > App
   - Product Name: `MasterApplicationAgent`
   - Interface: **SwiftUI** ✅
   - Language: **Swift** ✅
4. **Dosyaları Ekleyin**:
   - `ios-app` klasöründeki tüm `.swift` dosyalarını Xcode projenize sürükleyin
   - "Copy items if needed" seçeneğini işaretleyin
5. **ContentView.swift'i Güncelleyin**:
   - Xcode'un oluşturduğu `ContentView.swift` dosyasını açın
   - İçeriğini `ios-app/ContentView.swift` dosyasındaki kodla değiştirin

### Adım 4: İlk Çalıştırma

1. Xcode'da üst kısımdan **iPhone 15** simulator'ını seçin
2. **Run** butonuna (▶️) basın veya `Cmd + R`
3. Simulator açılacak ve uygulama yüklenecek (ilk sefer 1-2 dakika sürebilir)

### Adım 5: Test Edin

1. Uygulamada formu doldurun:
   - **GPA**: 3.5
   - **Dil Skoru**: 110
   - **Background**: Engineering, Robotics seçin
   - **Motivation Letter**: Birkaç paragraf yazın (500+ kelime)
2. **"Eşleştirmeyi Başlat"** butonuna tıklayın
3. Sonuçları görün! 🎉

## 🔧 Sorun Giderme

### Backend çalışmıyor
- Python yüklü mü kontrol edin: `python --version`
- Port 5000 kullanımda mı? Başka bir uygulama kullanıyor olabilir
- `pip install` hataları varsa: `pip install --upgrade pip`

### iOS App backend'e bağlanamıyor
- Backend'in çalıştığından emin olun
- Simulator için `localhost` çalışır
- Gerçek iPhone için bilgisayarınızın IP adresini kullanın:
  - `APIService.swift` dosyasında `baseURL`'i değiştirin
  - Örnek: `"http://192.168.1.100:5000/api"`

### Xcode hataları
- Xcode'u yeniden başlatın
- Product > Clean Build Folder (`Cmd + Shift + K`)
- Derived Data'yı temizleyin

## 📚 Öğrenme Kaynakları

### SwiftUI Öğrenmek İçin:
- Apple'ın resmi SwiftUI tutorial'ı
- Hacking with Swift (ücretsiz kurs)

### Flask Öğrenmek İçin:
- Flask resmi dokümantasyonu
- Python Flask Tutorial (YouTube)

## 🎓 Sistem Mimarisi

Detaylı mimari açıklaması için `SISTEM_MIMARISI.md` dosyasına bakın.

## 📝 Sonraki Adımlar

1. ✅ Backend ve iOS app çalışıyor mu test edin
2. ✅ Daha fazla okul ekleyin (`backend/app.py` içinde `UNIVERSITIES` listesine)
3. ✅ Algoritmayı geliştirin (motivation letter analizi için AI ekleyin)
4. ✅ UI'ı iyileştirin (renkler, animasyonlar)
5. ✅ Reklam entegrasyonu için hazırlık yapın

## 💡 İpuçları

- Backend'i her zaman çalıştırın (iOS app çalışırken)
- Kod değişikliklerinde Xcode'u yeniden build edin
- Simulator'da test ederken network isteklerini kontrol edin
- Console loglarına bakın (Xcode alt panelinde)

## 🆘 Yardım

Sorun yaşarsanız:
1. Hata mesajını okuyun
2. Console loglarına bakın
3. `SISTEM_MIMARISI.md` dosyasını kontrol edin
4. Google'da hata mesajını arayın

---

**Başarılar! 🚀**

