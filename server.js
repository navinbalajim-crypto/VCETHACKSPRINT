const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];

  // Direct redirection for decommissioned pages
  if (reqPath === '/register.html' || reqPath === '/register') {
    res.writeHead(302, { 'Location': 'https://forms.gle/RZVStZXULViDNjPQA' });
    res.end();
    return;
  }
  if (reqPath === '/tracks.html' || reqPath === '/tracks') {
    res.writeHead(302, { 'Location': '/index.html#theme-showcase' });
    res.end();
    return;
  }
  if (reqPath === '/gallery.html' || reqPath === '/gallery') {
    res.writeHead(302, { 'Location': '/index.html' });
    res.end();
    return;
  }

  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  const filePath = path.join(__dirname, reqPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File Not Found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`HackSprint Server running at http://localhost:${PORT}/`);
});
