# 📊 Google Analytics Ekleme Rehberi

## Adım 1: Google Analytics Hesabı Oluşturun

### 1.1. Google Analytics'e Gidin
1. Tarayıcıda: https://analytics.google.com
2. Google hesabınızla giriş yapın

### 1.2. Hesap Oluşturun
1. "Start measuring" veya "Create Account" tıklayın
2. Account name: `Master Application Agent`
3. "Next" tıklayın

### 1.3. Property Oluşturun
1. Property name: `Master Application Agent Web`
2. Reporting time zone: `(GMT+03:00) Istanbul`
3. Currency: `Turkish Lira (TRY)`
4. "Next" tıklayın

### 1.4. Business Bilgileri
1. Industry category: `Education`
2. Business size: `Small`
3. "Create" tıklayın

### 1.5. Data Stream Oluşturun
1. Platform: **Web** seçin
2. Website URL: Vercel URL'iniz (örn: `https://master-application-agent.vercel.app`)
3. Stream name: `Master Application Agent`
4. "Create stream" tıklayın

### 1.6. Measurement ID'yi Kopyalayın
- **Measurement ID** görünecek (örn: `G-XXXXXXXXXX`)
- Bu ID'yi kopyalayın

## Adım 2: Web App'e Analytics Ekleyin

### 2.1. Google Analytics Package Kurun
Command Prompt'ta:
```cmd
cd c:\Users\user\master-application-agent\web-app
npm install react-ga4
```

### 2.2. Analytics Dosyası Oluşturun
Ben sizin için oluşturacağım (bir sonraki adımda)

### 2.3. App.jsx'e Ekleyin
Ben sizin için ekleyeceğim (bir sonraki adımda)

## Adım 3: Test Edin

1. Web app'inizi açın
2. Google Analytics → Realtime → Overview
3. Sayfayı yenileyin
4. 1-2 dakika içinde görünmeli

## Özet

1. Google Analytics hesabı oluşturun
2. Measurement ID'yi alın
3. Web app'e ekleyin (ben yapacağım)
4. Test edin

---

**Measurement ID'nizi aldıktan sonra bana söyleyin, ben web app'e ekleyeceğim!**

