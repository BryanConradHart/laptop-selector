param([string]$Url)
$ProgressPreference = 'SilentlyContinue'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
$sess = New-Object Microsoft.PowerShell.Commands.WebRequestSession
try { Invoke-WebRequest -Uri 'https://www.amazon.ca/' -UserAgent $ua -UseBasicParsing -WebSession $sess -TimeoutSec 25 | Out-Null } catch {}
$r = Invoke-WebRequest -Uri $Url -UserAgent $ua -Headers @{'Accept-Language'='en-CA,en;q=0.9'} -UseBasicParsing -WebSession $sess -TimeoutSec 30
$c = $r.Content
"STATUS=$($r.StatusCode)"
$t = [regex]::Match($c, '<span id="productTitle"[^>]*>([\s\S]*?)</span>')
"TITLE=" + ($t.Groups[1].Value -replace '\s+', ' ').Trim()
$pr = [regex]::Match($c, '"priceAmount":([0-9.]+)')
if ($pr.Success) { "PRICE=$($pr.Groups[1].Value)" } else {
    $pr2 = [regex]::Match($c, 'class="a-offscreen">\$([0-9,]+\.[0-9]{2})')
    "PRICE=$($pr2.Groups[1].Value)"
}
$sold = [regex]::Matches($c, '>(Sold by)[^<]*</span>[\s\S]{0,300}?>([^<]{2,60})</a>')
foreach ($s in $sold) { "SOLD_BY=$($s.Groups[2].Value)" }
$sb2 = [regex]::Match($c, 'sellerProfileTriggerId[^>]*>([^<]+)<')
if ($sb2.Success) { "SELLER=$($sb2.Groups[1].Value.Trim())" }
$ship = [regex]::Match($c, 'shipsFromSoldByLabel[^>]*>([\s\S]{0,200}?)</td>')
if ($ship.Success) { "SHIPBLOCK=" + ($ship.Groups[1].Value -replace '<[^>]+>', ' ' -replace '\s+', ' ') }
$avail = $c -match 'id="availability"'
"AVAIL_BLOCK=$avail"
if ($avail) { $av = [regex]::Match($c, 'id="availability"[\s\S]{0,400}?<span[^>]*>\s*([^<]{3,80})'); "AVAIL=" + ($av.Groups[1].Value -replace '\s+', ' ').Trim() }
