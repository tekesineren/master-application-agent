# Master Application Agent - Web App

React + Vite ile geliştirilmiş web uygulaması. Windows'ta geliştirilebilir ve iOS'ta PWA olarak kullanılabilir.

## Kurulum

### 1. Node.js Kurulumu

Eğer Node.js yüklü değilse:
1. https://nodejs.org/ adresinden indirin (LTS versiyonu)
2. Kurulumu tamamlayın
3. Terminal'de kontrol edin:
   ```bash
   node --version
   npm --version
   ```

### 2. Paketleri Yükleyin

```bash
cd web-app
npm install
```

### 3. Uygulamayı Çalıştırın

```bash
npm run dev
```

Uygulama `http://localhost:3000` adresinde açılacak.

### 4. Backend'i Başlatın

**ÖNEMLİ**: Web app çalışmadan önce backend'in çalıştığından emin olun!

Başka bir terminal penceresinde:
```bash
cd backend
python app.py
```

## Kullanım

1. Tarayıcıda `http://localhost:3000` adresini açın
2. Formu doldurun:
   - GPA (0-4.0)
   - Dil Skoru
   - Background seçin
   - Motivation Letter yazın
3. "Eşleştirmeyi Başlat" butonuna tıklayın
4. Sonuçları görün!

## iOS'a Ekleme (PWA)

Web uygulamasını iOS'a Progressive Web App (PWA) olarak ekleyebilirsiniz:

1. Safari'de web uygulamasını açın
2. Paylaş butonuna tıklayın
3. "Ana Ekrana Ekle" seçeneğini seçin
4. Uygulama ana ekranınıza eklenecek

## Production Build

```bash
npm run build
```

Build dosyaları `dist/` klasöründe oluşacak.

## Özellikler

- ✅ Modern React + Vite
- ✅ Responsive tasarım (mobil uyumlu)
- ✅ Backend API entegrasyonu
- ✅ Güzel UI/UX
- ✅ PWA desteği (iOS'a eklenebilir)

