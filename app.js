const http = require('http');
http.createServer((req, res) => {
  res.end('Merhaba! Docker calisiyor.');
}).listen(3000, '0.0.0.0');