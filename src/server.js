require('dotenv').config({ path: './data/.env' });

const http = require('http');
const url = require('url');
const db = require('./database'); // Your database setup

const PORT = process.env.JSON_PORT || 3000;

const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method.toUpperCase();

  // Set CORS headers (if needed)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Routing logic
  if (path === '/api/admins' && method === 'GET') {
    // Retrieve admins from the database
    const stmt = db.prepare('SELECT id, name, credit FROM admins');
    const admins = stmt.all();

    // Respond with JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(admins));
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});