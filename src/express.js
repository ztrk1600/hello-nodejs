const path = require('path');
const express = require('express');

const hostname = 'localhost';
const port = 8080;

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', express.static('public'));
app.use((req, res, next) => {
	console.info(`new request:`, req.method, req.url);
	next();
});

app.get('/', function (req, res) {
	res.render('index', { title: 'Home' });
});
app.get('/hi', function (req, res) {
	let name = req.query.name || 'guest';
	res.type('text/plain').send(`Hello ${name}!`);
});

app.use(function(req, res, next) {
	res.status(404).sendFile(path.resolve(__dirname, '404.html'));
});

app.listen(port, hostname, () => {
	console.info(`[INFO] Server started at ${hostname}:${port}`);
});
