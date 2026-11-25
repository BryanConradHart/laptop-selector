// Minimal static dev server for site/ (no dependencies).
const http = require("http"), fs = require("fs"), path = require("path");

const ROOT = path.resolve(__dirname, "..", "site");
const PORT = 8731;
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon" };

http.createServer((req, res) => {
  let urlPath;
  try {
    urlPath = decodeURIComponent(req.url.split("?")[0]);
  } catch {
    res.writeHead(400); res.end("bad request"); return;
  }
  if (urlPath.includes("\0")) { // fs APIs throw synchronously on null bytes
    res.writeHead(400); res.end("bad request"); return;
  }
  const file = path.resolve(ROOT, "." + path.posix.normalize(urlPath));
  if (file !== ROOT && !file.startsWith(ROOT + path.sep)) { // block traversal
    res.writeHead(403); res.end("forbidden"); return;
  }
  try {
    const target = fs.existsSync(file) && fs.statSync(file).isDirectory() ? path.join(file, "index.html") : file;
    fs.readFile(target, (err, data) => {
      if (err) { res.writeHead(404); res.end("not found"); return; }
      res.writeHead(200, { "content-type": MIME[path.extname(target)] || "application/octet-stream" });
      res.end(data);
    });
  } catch {
    res.writeHead(400); res.end("bad request");
  }
}).listen(PORT, () => console.log(`serving ${ROOT} at http://localhost:${PORT}`));
