const fs = require('fs/promises');
const path = require('path');
const http = require('http');

const hostname = 'localhost';
const port = 8080;

let server = http.createServer(async (req, res) => {
	console.info(`new request:`, req.method, req.url);

	let requestUrl = new URL(req.url, `http://${req.headers.host}`);
	// console.log(requestUrl);

	switch (requestUrl.pathname.toLowerCase()) {
		case '/':
			res.writeHead(200, {
				'Content-Type': 'text/html; charset=utf-8',
			});
			res.write('<h1>Home</h1><p>Welcome home!</p>');
			res.end();
			break;
		case '/hi':
			res.writeHead(200, {
				'Content-Type': 'text/plain; charset=utf-8',
			});
			let name = requestUrl.searchParams.get('name') || 'guest';
			res.write(`Hello ${name}!`);
			res.end();
			break;
		default:
			res.writeHead(404, 'Not Found', {
				'Content-Type': 'text/html; charset=utf-8',
			});
			res.write(await fs.readFile(path.resolve(__dirname, '404.html')));
			res.end();
			break;
	}
});

server.listen(port, hostname, () => {
	console.info(`[INFO] Server started at ${hostname}:${port}`);
});
