const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
};

http.createServer((request, response) => {
  const requestedPath = decodeURIComponent((request.url || '/').split('?')[0]);
  const fileName = requestedPath === '/' ? 'index.html' : path.basename(requestedPath);
  const filePath = path.join(root, fileName);

  if (!contentTypes[path.extname(filePath)]) {
    response.writeHead(404).end('Not found');
    return;
  }

  fs.readFile(filePath, (error, contents) => {
    if (error) {
      response.writeHead(404).end('Not found');
      return;
    }
    response.writeHead(200, { 'Content-Type': contentTypes[path.extname(filePath)] });
    response.end(contents);
  });
}).listen(4173, '127.0.0.1', () => {
  console.log('PJOK SMART tersedia di http://127.0.0.1:4173');
});
