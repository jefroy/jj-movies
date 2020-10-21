@echo off
title "-=- jj ONLINE -=-"
REM startup
start microsoft-edge:https://localhost:3000
start "VSCODE" cmd /c "code . & exit /b"
start "WEBSTORM" cmd /c "webstorm.bat . & exit /b"
start "NPM RUN START" cmd /c "npm run start & exit /b"
start ONENOTE.exe
echo "Ready 2 close up shop"
pause
REM closeup
TASKKILL /IM msedge.exe
TASKKILL /IM ONENOTE.exe
TASKKILL /IM Code.exe
TASKKILL /IM webstorm64.exe
TASKKILL /IM cmd.exe
exit /b