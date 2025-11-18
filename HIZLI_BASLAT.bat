@echo off
echo ========================================
echo Master Application Agent - Hizli Baslat
echo ========================================
echo.

echo [1/2] Backend baslatiliyor...
start "Backend API" cmd /k "cd /d %~dp0backend && python app.py"
timeout /t 3 /nobreak >nul

echo [2/2] Web App baslatiliyor...
start "Web App" cmd /k "cd /d %~dp0web-app && npm run dev"
timeout /t 2 /nobreak >nul

echo.
echo ========================================
echo ✅ Her iki servis baslatildi!
echo.
echo Backend: http://localhost:5000
echo Web App: http://localhost:3000
echo.
echo Tarayicida http://localhost:3000 adresini acin
echo ========================================
pause

