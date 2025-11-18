# ⚖️ Legal İşlemler Rehberi - Master Application Agent

## 1. Telif Hakkı (Copyright) Koruma

### Otomatik Koruma
- **Türkiye'de:** Eser oluşturulduğu anda otomatik telif hakkı kazanırsınız
- **Uluslararası:** Berne Konvansiyonu ile 175+ ülkede korunur
- **Not:** Resmi kayıt gerekmez ama önerilir

### Telif Kaydı (İsteğe Bağlı ama Önerilir)

**Türkiye:**
1. **Kültür ve Turizm Bakanlığı:**
   - https://www.telifhaklari.gov.tr
   - "Eser Kayıt" başvurusu yapın
   - Ücret: ~200-500 TL (eser türüne göre)

2. **Noter Onayı:**
   - Kodunuzun bir kopyasını noterde onaylatın
   - Tarih damgası alın
   - Düşük maliyetli alternatif

**Uluslararası:**
- **US Copyright Office:** https://copyright.gov ($35-55)
- **EU:** Her ülke kendi sistemine sahip

### Kod İçinde Telif Bildirimi

Her dosyanın başına ekleyin:
```javascript
/*
 * Copyright (c) 2025 [Adınız]
 * All rights reserved.
 * 
 * This software and associated documentation files (the "Software")
 * are proprietary and confidential.
 */
```

## 2. Şirket Kurma (Türkiye)

### Seçenek 1: Limited Şirket (Ltd. Şti.)

**Avantajlar:**
- Sınırlı sorumluluk
- Profesyonel görünüm
- Yatırımcı çekmek için uygun

**Gereksinimler:**
- Minimum sermaye: 10.000 TL
- 1 ortak yeterli
- Noter onaylı sözleşme

**Maliyet:**
- Kuruluş: ~2.000-5.000 TL
- Yıllık vergi: Gelire göre

**Adımlar:**
1. Ticaret Sicil Müdürlüğü'ne başvuru
2. Vergi dairesine kayıt
3. SGK bildirimi
4. Banka hesabı açma

### Seçenek 2: Anonim Şirket (A.Ş.)

**Avantajlar:**
- Daha büyük sermaye toplama
- Halka açılma imkanı

**Gereksinimler:**
- Minimum sermaye: 50.000 TL
- 2 ortak gerekli

**Maliyet:**
- Kuruluş: ~5.000-10.000 TL

### Seçenek 3: Bireysel İşletme (En Basit)

**Avantajlar:**
- Hızlı kurulum (1 gün)
- Düşük maliyet
- Basit muhasebe

**Gereksinimler:**
- Sadece kimlik
- Vergi dairesine kayıt

**Maliyet:**
- Kuruluş: ~500-1.000 TL

**Öneri:** Başlangıç için **Bireysel İşletme**, büyüdükçe **Ltd. Şti.**

## 3. Marka Tescili

### Türkiye'de Marka Tescili

1. **Türk Patent ve Marka Kurumu (TPE):**
   - https://www.turkpatent.gov.tr
   - Online başvuru yapabilirsiniz

2. **Gereksinimler:**
   - Marka adı: "Master Application Agent"
   - Logo tasarımı
   - Sınıf seçimi (42. sınıf: Yazılım)

3. **Maliyet:**
   - Başvuru: ~1.500-2.000 TL
   - 10 yıl geçerli
   - Yenileme: ~2.000 TL

4. **Süreç:**
   - Başvuru: 1 gün
   - İnceleme: 2-3 ay
   - Yayın: 2 ay
   - Tescil: 6-12 ay toplam

### Uluslararası Marka

- **EUIPO** (Avrupa): ~€850
- **USPTO** (ABD): ~$250-350
- **WIPO** (Uluslararası): ~$1.000+

## 4. Veri Koruma (GDPR/KVKK)

### KVKK Uyumluluğu (Türkiye)

1. **Aydınlatma Metni:**
   - Kullanıcı verilerini nasıl topladığınızı açıklayın
   - Web sitesinde yayınlayın

2. **Açık Rıza:**
   - Kullanıcıdan veri toplama izni alın
   - Checkbox ekleyin

3. **KVKK Başvurusu:**
   - https://www.kvkk.gov.tr
   - Veri Sorumlusu Bildirimi yapın
   - Ücretsiz

4. **Gizlilik Politikası:**
   - Detaylı gizlilik politikası yazın
   - Web sitesinde yayınlayın

### GDPR Uyumluluğu (Avrupa)

- Avrupa'da kullanıcı varsa GDPR uyumlu olmalı
- Veri işleme sözleşmeleri
- Veri koruma sorumlusu atama (gerekirse)

## 5. Kullanım Şartları ve Gizlilik Politikası

