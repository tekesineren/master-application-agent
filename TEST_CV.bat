@echo off
echo ========================================
echo CV Parsing Test Script
echo ========================================
echo.

cd /d "%~dp0"

echo [1/3] Backend başlatılıyor...
cd backend
start "Backend Server" cmd /k "python app.py"
timeout /t 3 /nobreak >nul

echo.
echo [2/3] Frontend başlatılıyor...
cd ..\web-app
start "Frontend Dev Server" cmd /k "npm run dev"

echo.
echo [3/3] Tarayıcı açılıyor...
timeout /t 5 /nobreak >nul
start http://localhost:5173

echo.
echo ========================================
echo Test için:
echo 1. Tarayıcıda http://localhost:5173 açıldı
echo 2. CV yükleyin ve console'u kontrol edin (F12)
echo 3. Backend console'unda logları görün
echo ========================================
echo.
echo Backend'i durdurmak için Backend Server penceresini kapatın
echo Frontend'i durdurmak için Frontend Dev Server penceresini kapatın
echo.
pause

