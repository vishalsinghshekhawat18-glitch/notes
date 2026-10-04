Add-Type -AssemblyName System.Drawing

$assetsDir = "007\PRINT DESIGNER\assets"
if (-not (Test-Path $assetsDir)) {
    New-Item -ItemType Directory -Path $assetsDir -Force | Out-Null
}

$uploadedDir = "C:\Users\visha\.gemini\antigravity\brain\2ecd5b86-8510-4fa8-ad84-e0f49aba73c0\.user_uploaded"

function Crop($srcImg, $rect, $destName) {
    $bmp = [System.Drawing.Bitmap]::FromFile((Join-Path $uploadedDir $srcImg))
    $cropped = $bmp.Clone($rect, $bmp.PixelFormat)
    $destPath = Join-Path $assetsDir $destName
    $cropped.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    $bmp.Dispose()
    Write-Host "Cropped $destName ($($rect.Width)x$($rect.Height))"
}

# Image 4 (Page 1)
$p1 = "media_1791091336246.jpg"
Crop $p1 (New-Object System.Drawing.Rectangle(430, 60, 250, 85)) "ch1_opener_fort.png"
Crop $p1 (New-Object System.Drawing.Rectangle(425, 325, 255, 175)) "ch1_scarcity_signpost.png"
Crop $p1 (New-Object System.Drawing.Rectangle(510, 555, 170, 160)) "ch1_car_analogy.png"
Crop $p1 (New-Object System.Drawing.Rectangle(42, 790, 95, 115)) "ch1_water_glass.png"
Crop $p1 (New-Object System.Drawing.Rectangle(390, 800, 105, 95)) "ch1_diamond.png"

# Image 3 (Page 2)
$p2 = "media_1791091336225.jpg"
Crop $p2 (New-Object System.Drawing.Rectangle(420, 120, 265, 235)) "ch1_ppf_graph.png"
Crop $p2 (New-Object System.Drawing.Rectangle(535, 840, 145, 90)) "ch1_market_economy.png"

# Image 2 (Page 3)
$p3 = "media_1791091336210.jpg"
Crop $p3 (New-Object System.Drawing.Rectangle(355, 110, 325, 165)) "ch1_socialist_building.png"
Crop $p3 (New-Object System.Drawing.Rectangle(365, 345, 315, 235)) "ch1_mixed_economy_scale.png"
Crop $p3 (New-Object System.Drawing.Rectangle(365, 645, 315, 175)) "ch1_command_economy_building.png"

# Image 1 (Page 4)
$p4 = "media_1791091336196.jpg"
Crop $p4 (New-Object System.Drawing.Rectangle(400, 140, 285, 235)) "ch1_three_sectors_continuum.png"
Crop $p4 (New-Object System.Drawing.Rectangle(380, 445, 305, 335)) "ch1_sectors_venn_diagram.png"

Write-Host "All Chapter 1 illustrations cropped successfully!"
