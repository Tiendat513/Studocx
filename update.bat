@echo off
chcp 65001 >nul
title Studocx - Trình Tự Động Cập Nhật
cls
echo =======================================================
echo            STUDOCX - TỰ ĐỘNG CẬP NHẬT 1-CLICK
echo =======================================================
echo.
echo [*] Đang kiểm tra và tải bản cập nhật mới nhất từ GitHub...
echo [*] Repository: https://github.com/Tiendat513/Studocx
echo.

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ProgressPreference = 'SilentlyContinue';" ^
  "$repoZip = 'https://github.com/Tiendat513/Studocx/archive/refs/heads/main.zip';" ^
  "$targetDir = '%~dp0';" ^
  "$tempZip = Join-Path $env:TEMP 'studocx_latest.zip';" ^
  "$tempExtracted = Join-Path $env:TEMP 'studocx_extracted_temp';" ^
  "try {" ^
  "    Write-Host '[*] Đang tải file zip từ GitHub...' -ForegroundColor Cyan;" ^
  "    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12;" ^
  "    Invoke-WebRequest -Uri $repoZip -OutFile $tempZip -UseBasicParsing;" ^
  "    if (Test-Path $tempExtracted) { Remove-Item $tempExtracted -Recurse -Force };" ^
  "    Write-Host '[*] Đang giải nén mã nguồn...' -ForegroundColor Cyan;" ^
  "    Expand-Archive -Path $tempZip -DestinationPath $tempExtracted -Force;" ^
  "    $srcFolder = Join-Path $tempExtracted 'Studocx-main';" ^
  "    if (-not (Test-Path $srcFolder)) {" ^
  "        $sub = Get-ChildItem -Path $tempExtracted -Directory | Select-Object -First 1;" ^
  "        if ($sub) { $srcFolder = $sub.FullName }" ^
  "    }" ^
  "    Write-Host '[*] Đang chép đè các file cập nhật...' -ForegroundColor Cyan;" ^
  "    Get-ChildItem -Path $srcFolder | ForEach-Object {" ^
  "        Copy-Item -Path $_.FullName -Destination $targetDir -Recurse -Force;" ^
  "    };" ^
  "    Remove-Item $tempZip -Force -ErrorAction SilentlyContinue;" ^
  "    Remove-Item $tempExtracted -Recurse -Force -ErrorAction SilentlyContinue;" ^
  "    Write-Host 'UPDATE_OK' -ForegroundColor Green;" ^
  "} catch {" ^
  "    Write-Host ('LỖI: ' + $_.Exception.Message) -ForegroundColor Red;" ^
  "    exit 1;" ^
  "}"

if %ERRORLEVEL% EQU 0 (
    echo.
    echo =======================================================
    echo  [✓] CẬP NHẬT HOÀN TẤT THÀNH CÔNG!
    echo =======================================================
    echo.
    echo [*] BƯỚC CUỐI CÙNG:
    echo     1. Mở trình duyệt Chrome và vào: chrome://extensions/
    echo     2. Tìm thẻ tiện ích 'Studocx'
    echo     3. Bấm vào nút 'Tải lại' (biểu tượng mũi tên xoay tròn 🔄)
    echo.
) else (
    echo.
    echo =======================================================
    echo  [X] CẬP NHẬT THẤT BẠI!
    echo =======================================================
    echo [*] Vui lòng kiểm tra lại kết nối mạng hoặc thử lại sau.
    echo.
)

pause
