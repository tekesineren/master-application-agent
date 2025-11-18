@echo off
REM Bu dosya Windows başlangıcında çalışacak
REM Gizli pencere olarak çalıştır (arka planda)

cd /d %~dp0
start /min "" pythonw.exe keep_alive.py

