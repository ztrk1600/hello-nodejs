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
	(function test() {
		// print out the script itself
		readFilePromise(__filename, { encoding: 'utf8' })
			.then(data => {
				console.log(data);
			})
	})();
}
