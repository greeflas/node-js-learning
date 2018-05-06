const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    const q = url.parse(req.url, true);

    // get path and remove / at the start of path string
    switch (q.pathname.slice(1)) {
        case 'say-hi':
            let username = q.query.username || 'Guest';
            // first letter in the username to upper case
            username = username.charAt(0).toUpperCase() + username.slice(1);

            res.write(`Hello, ${username}!`);
            break;
        default:
            res.write('Welcome!');
    }

    res.end();
}).listen(7000);
