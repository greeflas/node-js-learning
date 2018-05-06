//const http = require('http');
//const date = require('./modules/my-module.js'); // includes module to this file

//http.createServer((req, res) => {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end(`[${date.currentDate()}] This server works on Node.js!`);
//}).listen(7000);
require('./url');

console.log('Listening...');
