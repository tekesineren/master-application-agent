# 🚀 Production Deployment Rehberi

## 1. Web Uygulamasını Canlıya Alma

### Seçenek 1: Vercel (Önerilen - Ücretsiz ve Kolay)

**Adımlar:**

1. **Vercel Hesabı Oluşturun:**
   - https://vercel.com adresine gidin
   - GitHub, Google veya Email ile kaydolun (ücretsiz)

2. **GitHub'a Kod Yükleyin:**
   ```bash
   # Git kurulumu (eğer yoksa)
   # https://git-scm.com/download/win
   
   cd c:\Users\user\master-application-agent
   git init
   git add .
   git commit -m "Initial commit"
   
   # GitHub'da yeni repo oluşturun (github.com/new)
   # Sonra:
   git remote add origin https://github.com/KULLANICI_ADI/master-application-agent.git
   git push -u origin main
   ```

3. **Vercel'e Deploy Edin:**
   - Vercel.com'da "New Project" tıklayın
   - GitHub repo'nuzu seçin
   - Framework Preset: **Vite**
   - Root Directory: `web-app`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Deploy!

4. **Backend için Environment Variables:**
   - Vercel'de Settings > Environment Variables
   - Backend URL'i ekleyin (ayrı deploy edeceğiz)

### Seçenek 2: Netlify (Alternatif)

1. https://netlify.com kaydolun
2. "Add new site" > "Import an existing project"
3. GitHub repo'nuzu bağlayın
4. Build settings:
   - Build command: `cd web-app && npm run build`
   - Publish directory: `web-app/dist`

## 2. Backend API'yi Deploy Etme

### Seçenek 1: Render.com (Önerilen - Ücretsiz)

1. **Render Hesabı Oluşturun:**
   - https://render.com kaydolun

2. **Yeni Web Service Oluşturun:**
   - "New" > "Web Service"
   - GitHub repo'nuzu bağlayın
   - Settings:
     - Name: `master-application-agent-api`
     - Environment: `Python 3`
     - Build Command: `pip install -r requirements.txt`
     - Start Command: `python app.py`
     - Root Directory: `backend`

3. **Environment Variables:**
   - `FLASK_ENV=production`
   - `PORT=5000`

4. **CORS Ayarları:**
   - `app.py` dosyasında CORS'u güncelleyin:
   ```python
   CORS(app, resources={r"/api/*": {"origins": ["https://your-web-app.vercel.app"]}})
   ```

### Seçenek 2: Railway.app (Alternatif)

1. https://railway.app kaydolun
2. "New Project" > "Deploy from GitHub"
3. Backend klasörünü seçin
4. Otomatik deploy!

### Seçenek 3: Heroku (Ücretli - Daha Güvenilir)

1. https://heroku.com kaydolun
2. Heroku CLI kurun
3. Deploy edin

## 3. Domain Alma (İsteğe Bağlı)

- **Namecheap**: https://namecheap.com (ucuz, ~$10/yıl)
- **Google Domains**: https://domains.google
- **GoDaddy**: https://godaddy.com

Domain'i Vercel'e bağlayın (Settings > Domains)

## 4. iOS App Oluşturma

### Yöntem 1: PWA (Progressive Web App) - En Kolay

Web uygulamanız zaten PWA desteğine sahip! Sadece:

1. **PWA Manifest'i Güncelleyin:**
   - `web-app/public/manifest.json` dosyasını güncelleyin
   - Icon'lar ekleyin (192x192, 512x512)

2. **iOS'ta Kullanım:**
   - Safari'de sitenizi açın
   - Paylaş > "Ana Ekrana Ekle"
   - App gibi görünecek!

### Yöntem 2: React Native (Gerçek Native App)

1. **React Native CLI Kurun:**
   ```bash
   npm install -g react-native-cli
   ```

2. **Yeni Proje Oluşturun:**
   ```bash
   npx react-native init MasterApplicationAgent
   ```

3. **Kodları Taşıyın:**
   - Web app'teki component'leri React Native'e uyarlayın
   - `View`, `Text`, `ScrollView` kullanın

4. **iOS Build (Mac Gerekli):**
   - Xcode ile build edin
   - App Store'a yükleyin

### Yöntem 3: Capacitor (Web App'i Native'e Çevir)

1. **Capacitor Kurun:**
   ```bash
   cd web-app
   npm install @capacitor/core @capacitor/cli
   npx cap init
   npx cap add ios
   ```

2. **Build ve Sync:**
   ```bash
   npm run build
   npx cap sync
   npx cap open ios
   ```

3. **Xcode'da Açın (Mac Gerekli):**
   - iOS app olarak build edin
   - App Store'a yükleyin

## 5. App Store'a Yükleme

### Gereksinimler:

1. **Apple Developer Account** ($99/yıl)
   - https://developer.apple.com
   - Kayıt olun ve ödeme yapın

2. **App Store Connect:**
   - https://appstoreconnect.apple.com
   - Yeni app oluşturun
   - Metadata doldurun (açıklama, screenshot, icon)

3. **Xcode ile Build:**
   - Archive oluşturun
   - App Store Connect'e yükleyin
   - Review için gönderin

## 6. Production Checklist

- [ ] Web app deploy edildi (Vercel/Netlify)
- [ ] Backend API deploy edildi (Render/Railway)
- [ ] CORS ayarları yapıldı
- [ ] Environment variables ayarlandı
- [ ] Domain bağlandı (isteğe bağlı)
- [ ] SSL sertifikası aktif (otomatik)
- [ ] Analytics eklendi (Google Analytics)
- [ ] Error tracking (Sentry)
- [ ] iOS app hazır (PWA veya Native)
- [ ] App Store başvurusu yapıldı

## 7. Performans Optimizasyonu

- [ ] Image optimization
- [ ] Code splitting
- [ ] Lazy loading
- [ ] CDN kullanımı
- [ ] Caching stratejisi

---

**Sonraki Adım:** Legal işlemler için `LEGAL_REHBERI.md` dosyasına bakın!

