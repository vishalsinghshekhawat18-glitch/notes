Add-Type -AssemblyName System.Drawing

$img1Path = "C:\Users\visha\.gemini\antigravity\brain\2ecd5b86-8510-4fa8-ad84-e0f49aba73c0\.user_uploaded\media_1791090706402.jpg"
$bmp1 = [System.Drawing.Bitmap]::FromFile($img1Path)

# Medallion in Image 1:
# The circle with horizontal wings:
# The center circle is around x=278 to 445 (width ~168), y=98 to 260 (height ~162).
# Including the side triple lines, x is from 90 to 633!
$cropMedallionRect = New-Object System.Drawing.Rectangle(75, 96, 572, 168)
$cropMed = $bmp1.Clone($cropMedallionRect, $bmp1.PixelFormat)
$cropMed.Save("007\PRINT DESIGNER\assets\cover_medallion_full.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cropMed.Dispose()
$bmp1.Dispose()
Write-Host "Medallion cropped successfully."
