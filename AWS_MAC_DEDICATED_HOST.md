# 🖥️ AWS Mac Instance - Dedicated Host Gereksinimi

## ⚠️ Sorun

Mac instance'lar için AWS **Dedicated Host** gerektirir. Önce host oluşturmalısınız.

## ✅ Çözüm: Dedicated Host Oluşturma

### Adım 1: Dedicated Hosts Sayfasına Gidin

1. AWS Console: https://console.aws.amazon.com/ec2/
2. Sol menüden **"Dedicated Hosts"** seçin
3. "Allocate Dedicated Host" butonuna tıklayın

### Adım 2: Host Ayarları

1. **Instance family:** `mac1` veya `mac2` seçin
   - `mac1.metal` - macOS Monterey
   - `mac2.metal` - macOS Ventura (önerilen)

2. **Instance type:** `mac2.metal` seçin

3. **Availability Zone:** Herhangi bir zone seçin
   - Örnek: `us-east-1a`

4. **Quantity:** `1`

5. **Instance auto-placement:** `on` (önerilen)

6. **Host recovery:** `off` (varsayılan)

### Adım 3: Allocate

1. "Allocate" butonuna tıklayın
2. **5-10 dakika bekleyin** (host oluşturuluyor)

### Adım 4: Instance Oluşturma

Host oluşturulduktan sonra:

1. EC2 → "Launch Instance"
2. macOS AMI seçin
3. Instance type: `mac2.metal`
4. **"Tenancy"** bölümünde:
   - **"Dedicated host"** seçin
   - Oluşturduğunuz host'u seçin
5. "Launch Instance" tıklayın

## 💰 Maliyet Notu

- **Dedicated Host:** ~$1-2/saat (host boş olsa bile ücretlendirilir)
- **Instance:** ~$1-2/saat (host üzerinde çalışırken)
- **Toplam:** ~$2-4/saat

**ÖNEMLİ:** İşiniz bitince hem instance'ı hem de host'u **durdurun/silin**!

## ⏱️ Minimum Süre

AWS Mac instance'lar için **24 saat minimum** kuralı var. Host'u 24 saatten önce silemezsiniz.

## 🎯 Alternatif: MacInCloud

AWS Mac instance karmaşık ve pahalı. Daha kolay alternatif:

**MacInCloud:**
- https://www.macincloud.com
- ~$30/ay (sabit fiyat)
- Daha kolay kurulum
- Remote Desktop ile direkt bağlanırsınız

---

**Şimdi ne yapmalısınız:**
1. "Cancel" butonuna tıklayın (mevcut instance oluşturmayı iptal edin)
2. Dedicated Host oluşturun (yukarıdaki adımlar)
3. Sonra instance oluşturun

Hangi yolu tercih edersiniz?
- A) AWS Dedicated Host oluşturup devam edelim
- B) MacInCloud'a geçelim (daha kolay)

