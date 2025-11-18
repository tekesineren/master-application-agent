# 🌐 Domain Ekleme Rehberi - Vercel

## Adım 1: Domain Satın Alın (İsteğe Bağlı)

### Seçenek 1: Namecheap (Önerilen - Ucuz)
1. https://namecheap.com adresine gidin
2. Domain arayın (örn: `masterapplicationagent.com`)
3. Sepete ekleyin ve satın alın (~$10-15/yıl)

### Seçenek 2: Google Domains
1. https://domains.google adresine gidin
2. Domain arayın ve satın alın

### Seçenek 3: GoDaddy
1. https://godaddy.com adresine gidin
2. Domain arayın ve satın alın

**Not:** Domain almak zorunlu değil! Vercel'in verdiği ücretsiz domain (`master-application-agent.vercel.app`) de çalışır.

## Adım 2: Vercel'e Domain Ekleyin

### 2.1. Vercel Dashboard'a Gidin
1. https://vercel.com → Projenize tıklayın
2. Üst menüden **"Settings"** sekmesine tıklayın

### 2.2. Domains Bölümüne Gidin
1. Sol menüden **"Domains"** seçin
2. "Add Domain" butonuna tıklayın

### 2.3. Domain'inizi Ekleyin
1. Domain'inizi yazın (örn: `masterapplicationagent.com`)
2. "Add" butonuna tıklayın

### 2.4. DNS Ayarlarını Yapın
Vercel size DNS kayıtlarını gösterecek:

**Namecheap için:**
1. Namecheap'a gidin → Domain List → Manage
2. "Advanced DNS" sekmesine gidin
3. Vercel'in gösterdiği kayıtları ekleyin:
   - Type: `A Record` veya `CNAME`
   - Host: `@` veya `www`
   - Value: Vercel'in verdiği IP veya domain

**Google Domains için:**
1. Google Domains → DNS sekmesi
2. Vercel'in gösterdiği kayıtları ekleyin

### 2.5. Bekleyin
- DNS yayılımı 24-48 saat sürebilir
- Genellikle 1-2 saat içinde çalışır

## Adım 3: SSL Sertifikası (Otomatik)

Vercel otomatik olarak SSL sertifikası ekler (Let's Encrypt). Hiçbir şey yapmanıza gerek yok!

## Özet

1. Domain satın alın (isteğe bağlı)
2. Vercel → Settings → Domains → Add Domain
3. DNS kayıtlarını domain sağlayıcınıza ekleyin
4. Bekleyin (1-48 saat)

---

**Not:** Domain olmadan da uygulamanız çalışır! `master-application-agent.vercel.app` URL'i ile erişilebilir.

