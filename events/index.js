const http = require('http');
const events = require('events');
const logger = require('./../fs/simple-logger');

logger.clearLog();

let responsesCounter = 0;

const eventEmmiter = new events.EventEmitter();
eventEmmiter.on('onResponseEnd', () => logger.log(`Response ${++responsesCounter} was ended.`));

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Node.js server!');
    eventEmmiter.emit('onResponseEnd');
}).listen(7000);
