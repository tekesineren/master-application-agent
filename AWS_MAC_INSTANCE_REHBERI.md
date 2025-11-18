# 🖥️ AWS Mac Instance - Adım Adım Rehber

## Adım 1: EC2 Mac Instance Oluşturma

### 1.1. EC2 Console'a Gidin
1. AWS Console'da: https://console.aws.amazon.com/ec2/
2. Sol menüden **"Dedicated Hosts"** veya **"Instances"** seçin
3. "Launch Instance" butonuna tıklayın

### 1.2. Mac Instance Seçin
1. **"macOS"** veya **"Mac"** arayın
2. **macOS Monterey** veya **macOS Ventura** seçin
3. Instance type: **mac1.metal** (en küçük, en ucuz)
4. "Next" tıklayın

### 1.3. Key Pair Oluşturun
1. **"Create new key pair"** seçin
2. Name: `mac-instance-key`
3. Key pair type: **RSA**
4. Private key file format: **.pem**
5. "Create key pair" tıklayın
6. **ÖNEMLİ:** `.pem` dosyasını güvenli bir yere kaydedin!

### 1.4. Network Ayarları
1. VPC: Default VPC seçin
2. Subnet: Herhangi bir subnet
3. Auto-assign Public IP: **Enable**
4. Security Group: Yeni oluşturun veya mevcut kullanın
5. Security Group Rules:
   - **SSH (22):** Your IP
   - **RDP (3389):** Your IP (Windows'tan bağlanmak için)

### 1.5. Launch
1. "Launch Instance" tıklayın
2. 5-10 dakika bekleyin (instance başlatılıyor)

## Adım 2: Mac'e Bağlanma

### Yöntem 1: VNC (Önerilen - GUI)

1. **Public IP'yi Bulun:**
   - EC2 Console → Instances
   - Instance'ınızı seçin
   - "Public IPv4 address" kopyalayın

2. **VNC Client Kurun:**
   - Windows için: **RealVNC Viewer** (https://www.realvnc.com/download/viewer/)
   - Veya **TightVNC** (https://www.tightvnc.com/)

3. **SSH Tunnel Oluşturun:**
   - PuTTY veya Windows Terminal kullanın
   - SSH ile bağlanın (key pair ile)
   - VNC port'unu forward edin

4. **VNC ile Bağlanın:**
   - `localhost:5900` adresine bağlanın
   - Mac ekranı görünecek!

### Yöntem 2: AWS Systems Manager Session Manager

1. **SSM Agent Kurulu Olmalı** (genellikle otomatik)
2. EC2 Console → Instance → "Connect"
3. "Session Manager" sekmesi
4. "Connect" tıklayın
5. Terminal açılacak

## Adım 3: Mac'te İlk Kurulum

### 3.1. Xcode Kurun
```bash
# App Store'dan Xcode'u indirin (ücretsiz, ~12GB)
# Veya command line:
xcode-select --install
```

### 3.2. Node.js Kurun
```bash
# Homebrew ile:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
```

### 3.3. Projeyi Kopyalayın
```bash
# GitHub'dan clone edin:
git clone https://github.com/tekesineren/master-application-agent.git
cd master-application-agent/web-app
```

## Adım 4: Capacitor ile Native App

```bash
# Capacitor kurun
npm install @capacitor/core @capacitor/cli @capacitor/ios

# Capacitor'ı başlatın
npx cap init

# iOS platform ekleyin
npx cap add ios

# Build edin
npm run build

# Sync edin
npx cap sync

# Xcode'da açın
npx cap open ios
```

## Adım 5: Xcode'da Build

1. Xcode açılacak
2. Signing & Capabilities → Team seçin
3. Product → Archive
4. App Store Connect'e yükleyin

## ⚠️ Önemli Notlar

- **Maliyet:** ~$1-2/saat (kullanmadığınızda durdurun!)
- **Minimum Süre:** 24 saat (AWS kuralı)
- **Öneri:** Build işlemini bitirince hemen durdurun

## 💰 Maliyet Hesaplama

- Build süresi: ~2-3 saat
- Maliyet: ~$2-6 (bir seferlik)
- MacInCloud'dan daha ucuz (kısa süreli kullanım için)

---

**AWS Console'da instance oluşturdunuz mu? Hangi adımdasınız?**

