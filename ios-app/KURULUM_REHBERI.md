# iOS App Kurulum Rehberi

## Adım Adım Kurulum

### 1. Xcode Kurulumu (Mac Gerekli)

iOS uygulaması geliştirmek için **Mac bilgisayar** ve **Xcode** gereklidir.

1. **Mac App Store**'u açın
2. "Xcode" arayın
3. **Ücretsiz** olarak indirin (yaklaşık 12GB)
4. İndirme ve kurulum tamamlanana kadar bekleyin (30-60 dakika sürebilir)

### 2. Xcode İlk Kurulum

1. Xcode'u açın
2. Lisans sözleşmesini kabul edin
3. **Preferences > Components** bölümünden gerekli simulator'ları indirin
4. Terminal'de şu komutu çalıştırın:
   ```bash
   xcode-select --install
   ```

### 3. Yeni Proje Oluşturma

1. Xcode'u açın
2. **File > New > Project** (veya `Cmd + Shift + N`)
3. **iOS** sekmesini seçin
4. **App** template'ini seçin
5. **Next** butonuna tıklayın

### 4. Proje Ayarları

Aşağıdaki bilgileri girin:

- **Product Name**: `MasterApplicationAgent`
- **Team**: None (başlangıç için)
- **Organization Identifier**: `com.yourname` (örn: `com.eren`)
- **Interface**: **SwiftUI** ✅
- **Language**: **Swift** ✅
- **Storage**: **None**
- **Include Tests**: İsteğe bağlı

6. **Next** butonuna tıklayın
7. Kayıt yeri: `c:\Users\user\master-application-agent\ios-app\` klasörünü seçin
8. **Create** butonuna tıklayın

### 5. Mevcut Dosyaları Projeye Ekleme

Xcode projesi oluşturulduktan sonra, bu klasördeki Swift dosyalarını projeye ekleyin:

1. Xcode'da sol panelde proje klasörüne **sağ tıklayın**
2. **Add Files to "MasterApplicationAgent"...** seçin
3. Şu dosyaları seçin:
   - `Models.swift`
   - `APIService.swift`
   - `InputView.swift`
   - `ResultsView.swift`
4. **Copy items if needed** seçeneğini işaretleyin
5. **Add** butonuna tıklayın

### 6. ContentView.swift'i Güncelleme

Xcode otomatik olarak bir `ContentView.swift` oluşturmuştur. İçeriğini bu klasördeki `ContentView.swift` dosyasıyla değiştirin.

### 7. Info.plist Ayarları (Network İzinleri)

iOS 9+ için network istekleri için özel ayar gerekmez, ancak HTTP (localhost hariç) için:

1. Sol panelde proje adına tıklayın
2. **Info** sekmesine gidin
3. **App Transport Security Settings** ekleyin
4. **Allow Arbitrary Loads** = YES (sadece geliştirme için)

**Not**: Localhost için bu ayar gerekmez.

### 8. Simulator'da Çalıştırma

1. Xcode'un üst kısmında, proje adının yanında bir cihaz seçin
2. **iPhone 15** veya başka bir simulator seçin
3. **Run** butonuna basın (▶️) veya `Cmd + R`
4. İlk çalıştırmada simulator açılması 1-2 dakika sürebilir

### 9. Backend API'yi Başlatma

iOS app çalışmadan önce backend API'nin çalıştığından emin olun:

```bash
cd c:\Users\user\master-application-agent\backend
pip install -r requirements.txt
python app.py
```

Backend `http://localhost:5000` adresinde çalışacak.

### 10. Test Etme

1. Simulator açıldığında uygulama otomatik olarak yüklenecek
2. Formu doldurun:
   - GPA: 3.5
   - Dil Skoru: 110
   - Background seçin
   - Motivation letter yazın
3. "Eşleştirmeyi Başlat" butonuna tıklayın
4. Sonuçları görün!

## Sorun Giderme

### "Could not connect to server" hatası
- Backend API'nin çalıştığından emin olun
- Terminal'de `python app.py` komutunu çalıştırın

### Simulator açılmıyor
- Xcode > Preferences > Components'ten simulator indirin
- Xcode'u yeniden başlatın

### Dosyalar görünmüyor
- Dosyaları projeye eklerken "Copy items if needed" seçeneğini işaretleyin
- Dosyaların doğru klasörde olduğundan emin olun

## Sonraki Adımlar

- [ ] Daha fazla okul veritabanı ekle
- [ ] Motivation letter analizini geliştir (AI entegrasyonu)
- [ ] Reklam entegrasyonu (AdMob)
- [ ] App Store'a yükleme hazırlığı

