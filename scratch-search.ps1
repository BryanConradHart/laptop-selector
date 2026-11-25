param([string]$q, [int]$n = 12)
$ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
$enc = [uri]::EscapeDataString($q)
foreach ($inst in @('https://search.hbubli.cc', 'https://search.inetol.net', 'https://priv.au', 'https://searx.be')) {
    try {
        $tmpf = "srch_tmp.json"
        curl.exe -s -A $ua --max-time 20 "$inst/search?q=$enc&format=json" -o $tmpf | Out-Null
        if (-not (Test-Path $tmpf) -or (Get-Item $tmpf).Length -lt 10) { continue }
        $raw = Get-Content $tmpf -Raw
        if ($raw -notmatch '^\s*[{[]') { continue }
        $j = $raw | ConvertFrom-Json
        if ($j.web_results) {
            $i = 0
            foreach ($w in $j.web_results) {
                $t = $w.title -replace '\s+', ' '
                $c = $w.content -replace '\s+', ' '
                if ($c.Length -gt 200) { $c = $c.Substring(0, 200) }
                "$($w.url)`n  T: $t`n  C: $c"
                $i++; if ($i -ge $n) { break }
            }
            return
        }
    } catch { }
}
"No results"
