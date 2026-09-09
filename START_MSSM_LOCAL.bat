@echo off
cd /d "%~dp0"
echo Starting MSSM website at http://localhost:8000/
start "MSSM Website Server" cmd /c "python -m http.server 8000"
timeout /t 2 /nobreak >nul
start "" http://localhost:8000/index.html
