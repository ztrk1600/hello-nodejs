const fs = require('fs/promises');

if (require.main === module) {
	(async function test() {
		// print out the script itself
		let data = await fs.readFile(__filename, { encoding: 'utf8' });
		console.log(data);
	})();
}
