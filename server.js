const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This server works on Node.js!');
}).listen(7000);

console.log('Listening...');
