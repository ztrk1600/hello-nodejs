const mysql = require('mysql2');
const Bluebird = require('bluebird');
require('dotenv').config();

if (require.main === module) {
	(async function test() {
		let dbConn = mysql.createConnection({
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
			// database: process.env.DB_NAME,
		});
		Bluebird.promisifyAll(dbConn);

		try {
			await dbConn.connectAsync();

			let results = await dbConn.queryAsync('SELECT 42 as ans');
			console.log(results[0].ans);
		} finally {
			await dbConn.end();
		}
	})();
}
