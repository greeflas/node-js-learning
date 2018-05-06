const http = require('http');
const fs = require('fs');
const url = require('url');
const logger = require('./simple-logger');

logger.clearLog();

http.createServer((req, res) => {
    fs.readFile('./pages/fs.html', (err, data) => {
        if (err === null) {
            logger.log('Home page reached.');

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);

            return res.end();
        }

        const page = url.parse(req.url, true).pathname.slice(1);

        logger.log(`Page "${page}" not found`);

        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('404 Not Found!');

        return res.end();
    });
}).listen(7000);
