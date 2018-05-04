const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
	'Content-Type': 'text/html',
	'Authorization': 'qwerty'
    });

    switch(req.url) {
         case '/say-hi':
 	    res.write('Hi, Guest!');
	    break;
	default:
	    res.write('Hello, World!');
    }

    res.end();
}).listen(7000);
