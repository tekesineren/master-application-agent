# 🔄 Backend'i Sürekli Açık Tutma Rehberi

## Sorun
Render.com ücretsiz planında backend 15 dakika aktivite olmazsa uyku moduna giriyor.

## ✅ Çözüm Seçenekleri

### Seçenek 1: Uptime Monitoring (Önerilen - Ücretsiz)

**UptimeRobot** kullanın (ücretsiz):
1. https://uptimerobot.com → Kayıt ol (ücretsiz)
2. "Add New Monitor" tıkla
3. Ayarlar:
   - **Monitor Type:** HTTP(s)
   - **Friendly Name:** Master App Backend
   - **URL:** `https://master-application-agent.onrender.com/api/health`
   - **Monitoring Interval:** 5 minutes
4. "Create Monitor" tıkla
5. ✅ Backend her 5 dakikada bir ping'lenecek, uyumayacak!

**Alternatif servisler:**
- https://cron-job.org (ücretsiz)
- https://www.pingdom.com (ücretsiz plan)
- https://statuscake.com (ücretsiz plan)

---

### Seçenek 2: Render.com "Always On" (Ücretli)

1. Render.com dashboard → Backend servisi
2. "Settings" → "Plan"
3. "Always On" seçeneğini aktif et
4. **Maliyet:** ~$7/ay

---

### Seçenek 3: Local Keep-Alive Script (Ücretsiz)

Kendi bilgisayarınızda script çalıştırın:

```bash
cd c:\Users\user\master-application-agent\backend
pip install requests
python keep_alive.py
```

**Not:** Bilgisayarınız açık olduğu sürece çalışır.

---

### Seçenek 4: Railway.app (Alternatif Hosting - Ücretsiz)

Railway.app'te backend deploy edin:
1. https://railway.app → Kayıt ol
2. GitHub repo'yu bağla
3. Backend'i deploy et
4. **Avantaj:** Uyku modu yok (kullanım limiti var ama genelde yeterli)

---

### Seçenek 5: Fly.io (Alternatif Hosting - Ücretsiz)

Fly.io'da backend deploy edin:
1. https://fly.io → Kayıt ol
2. CLI kur: `powershell -Command "iwr https://fly.io/install.ps1 -useb | iex"`
3. Backend'i deploy et
4. **Avantaj:** Uyku modu yok

---

## 🎯 Öneri

**En kolay ve ücretsiz:** UptimeRobot kullanın (5 dakika kurulum)

1. https://uptimerobot.com
2. Kayıt ol
3. Monitor ekle
4. URL: `https://master-application-agent.onrender.com/api/health`
5. Interval: 5 dakika
6. ✅ Bitti!

---

## 📋 Hızlı Kurulum (UptimeRobot)

1. **Kayıt:** https://uptimerobot.com/signup
2. **Monitor Ekle:**
   - Type: HTTP(s)
   - URL: `https://master-application-agent.onrender.com/api/health`
   - Interval: 5 minutes
3. **Kaydet**
4. ✅ Backend artık uyumayacak!

---

**Hangi yöntemi tercih edersiniz?** UptimeRobot en kolay ve ücretsiz!

