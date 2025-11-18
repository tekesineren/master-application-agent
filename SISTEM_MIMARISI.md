# Sistem Mimarisi - Master Application Agent

## Genel Bakış

Uygulama iki ana bileşenden oluşur:
1. **iOS App** (SwiftUI) - Kullanıcı arayüzü
2. **Backend API** (Python/Flask) - Eşleştirme algoritması ve veri işleme

```
┌─────────────────┐
│   iOS App       │
│   (SwiftUI)     │
│                 │
│  - InputView    │
│  - ResultsView  │
│  - APIService   │
└────────┬────────┘
         │ HTTP Request
         │ (JSON)
         ▼
┌─────────────────┐
│  Backend API    │
│  (Flask)        │
│                 │
│  - /api/match   │
│  - Matching     │
│    Algorithm    │
└─────────────────┘
```

## Veri Akışı

### 1. Kullanıcı Girişi
```
Kullanıcı formu doldurur:
├── GPA (0-4.0)
├── Dil Skoru (TOEFL/IELTS)
├── Motivation Letter (metin)
└── Background (çoklu seçim)
```

### 2. API İsteği
```swift
// iOS App'ten
POST /api/match
{
  "gpa": 3.8,
  "language_score": 110,
  "motivation_letter": "...",
  "background": ["engineering", "robotics"]
}
```

### 3. Eşleştirme Algoritması

Backend'de her okul için skor hesaplanır:

```
Toplam Skor (100 puan):
├── GPA (30 puan)
│   ├── Min GPA'yi geçiyorsa: (GPA/4.0) * 30
│   └── Altındaysa: (GPA/min_gpa) * 15
│
├── Dil Skoru (25 puan)
│   ├── Min skoru geçiyorsa: (score/120) * 25
│   └── Altındaysa: (score/min_score) * 12
│
├── Background (25 puan)
│   └── Ortak alanlar / Gerekli alanlar * 25
│
└── Motivation Letter (20 puan)
    ├── 500-800 kelime: 20 puan
    ├── 300-500 veya 800-1000: 15 puan
    ├── 200+ kelime: 10 puan
    └── 200'den az: 5 puan
```

### 4. Sıralama ve Kategorizasyon

Skorlara göre okullar kategorilere ayrılır:

- **Yüksek Eşleşme** (70+ puan): Başvurulması önerilen
- **İyi Eşleşme** (50-70 puan): Başvurulabilir
- **Düşük Eşleşme** (30-50 puan): Şans düşük ama deneyebilir
- **Ekstra Seçenekler** (<30 puan): Hiçbir şey kaybetmezsiniz

### 5. API Yanıtı
```json
{
  "success": true,
  "results": {
    "high_match": [...],
    "medium_match": [...],
    "low_match": [...],
    "extra_options": [...]
  }
}
```

### 6. Sonuç Gösterimi

iOS app sonuçları kategorilere göre gösterir:
- Her kategori için renkli kartlar
- Okul bilgileri (isim, program, ülke)
- Eşleşme skoru yüzdesi
- Minimum gereksinimler

## Teknik Detaylar

### Backend (Python/Flask)
- **Port**: 5000
- **Framework**: Flask
- **CORS**: iOS app'ten gelen isteklere izin verilir
- **Veri**: Şu an JSON dosyası, ileride veritabanı

### iOS App (SwiftUI)
- **Minimum iOS**: 15.0+
- **Framework**: SwiftUI (modern, kolay)
- **Network**: URLSession (async/await)
- **State Management**: @State, @Environment

## Geliştirme Ortamı

### Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
# http://localhost:5000 çalışır
```

### iOS App
1. Xcode'da projeyi aç
2. Simulator seç (iPhone 15)
3. Run (▶️)
4. App otomatik yüklenir

## Gelecek Geliştirmeler

### Kısa Vadeli
- [ ] Daha fazla okul veritabanı
- [ ] Motivation letter AI analizi (GPT-4 entegrasyonu)
- [ ] Kullanıcı profili kaydetme
- [ ] Favori okullar

### Orta Vadeli
- [ ] Reklam entegrasyonu (Google AdMob)
- [ ] In-app purchase (reklamsız versiyon)
- [ ] Push notifications
- [ ] Okul detay sayfaları

### Uzun Vadeli
- [ ] Veritabanı (PostgreSQL/MongoDB)
- [ ] Kullanıcı hesapları
- [ ] Başvuru takibi
- [ ] Web versiyonu
- [ ] Android versiyonu

## Monetizasyon Stratejisi

1. **Reklamlar** (AdMob)
   - Banner reklamlar (sonuç ekranında)
   - Interstitial reklamlar (sonuçlar arasında)
   - Rewarded reklamlar (ekstra analiz için)

2. **In-App Purchase**
   - Reklamsız versiyon: $2.99
   - Premium analiz: $4.99
   - Sınırsız analiz: $9.99/ay

3. **Freemium Model**
   - Ücretsiz: Günde 3 analiz
   - Premium: Sınırsız analiz + AI önerileri

