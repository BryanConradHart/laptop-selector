param([string]$Url, [string]$Pattern)
$ProgressPreference = 'SilentlyContinue'
[Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor 12288 -bor [Net.SecurityProtocolType]::Tls12
[Net.ServicePointManager]::ServerCertificateValidationCallback = { $true }
$ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
try {
    $r = Invoke-WebRequest -Uri $Url -UserAgent $ua -TimeoutSec 30 -UseBasicParsing -Headers @{'Accept-Language'='en-CA,en;q=0.9'}
    $c = $r.Content
    "STATUS=$($r.StatusCode) LEN=$($c.Length)"
    $t = [regex]::Match($c, '<title[^>]*>([\s\S]*?)</title>', 'IgnoreCase')
    "TITLE=" + ($t.Groups[1].Value -replace '\s+', ' ').Trim()
    if ($Pattern) {
        $pm = [regex]::Matches($c, $Pattern)
        $i = 0
        foreach ($m in $pm) { ($m.Value -replace '\s+', ' ').Trim(); $i++; if ($i -ge 15) { break } }
    }
} catch { "ERR $($_.Exception.Message)" }
