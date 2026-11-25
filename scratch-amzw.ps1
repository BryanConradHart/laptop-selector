param([string]$K, [int]$N = 14)
$ProgressPreference = 'SilentlyContinue'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
$sess = New-Object Microsoft.PowerShell.Commands.WebRequestSession
try { Invoke-WebRequest -Uri 'https://www.amazon.ca/' -UserAgent $ua -UseBasicParsing -WebSession $sess -TimeoutSec 25 | Out-Null } catch {}
$q = [uri]::EscapeDataString($K)
$r = Invoke-WebRequest -Uri "https://www.amazon.ca/s?k=$q" -UserAgent $ua -Headers @{'Accept-Language'='en-CA,en;q=0.9'} -UseBasicParsing -WebSession $sess -TimeoutSec 30
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
    $tm = [regex]::Match($blk, '<h2[^>]*aria-label="([^"]{25,250})"')
    if (-not $tm.Success) { $tm = [regex]::Match($blk, '<h2[^>]*>\s*<span[^>]*>([\s\S]*?)</span>') }
    $title = ($tm.Groups[1].Value -replace '<[^>]+>', '' -replace '\s+', ' ' -replace '&quot;', '"' -replace '&amp;', '&').Trim()
    if ($title.Length -lt 22) { continue }
    $pm = [regex]::Match($blk, 'class="a-offscreen">\$([0-9,]+(?:\.[0-9]{2})?)')
    $price = $pm.Groups[1].Value
    $seen[$asin] = $true
    "$price | https://www.amazon.ca/dp/$asin | $($title.Substring(0, [Math]::Min(170, $title.Length)))"
    $count++
    if ($count -ge $N) { break }
}
if ($count -eq 0) { "NO MATCHES len=$($c.Length)" }
