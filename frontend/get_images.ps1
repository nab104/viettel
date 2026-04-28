$baseDir = "z:\Viettel Web\Viettel\frontend\public\images\hethongsieuthi"
$provinces = Get-ChildItem -Path $baseDir -Directory

foreach ($prov in $provinces) {
    Write-Host "Province: $($prov.Name)"
    $stores = Get-ChildItem -Path $prov.FullName -Directory
    foreach ($store in $stores) {
        $groupFolder = Get-ChildItem -Path $store.FullName -Directory -Filter "*Tập thể*"
        if ($groupFolder) {
            $images = Get-ChildItem -Path $groupFolder.FullName -File -Filter "*.jpg"
            if ($images) {
                Write-Host "  Store: $($store.Name) -> $($images[0].Name)"
            }
        }
        $tstFolder = Get-ChildItem -Path $store.FullName -Directory -Filter "TST"
        if ($tstFolder) {
            $images = Get-ChildItem -Path $tstFolder.FullName -File -Filter "*.jpg"
            if ($images) {
                Write-Host "  Store: $($store.Name) -> $($images[0].Name) (TST)"
            }
        }
    }
}
