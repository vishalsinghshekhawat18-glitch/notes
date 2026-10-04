Add-Type -AssemblyName System.Drawing

$assetsDir = "007\PRINT DESIGNER\assets"
if (-not (Test-Path $assetsDir)) {
    New-Item -ItemType Directory -Path $assetsDir -Force | Out-Null
}

# Image 1 (Cover)
$img1Path = "C:\Users\visha\.gemini\antigravity\brain\2ecd5b86-8510-4fa8-ad84-e0f49aba73c0\.user_uploaded\media_1791090706402.jpg"
$bmp1 = [System.Drawing.Bitmap]::FromFile($img1Path)
Write-Host "Img1 dimensions: $($bmp1.Width) x $($bmp1.Height)"

# In Image 1, the fortress engraving is at the bottom:
# Width is 723. The border margin is ~40px on left and right, so x ≈ 45, width ≈ 633.
# Vertically, it is roughly from y = 730 to y = 920.
# Let's crop from y = 740 to 920:
$crop1Rect = New-Object System.Drawing.Rectangle(42, 740, 640, 182)
$crop1 = $bmp1.Clone($crop1Rect, $bmp1.PixelFormat)
$crop1.Save("007\PRINT DESIGNER\assets\cover_fortress_engraving.png", [System.Drawing.Imaging.ImageFormat]::Png)
$crop1.Dispose()
$bmp1.Dispose()
Write-Host "Cover engraving cropped successfully."

# Image 2 (Verso)
$img2Path = "C:\Users\visha\.gemini\antigravity\brain\2ecd5b86-8510-4fa8-ad84-e0f49aba73c0\.user_uploaded\media_1791090713364.jpg"
$bmp2 = [System.Drawing.Bitmap]::FromFile($img2Path)
Write-Host "Img2 dimensions: $($bmp2.Width) x $($bmp2.Height)"

# In Image 2, the mountain ridge engraving is below "First Edition - 2026 Publication Archive" (around y = 230 to 390)
$crop2Rect = New-Object System.Drawing.Rectangle(42, 235, 640, 158)
$crop2 = $bmp2.Clone($crop2Rect, $bmp2.PixelFormat)
$crop2.Save("007\PRINT DESIGNER\assets\verso_ridge_engraving.png", [System.Drawing.Imaging.ImageFormat]::Png)
$crop2.Dispose()
$bmp2.Dispose()
Write-Host "Verso engraving cropped successfully."
