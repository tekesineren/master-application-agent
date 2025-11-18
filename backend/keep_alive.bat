@echo off
title Backend Keep-Alive
echo ========================================
echo Backend Keep-Alive Baslatiyor...
echo ========================================
echo.
echo Backend URL: https://master-application-agent.onrender.com/api/health
echo Ping Araligi: 10 dakika
echo.
echo Bu pencereyi KAPATMAYIN!
echo Kapatirsaniz backend uyku moduna girer.
echo.
echo ========================================
echo.

cd /d %~dp0
python keep_alive.py

pause

