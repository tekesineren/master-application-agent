# Master Application Agent - iOS App

## Kurulum Adımları

### 1. Xcode Kurulumu
- Mac App Store'dan **Xcode**'u indirin (ücretsiz, ~12GB)
- Xcode'u açın ve lisans sözleşmesini kabul edin
- Command Line Tools'u yükleyin: `xcode-select --install`

### 2. Projeyi Oluşturma
1. Xcode'u açın
2. **File > New > Project** seçin
3. **iOS > App** seçin
4. Proje bilgileri:
   - Product Name: `MasterApplicationAgent`
   - Interface: **SwiftUI**
   - Language: **Swift**
   - Storage: **None** (basit başlangıç için)
5. Kaydet: `c:\Users\user\master-application-agent\ios-app\` klasörüne

### 3. Dosyaları Ekleme
Bu klasördeki Swift dosyalarını Xcode projenize ekleyin:
- `ContentView.swift` - Ana ekran
- `InputView.swift` - Kullanıcı giriş ekranı
- `ResultsView.swift` - Sonuç ekranı
- `Models.swift` - Veri modelleri
- `APIService.swift` - Backend API bağlantısı

### 4. Simulator'da Çalıştırma
- Xcode'da üst kısımdan bir simulator seçin (örn: iPhone 15)
- **Run** butonuna (▶️) basın

## Notlar
- İlk çalıştırmada simulator açılması biraz zaman alabilir
- Backend API'nin çalıştığından emin olun (port 5000)

