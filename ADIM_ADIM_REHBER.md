# 📋 ADIM ADIM YAPILACAKLAR LİSTESİ

## ✅ BUGÜN YAPILACAKLAR (1-2 Saat)

### 1. Yasal Belgeleri Düzenle (15 dk)
- [ ] `web-app/public/privacy-policy.html` dosyasını aç
- [ ] `[TARİH]` → Bugünün tarihi yaz
- [ ] `[E-MAIL ADRESİNİZ]` → E-posta adresin yaz
- [ ] `[ADRESİNİZ]` → Adresin yaz (şehir yeterli)
- [ ] `[ADINIZ/ŞİRKET ADI]` → Adın yaz
- [ ] `web-app/public/terms-of-service.html` dosyasını aç
- [ ] Aynı şekilde doldur

### 2. Icon'ları Oluştur (20 dk)
- [ ] Midjourney Discord'a git
- [ ] `/imagine prompt: modern app icon, master degree graduation cap, purple and blue gradient background, minimalist design, professional, 512x512, clean white background`
- [ ] Beğendiğin icon'u seç ve upscale yap
- [ ] İndir
- [ ] 192x192 px'e küçült → `icon-192.png` olarak kaydet
- [ ] 512x512 px'i → `icon-512.png` olarak kaydet
- [ ] `web-app/public/` klasörüne koy

### 3. Git Kur (10 dk)
- [ ] https://git-scm.com/download/win adresinden Git indir
- [ ] Kur (varsayılan ayarlarla)
- [ ] Command Prompt'ta `git --version` yaz, çalıştığını kontrol et

### 4. GitHub Hesabı Oluştur (5 dk)
- [ ] https://github.com adresine git
- [ ] "Sign up" tıklayın
- [ ] Email, şifre, kullanıcı adı seç
- [ ] Email'i doğrula

### 5. Kodu GitHub'a Yükle (10 dk)
- [ ] Command Prompt'ta: `cd c:\Users\user\master-application-agent`
- [ ] `git init` yaz
- [ ] `git add .` yaz
- [ ] `git commit -m "Initial commit"` yaz
- [ ] GitHub'da "New repository" tıklayın
- [ ] Repo adı: `master-application-agent`
- [ ] "Create repository" tıklayın
- [ ] GitHub'ın gösterdiği komutları çalıştır:
  ```cmd
  git remote add origin https://github.com/KULLANICI_ADINIZ/master-application-agent.git
  git branch -M main
  git push -u origin main
  ```

### 6. Vercel'e Deploy Et (15 dk)
- [ ] https://vercel.com adresine git
- [ ] "Sign Up" → "Continue with GitHub" tıklayın
- [ ] GitHub hesabınla giriş yap
- [ ] "Add New..." → "Project" tıklayın
- [ ] Repo'nu seç (`master-application-agent`)
- [ ] Framework Preset: **Vite**
- [ ] Root Directory: `web-app` yaz
- [ ] Build Command: `npm run build` (otomatik gelir)
- [ ] Output Directory: `dist` (otomatik gelir)
- [ ] "Deploy" tıklayın
- [ ] 1-2 dakika bekle
- [ ] Web siten canlı! URL'i not et

### 7. Backend'i Render.com'a Deploy Et (20 dk)
- [ ] https://render.com adresine git
- [ ] "Get Started for Free" → GitHub ile giriş yap
- [ ] "New +" → "Web Service" tıklayın
- [ ] Repo'nu seç
- [ ] Name: `master-application-agent-api`
- [ ] Region: Europe (Frankfurt)
- [ ] Branch: `main`
- [ ] Root Directory: `backend` yaz
- [ ] Environment: `Python 3`
- [ ] Build Command: `pip install -r requirements.txt`
- [ ] Start Command: `python app.py`
- [ ] "Environment" sekmesine git
- [ ] Environment Variable ekle:
  - Key: `FLASK_ENV`, Value: `production`
  - Key: `FRONTEND_URL`, Value: `https://SİZİN-VERCEL-URL.vercel.app`
- [ ] "Create Web Service" tıklayın
- [ ] 2-3 dakika bekle
- [ ] Backend URL'ini not et (örn: `master-application-agent-api.onrender.com`)

### 8. Web App'te API URL'ini Güncelle (5 dk)
- [ ] `web-app` klasöründe `.env` dosyası oluştur
- [ ] İçine şunu yaz:
  ```
  VITE_API_URL=https://SİZİN-RENDER-URL.onrender.com/api
  ```
- [ ] Render URL'ini yaz
- [ ] GitHub'a push et:
  ```cmd
  cd c:\Users\user\master-application-agent
  git add .
  git commit -m "Update API URL for production"
  git push
  ```
- [ ] Vercel otomatik yeniden deploy edecek

## ✅ BU HAFTA YAPILACAKLAR

### 9. Test Et (30 dk)
- [ ] Canlı web sitenizi açın (Vercel URL)
- [ ] Formu doldurun
- [ ] Eşleştirme yapın
- [ ] Sonuçları kontrol edin
- [ ] Mobilde test edin

### 10. KVKK Bildirimi (30 dk)
- [ ] https://www.kvkk.gov.tr adresine git
- [ ] "Veri Sorumlusu Bildirimi" yap
- [ ] Formu doldur (ücretsiz)
- [ ] Bildirimi gönder

### 11. Domain Al (İsteğe Bağlı - 15 dk)
- [ ] https://namecheap.com veya https://domains.google
- [ ] Domain ara (örn: `masterapplicationagent.com`)
- [ ] Satın al (~$10-15/yıl)
- [ ] Vercel'e bağla (Settings > Domains)

## ✅ BU AY YAPILACAKLAR

### 12. Bireysel İşletme Kur (2-3 saat)
- [ ] Vergi dairesine git
- [ ] Başvuru formunu doldur
- [ ] Gerekli belgeleri hazırla
- [ ] Başvuruyu yap (~500-1.000 TL)

### 13. Marka Başvurusu (1 saat)
- [ ] https://www.turkpatent.gov.tr adresine git
- [ ] Online başvuru yap
- [ ] "Master Application Agent" markası için başvur
- [ ] Ödeme yap (~1.500-2.000 TL)

### 14. Muhasebeci Bul (1 saat)
- [ ] Yerel muhasebeci ara
- [ ] Fiyat sor (~500-1.500 TL/ay)
- [ ] Anlaşma yap

## ✅ İLERİDE YAPILACAKLAR

### 15. iOS PWA Test (30 dk)
- [ ] iPhone'da Safari'de sitenizi açın
- [ ] Paylaş butonuna tıklayın
- [ ] "Ana Ekrana Ekle" seçin
- [ ] App gibi görünecek!

### 16. Daha Fazla Okul Ekle
- [ ] Backend'deki `UNIVERSITIES` listesini genişlet
- [ ] 100+ okul hedefi

### 17. Analytics Ekle
- [ ] Google Analytics hesabı aç
- [ ] Tracking code ekle
- [ ] Kullanıcı davranışlarını analiz et

---

## 📝 NOTLAR

- Her adımı tamamladıkça ✅ işaretle
- Takıldığın yerde ilgili rehber dosyasına bak
- Her adım için tahmini süre yazılı
- Acele etme, sırayla ilerle

## 🆘 YARDIM

- Herhangi bir adımda takılırsan sor
- Rehber dosyalarına bak:
  - `DEPLOYMENT_REHBERI.md`
  - `LEGAL_REHBERI.md`
  - `IOS_ENTEGRASYON.md`

---

**Başarılar! Her adımı tamamladıkça bir sonrakine geç! 🚀**

