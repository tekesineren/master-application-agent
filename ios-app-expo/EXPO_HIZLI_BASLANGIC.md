# 🚀 Expo - Hızlı Başlangıç

## ✅ Hazır Olanlar

- ✅ Expo proje yapısı oluşturuldu
- ✅ Tüm ekranlar hazır (Home, Input, Results)
- ✅ Backend API bağlantısı yapıldı
- ✅ Stil ve tasarım hazır

## 📋 Şimdi Yapılacaklar

### Adım 1: Node.js'i Düzelt (5 dk)

PowerShell'i **YÖNETİCİ OLARAK** açın ve:

```powershell
# Node.js PATH'ini kontrol et
$env:PATH += ";C:\Program Files\nodejs"
```

Veya bilgisayarı yeniden başlatın.

### Adım 2: Expo CLI Kur (2 dk)

```bash
cd c:\Users\user\master-application-agent\ios-app-expo
npm install
npm install -g expo-cli
```

### Adım 3: Expo Hesabı Oluştur (2 dk)

1. https://expo.dev kaydolun (ücretsiz)
2. `expo login` komutu ile giriş yapın

### Adım 4: Test Et (5 dk)

```bash
npm start
```

QR kod görünecek:
- **iOS:** Expo Go app ile QR kodu tarayın
- **Android:** Expo Go app ile QR kodu tarayın
- **Web:** `w` tuşuna basın (tarayıcıda açılır)

### Adım 5: Build Al (EAS Build - Mac Gerekmez!)

```bash
# EAS CLI kur
npm install -g eas-cli

# EAS hesabına giriş
eas login

# Build al (cloud'da, Mac gerekmez!)
eas build --platform ios
```

### Adım 6: App Store'a Yükle (Mac Gerekli - Sadece Bu Adım!)

Build tamamlandıktan sonra:
1. Mac'e gidin (MacInCloud veya başka)
2. Build'i indirin
3. Xcode ile App Store Connect'e yükleyin

## 🎯 Özet

- ✅ **Geliştirme:** Windows'ta yapılır (Expo Go ile test)
- ✅ **Build:** Mac gerekmez (EAS Build cloud'da)
- ⚠️ **App Store Yükleme:** Mac gerekli (sadece son adım)

## 💡 Hızlı Test

Node.js çalıştıktan sonra:
```bash
cd ios-app-expo
npm install
npm start
```

QR kodu telefonunuzla tarayın - app çalışacak!

---

**Node.js'i düzelttikten sonra "Node.js hazır" yazın, devam edelim!**

