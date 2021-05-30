const fs = require('fs');

function readFilePromise(path, options = {}) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, options, (err, data) => {
			if (err) reject(err);
			resolve(data);
		});
	});
}

if (require.main === module) {
	(async function test() {
		// print out the script itself
		let data = await readFilePromise(__filename, { encoding: 'utf8' });
		console.log(data);
	})();
}
