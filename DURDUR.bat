@echo off
echo ========================================
echo Server'ları Durdurma
echo ========================================
echo.

echo Python process'leri durduruluyor...
taskkill /F /IM python.exe 2>nul

echo Node process'leri durduruluyor...
taskkill /F /IM node.exe 2>nul

echo.
echo Port kontrol ediliyor...
netstat -ano | findstr ":5000 :3000 :5173" | findstr "LISTENING"
if %errorlevel% == 0 (
    echo.
    echo ⚠️ Hala açık portlar var. Process ID'leri yukarıda görünüyor.
    echo Manuel olarak durdurmak için: taskkill /F /PID [process_id]
) else (
    echo ✅ Tüm portlar kapalı!
)

echo.
echo ========================================
pause

