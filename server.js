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

  if (req.method === 'POST' && reqPath === '/api/save-logo') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { data } = JSON.parse(body);
        const b64 = data.replace(/^data:image\/\w+;base64,/, '');
        const buffer = Buffer.from(b64, 'base64');
        fs.writeFileSync(path.join(__dirname, 'assets', 'ieee_vcet_logo.png'), buffer);
        fs.writeFileSync(path.join(__dirname, 'assets', 'ieee_logo.jpeg'), buffer);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
        console.log('IEEE VCET Logo successfully generated and written to disk!');
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  if (req.method === 'POST' && (reqPath === '/api/contact' || reqPath === '/api/subscribe')) {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const logFile = path.join(__dirname, 'submissions.json');
        let records = [];
        if (fs.existsSync(logFile)) {
          try { records = JSON.parse(fs.readFileSync(logFile, 'utf8')); } catch (e) { records = []; }
        }
        records.push({ type: reqPath.replace('/api/', ''), receivedAt: new Date().toISOString(), ...payload });
        fs.writeFileSync(logFile, JSON.stringify(records, null, 2), 'utf8');
        console.log(`[HackSprint Submission Logged: ${reqPath}]`, payload);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // Direct redirection for decommissioned pages
  if (reqPath === '/register.html' || reqPath === '/register') {
    res.writeHead(302, { 'Location': 'https://forms.gle/fFcbTWZkEgeTHq1X8' });
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
    res.writeHead(200, { 
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`HackSprint Server running at http://localhost:${PORT}/`);
});
