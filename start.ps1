
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "------------------------------------------------" -ForegroundColor Cyan
Write-Host "    STACK STARTUP SEQUENCE" -ForegroundColor Cyan
Write-Host "------------------------------------------------" -ForegroundColor Cyan

Write-Host "1. Podnoszenie kontenerow Docker..." -ForegroundColor Yellow
docker-compose up -d

if ($LASTEXITCODE -ne 0) {
    Write-Host "BLAD: Docker nie wystartowal. Czy Docker Desktop jest wlaczony?" -ForegroundColor Red
    Read-Host "Nacisnij Enter, aby zamknac..."
    exit
}

Write-Host "2. Oczekiwanie na inicjalizacje PostgreSQL..." -ForegroundColor Yellow
for ($i = 10; $i -gt 0; $i--) {
    Write-Host -NoNewline "`r   Pozostalo: $i s  "
    Start-Sleep -Seconds 1
}
Write-Host "`n   Baza danych gotowa." -ForegroundColor Green

Write-Host "3. Uruchamianie serwera deweloperskiego..." -ForegroundColor Green
Write-Host "------------------------------------------------" -ForegroundColor Cyan
pnpm dev