# 📱 Master Application Agent - iOS App (Expo)

## 🚀 Hızlı Başlangıç

### 1. Node.js Kontrolü

PowerShell'de:
```powershell
node --version
npm --version
```

Çalışmıyorsa: Bilgisayarı yeniden başlatın veya Node.js'i yeniden kurun.

### 2. Bağımlılıkları Kur

```bash
cd ios-app-expo
npm install
```

### 3. Asset'leri Oluştur

```bash
# Python gerekli (Pillow)
pip install Pillow
python create-assets.py
```

### 4. Expo Hesabı Oluştur

1. https://expo.dev → Sign up (ücretsiz)
2. `expo login` komutu ile giriş yap

### 5. Test Et

```bash
npm start
```

QR kodu telefonunuzla tarayın (Expo Go app gerekli).

### 6. Build Al (Mac Gerekmez!)

```bash
npm install -g eas-cli
eas login
eas build --platform ios
```

Build cloud'da yapılacak, Mac gerekmez!

### 7. App Store'a Yükle (Mac Gerekli)

Build tamamlandıktan sonra:
- Mac'te Xcode ile aç
- App Store Connect'e yükle

## 📁 Proje Yapısı

```
ios-app-expo/
├── App.js              # Ana component
├── app.json            # Expo config
├── eas.json            # EAS Build config
├── assets/             # Icon, splash screen
├── src/
│   └── screens/
│       ├── HomeScreen.js
│       ├── InputScreen.js
│       └── ResultsScreen.js
└── package.json
```

## ✅ Hazır Özellikler

- ✅ Home screen (landing page)
- ✅ Input form (GPA, dil skoru, motivation letter, background)
- ✅ Results screen (eşleşme sonuçları)
- ✅ Backend API entegrasyonu
- ✅ Modern UI/UX tasarım
- ✅ EAS Build hazır

## 🎯 Sonraki Adımlar

1. Node.js'i düzelt
2. `npm install` çalıştır
3. Asset'leri oluştur
4. `npm start` ile test et
5. Build al (EAS)
6. App Store'a yükle (Mac'te)

