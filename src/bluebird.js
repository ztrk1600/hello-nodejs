const fs = require('fs');
const Bluebird = require('bluebird');

let readFile = Bluebird.promisify(fs.readFile);

if (require.main === module) {
	(async function test() {
		// print out the script itself
		let data = await readFile(__filename, { encoding: 'utf8' });
		console.log(data);
	})();
}
