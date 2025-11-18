# 🚀 Windows'ta Otomatik Başlatma Rehberi

## Yöntem 1: Task Scheduler (Önerilen - Gizli Çalışır)

### Adım 1: Task Scheduler'ı Aç
1. Windows tuşu + R
2. `taskschd.msc` yaz → Enter

### Adım 2: Yeni Task Oluştur
1. Sağ tarafta "Create Basic Task" tıkla
2. **Name:** `Backend Keep-Alive`
3. **Description:** `Master App Backend'i uyanık tutar`
4. **Next**

### Adım 3: Trigger (Tetikleyici)
1. **When do you want the task to start?** → `When I log on`
2. **Next**

### Adım 4: Action (Eylem)
1. **What action do you want the task to perform?** → `Start a program`
2. **Next**
3. **Program/script:** 
   ```
   C:\Users\user\master-application-agent\backend\keep_alive.bat
   ```
4. **Start in (optional):**
   ```
   C:\Users\user\master-application-agent\backend
   ```
5. **Next**

### Adım 5: Finish
1. **Finish** tıkla
2. ✅ Bitti! PC açıldığında otomatik başlayacak

### Gizli Çalıştırma (Opsiyonel)
1. Task Scheduler'da task'ı bul
2. Sağ tık → **Properties**
3. **General** sekmesi:
   - ✅ "Run whether user is logged on or not" işaretle
   - ✅ "Run with highest privileges" işaretle
4. **Settings** sekmesi:
   - ✅ "Hidden" işaretle
5. **OK**

---

## Yöntem 2: Startup Klasörü (Daha Kolay)

### Adım 1: Startup Klasörünü Aç
1. Windows tuşu + R
2. `shell:startup` yaz → Enter
3. Startup klasörü açılacak

### Adım 2: Kısayol Oluştur
1. `C:\Users\user\master-application-agent\backend\keep_alive.bat` dosyasını bul
2. Sağ tık → **Create shortcut**
3. Kısayolu **Startup klasörüne** sürükle
4. ✅ Bitti!

**Not:** Bu yöntemde pencere görünür. Gizli çalıştırmak için Task Scheduler kullanın.

---

## Yöntem 3: Manuel Başlatma (Test İçin)

### Test Etmek İçin:
1. `keep_alive.bat` dosyasına çift tıkla
2. Pencere açılacak, backend ping'lenmeye başlayacak
3. Pencereyi kapatmayın!

### Durdurmak İçin:
- Pencereyi kapat veya Ctrl+C

---

## ✅ Kontrol

### Keep-Alive Çalışıyor mu?
1. Task Manager aç (Ctrl+Shift+Esc)
2. **Details** sekmesi
3. `python.exe` veya `pythonw.exe` process'ini ara
4. `keep_alive.py` çalışıyorsa ✅

### Backend Uyanık mı?
1. Tarayıcıda aç: https://master-application-agent.onrender.com/api/health
2. `{"status":"ok"}` görüyorsan ✅

---

## 🔧 Sorun Giderme

### Python bulunamıyor hatası:
```powershell
# Python path'ini kontrol et
where python
```

### Script çalışmıyor:
1. `keep_alive.bat` dosyasına sağ tık
2. "Run as administrator" seç

### Otomatik başlamıyor:
1. Task Scheduler'da task'ı kontrol et
2. "Last Run Result" → 0x0 olmalı
3. Değilse task'ı sağ tık → **Run**

---

## 📋 Hızlı Kurulum (Task Scheduler)

1. **Windows + R** → `taskschd.msc`
2. **Create Basic Task**
3. Name: `Backend Keep-Alive`
4. Trigger: `When I log on`
5. Action: `Start a program`
6. Program: `C:\Users\user\master-application-agent\backend\keep_alive.bat`
7. **Finish**

✅ PC her açıldığında otomatik başlayacak!

