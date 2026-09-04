const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const port = Number(process.env.PORT) || 3000;
const root = __dirname;
const dataDir = path.join(root, 'data');
const ordersFile = path.join(dataDir, 'orders.json');

// Cria a pasta data se não existir
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Cria o arquivo orders.json se não existir
if (!fs.existsSync(ordersFile)) {
  fs.writeFileSync(ordersFile, '[]');
}

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp'
};

function sendJson(response, status, payload) {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  response.end(JSON.stringify(payload));
}

function readOrders() {
  try {
    return JSON.parse(fs.readFileSync(ordersFile, 'utf8'));
  } catch {
    return [];
  }
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';
    request.on('data', chunk => {
      body += chunk;
      if (body.length > 1_000_000) request.destroy();
    });
    request.on('end', () => {
      try { resolve(body ? JSON.parse(body) : {}); }
      catch { reject(new Error('JSON invalido')); }
    });
    request.on('error', reject);
  });
}

function serveStatic(request, response, pathname) {
  const requested = pathname === '/' ? '/index.html' : pathname;
  const filePath = path.resolve(root, `.${requested}`);
  if (!filePath.startsWith(root) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Arquivo nao encontrado');
    return;
  }
  response.writeHead(200, { 'Content-Type': mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(response);
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);
  const { pathname } = url;

  // CORS
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');

  if (request.method === 'OPTIONS') {
    response.writeHead(204);
    response.end();
    return;
  }

  if (request.method === 'GET' && pathname === '/api/health') {
    sendJson(response, 200, { ok: true, service: 'ZipZap API' });
    return;
  }

  if (request.method === 'GET' && pathname === '/api/orders') {
    const email = url.searchParams.get('email');
    const orders = readOrders();
    if (email) {
      const filtered = orders.filter(o => o.customer.email === email);
      sendJson(response, 200, filtered);
    } else {
      sendJson(response, 200, orders);
    }
    return;
  }

  if (request.method === 'POST' && pathname === '/api/orders') {
    try {
      const body = await readBody(request);
      if (!Array.isArray(body.items) || body.items.length === 0) {
        sendJson(response, 400, { error: 'O pedido precisa ter pelo menos um item.' });
        return;
      }
      const order = {
        id: `ZZ-${Date.now()}`,
        status: 'recebido',
        customer: body.customer || {},
        items: body.items,
        total: Number(body.total) || 0,
        createdAt: new Date().toISOString()
      };
      const orders = readOrders();
      orders.push(order);
      fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2));
      sendJson(response, 201, order);
    } catch (error) {
      sendJson(response, 400, { error: error.message });
    }
    return;
  }

  serveStatic(request, response, pathname);
});

server.listen(port, () => console.log(`ZipZap rodando em http://localhost:${port}`));