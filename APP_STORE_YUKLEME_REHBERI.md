# 📱 App Store'a Yükleme Rehberi

## ⚠️ ÖNEMLİ: Mac Gereksinimi

App Store'a yüklemek için **Mac bilgisayar** gereklidir. Windows'ta direkt yapılamaz.

## 🎯 Seçenekler

### Seçenek 1: Cloud Mac Servisi (Önerilen)

#### MacInCloud
1. **Kayıt Olun:**
   - https://www.macincloud.com
   - Plan seçin: "Dedicated Server" (~$30-50/ay)
   - Veya "Shared Server" (~$20/ay) - daha ucuz

2. **Mac'e Bağlanın:**
   - Remote Desktop ile Mac'e bağlanın
   - Xcode'u kurun
   - Projeyi build edin

3. **Avantajlar:**
   - ✅ Mac satın almanıza gerek yok
   - ✅ İhtiyaç olduğunda kullanabilirsiniz
   - ✅ Aylık ödeme

4. **Dezavantajlar:**
   - ❌ Aylık ücret (~$20-50/ay)
   - ❌ İnternet bağlantısı gerekli

#### AWS Mac Instance
1. **AWS Hesabı:**
   - https://aws.amazon.com
   - EC2 Mac instance oluşturun
   - Saatlik ödeme (~$1-2/saat)

2. **Avantajlar:**
   - ✅ Sadece kullandığınız süre için ödeme
   - ✅ Güvenilir

3. **Dezavantajlar:**
   - ❌ Kurulum biraz karmaşık
   - ❌ Saatlik ücret

### Seçenek 2: Mac Kiralama

1. **Yerel Mac Kiralama:**
   - Yerel bilgisayar kiralama şirketleri
   - Kısa süreli kiralama

2. **Arkadaş/İş Ortağı Mac'i:**
   - Bir arkadaşınızın Mac'ini kullanın
   - Sadece build için

### Seçenek 3: Capacitor ile Native App (Mac Gerekli)

Web app'inizi Capacitor ile native iOS app'e çevirebilirsiniz:

1. **Capacitor Kurulumu:**
   ```bash
   cd web-app
   npm install @capacitor/core @capacitor/cli @capacitor/ios
   npx cap init
   npx cap add ios
   ```

2. **Build:**
   ```bash
   npm run build
   npx cap sync
   npx cap open ios
   ```

3. **Xcode'da Build:**
   - Archive oluşturun
   - App Store Connect'e yükleyin

## 📋 App Store Gereksinimleri

### 1. Apple Developer Account
- **Ücret:** $99/yıl (~3.000 TL/yıl)
- **Kayıt:** https://developer.apple.com
- **Süreç:** 1-2 gün onay

### 2. App Store Connect
- **Hesap:** https://appstoreconnect.apple.com
- **Yeni App Oluştur:** App bilgileri, screenshot, açıklama

### 3. Xcode ile Build
- **Mac + Xcode** gerekli
- Archive oluşturun
- App Store Connect'e yükleyin

### 4. Review Süreci
- **Süre:** 1-7 gün
- **Gereksinimler:**
  - Privacy Policy URL (hazır ✅)
  - App açıklaması
  - Screenshot'lar
  - Icon (hazır ✅)

## 🚀 Hızlı Başlangıç (Mac Varsa)

### Adım 1: Capacitor Kur
```bash
cd web-app
npm install @capacitor/core @capacitor/cli @capacitor/ios
npx cap init
npx cap add ios
```

### Adım 2: Build
```bash
npm run build
npx cap sync
npx cap open ios
```

### Adım 3: Xcode'da
1. Xcode'da proje açılacak
2. Signing & Capabilities → Team seçin
3. Product → Archive
4. Distribute App → App Store Connect
5. Yükleyin

## 💡 Öneri

**Şimdilik:**
- PWA olarak kullanın (iPhone'da çalışıyor ✅)
- Kullanıcılar "Ana Ekrana Ekle" ile kullanabilir
- App Store'a yüklemek için Mac gerekiyor

**İleride:**
- MacInCloud kiralayın (~$30/ay)
- Veya bir Mac satın alın
- App Store'a yükleyin

## 📝 Checklist

- [ ] Mac erişimi (Cloud Mac veya fiziksel Mac)
- [ ] Apple Developer Account ($99/yıl)
- [ ] Xcode kurulumu
- [ ] Capacitor ile native app oluşturma
- [ ] App Store Connect'te app oluşturma
- [ ] Screenshot'lar hazırlama
- [ ] Review için gönderme

---

**Not:** PWA olarak şu an iPhone'da çalışıyor! App Store'a yüklemek için Mac gerekiyor ama zorunlu değil.