### Gerekli Belgeler:

1. **Kullanım Şartları (Terms of Service):**
   - Hizmetin kullanım koşulları
   - Sorumluluk reddi
   - Fikri mülkiyet hakları

2. **Gizlilik Politikası (Privacy Policy):**
   - Hangi veriler toplanıyor
   - Veriler nasıl kullanılıyor
   - Veriler kimlerle paylaşılıyor
   - Kullanıcı hakları

3. **Çerez Politikası (Cookie Policy):**
   - Hangi çerezler kullanılıyor
   - Çerezlerin amacı

**Not:** Bu belgeleri avukatla hazırlamak önerilir (~2.000-5.000 TL)

## 6. App Store Yasal Gereksinimler

### Apple App Store:

1. **Apple Developer Agreement:**
   - Apple'ın şartlarını kabul etmelisiniz
   - $99/yıl ücret

2. **Privacy Policy URL:**
   - Canlı bir gizlilik politikası linki gerekli

3. **Age Rating:**
   - Uygulamanızın yaş sınırı

4. **Content Guidelines:**
   - Apple'ın içerik kurallarına uygun olmalı

### Google Play Store:

1. **Google Play Developer Agreement:**
   - Google'ın şartlarını kabul
   - $25 tek seferlik ücret

2. **Privacy Policy:**
   - Zorunlu

3. **Content Rating:**
   - PEGI/ESRB rating

## 7. Vergi ve Muhasebe

### Türkiye'de:

1. **KDV:**
   - Yazılım satışları %18 KDV'ye tabi
   - Reklam gelirleri %18 KDV

2. **Gelir Vergisi:**
   - Bireysel: %15-35 (gelire göre)
   - Şirket: %25 kurumlar vergisi

3. **Muhasebe:**
   - Aylık/üç aylık beyanname
   - Muhasebeci tutmak önerilir (~500-1.500 TL/ay)

### Uluslararası:

- **ABD:** IRS'ye kayıt (gerekirse)
- **EU:** Her ülke kendi sistemine sahip

## 8. Sigorta

### Önerilen Sigortalar:

1. **Siber Güvenlik Sigortası:**
   - Veri sızıntısı koruması
   - ~1.000-5.000 TL/yıl

2. **Mesleki Sorumluluk:**
   - Hata/eksiklik koruması
   - ~500-2.000 TL/yıl

3. **Genel Sorumluluk:**
   - Genel risk koruması
   - ~500-1.500 TL/yıl

## 9. Yasal Danışmanlık

### Ne Zaman Avukat Gerekir:

- ✅ Şirket kurma
- ✅ Yatırımcı anlaşmaları
- ✅ Ortaklık sözleşmeleri
- ✅ Kullanım şartları yazma
- ✅ Marka ihlali durumları
- ✅ Uluslararası işlemler

### Avukat Maliyeti:

- **Danışmanlık:** ~500-2.000 TL/saat
- **Sözleşme yazma:** ~2.000-10.000 TL
- **Dava takibi:** ~5.000-50.000 TL+

## 10. Öncelik Sırası (Başlangıç İçin)

### Hemen Yapılması Gerekenler:

1. ✅ **Gizlilik Politikası** yazın (basit versiyon)
2. ✅ **Kullanım Şartları** yazın (basit versiyon)
3. ✅ **KVKK Aydınlatma Metni** hazırlayın
4. ✅ **Telif bildirimi** kodlara ekleyin

### İlk 6 Ay İçinde:

1. ⏰ **Bireysel İşletme** kurun
2. ⏰ **Marka başvurusu** yapın
3. ⏰ **Muhasebeci** tutun

### İlk Yıl İçinde:

1. 📅 **Limited Şirket**'e geçiş (büyürse)
2. 📅 **Siber güvenlik sigortası**
3. 📅 **Avukat danışmanlığı** (gerekirse)

## 11. Kaynaklar ve Linkler

- **Türk Patent:** https://www.turkpatent.gov.tr
- **KVKK:** https://www.kvkk.gov.tr
- **Ticaret Bakanlığı:** https://www.ticaret.gov.tr
- **Vergi Dairesi:** https://www.gib.gov.tr
- **Apple Developer:** https://developer.apple.com
- **Google Play:** https://play.google.com/console

## 12. Örnek Belgeler Şablonları

Basit şablonlar hazırlayabilirim:
- Gizlilik Politikası şablonu
- Kullanım Şartları şablonu
- KVKK Aydınlatma Metni şablonu

İsterseniz bu şablonları da hazırlayabilirim!

---

**Önemli Not:** Bu rehber genel bilgilendirme amaçlıdır. Yasal işlemler için mutlaka bir avukat ve muhasebeci ile çalışın!

