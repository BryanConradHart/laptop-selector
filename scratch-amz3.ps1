param([string]$K, [int]$N = 12)
$ProgressPreference = 'SilentlyContinue'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
$q = [uri]::EscapeDataString($K)
$r = Invoke-WebRequest -Uri "https://www.amazon.ca/s?k=$q" -UserAgent $ua -Headers @{'Accept-Language'='en-CA,en;q=0.9'} -TimeoutSec 30 -UseBasicParsing
$c = $r.Content
$m = [regex]::Matches($c, 'data-asin="([A-Z0-9]{10})"')
$positions = @()
foreach ($x in $m) { $positions += , @($x.Groups[1].Value, $x.Index) }
$seen = @{}
$count = 0
for ($i = 0; $i -lt $positions.Count; $i++) {
    $asin = $positions[$i][0]
    $start = $positions[$i][1]
    $end = if ($i + 1 -lt $positions.Count) { $positions[$i + 1][1] } else { [Math]::Min($c.Length, $start + 15000) }
    $blk = $c.Substring($start, [Math]::Min($end - $start, 15000))
    if ($seen.ContainsKey($asin)) { continue }
    $tm = [regex]::Match($blk, '<span class="a-size-base-plus[^"]*"[^>]*>([\s\S]*?)</span>')
    if (-not $tm.Success) { $tm = [regex]::Match($blk, '<h2[^>]*>[\s\S]*?<span[^>]*>([\s\S]*?)</span>') }
    if (-not $tm.Success) { $tm = [regex]::Match($blk, 'aria-label="([^"]{25,})"') }
    $title = ($tm.Groups[1].Value -replace '<[^>]+>', '' -replace '\s+', ' ' -replace '&amp;', '&').Trim()
    if ($title.Length -lt 20) { continue }
    $pm = [regex]::Match($blk, 'class="a-offscreen">\$([0-9,]+(?:\.[0-9]{2})?)')
    $price = $pm.Groups[1].Value
    $seen[$asin] = $true
    "$price | https://www.amazon.ca/dp/$asin | $($title.Substring(0, [Math]::Min(160, $title.Length)))"
    $count++
    if ($count -ge $N) { break }
}
if ($count -eq 0) { "NO MATCHES len=$($c.Length)" }
