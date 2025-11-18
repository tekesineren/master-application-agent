# 🚀 MacInCloud - Hızlı Başlangıç (5 Dakika)

## Adım 1: Kayıt Ol (2 dk)

1. https://www.macincloud.com
2. "Get Started" → Plan seç:
   - **"Dedicated Server"** - $30/ay (önerilen, daha hızlı)
   - Veya **"Shared Server"** - $20/ay (daha ucuz)
3. Kayıt ol → Ödeme yap

## Adım 2: Mac'e Bağlan (1 dk)

1. Email'inize gelen bağlantı bilgilerini açın
2. **Remote Desktop** ile Mac'e bağlan:
   - Windows'ta: Remote Desktop Connection
   - Mac IP'si ve şifre email'de olacak
3. Mac ekranı açılacak!

## Adım 3: Xcode Kur (5 dk)

Mac'te:
1. App Store'u aç
2. "Xcode" ara → İndir (ücretsiz, ~12GB)
3. Kurulumu bekle

## Adım 4: Projeyi Build Et (10 dk)

Mac'te terminal:
```bash
# Projeyi clone et
git clone https://github.com/tekesineren/master-application-agent.git
cd master-application-agent/web-app

# Capacitor kur
npm install @capacitor/core @capacitor/cli @capacitor/ios
npx cap init
npx cap add ios

# Build
npm run build
npx cap sync
npx cap open ios
```

## Adım 5: Xcode'da Archive (5 dk)

1. Xcode açılacak
2. Signing → Team seç (Apple Developer hesabın)
3. Product → Archive
4. Distribute App → App Store Connect
5. Upload!

## Toplam Süre: ~30 dakika

---

**ŞİMDİ YAP:**
1. MacInCloud'a kayıt ol: https://www.macincloud.com
2. Mac'e bağlan
3. Bana "Mac'e bağlandım" yaz, devam edelim!

