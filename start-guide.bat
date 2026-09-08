@echo off
cd /d "%~dp0"
echo Starting MkDocs server for Software Testing ILT Guide...
.venv\Scripts\python.exe -m mkdocs serve --dev-addr 127.0.0.1:8000
pause
