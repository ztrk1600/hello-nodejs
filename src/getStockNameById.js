const axios = require('axios');

async function getStockNameById(stockId) {
	let response = await axios.get('https://www.twse.com.tw/zh/api/codeQuery', {
		params: {
			query: stockId,
		},
	});

	let result = response.data.suggestions
		.map(e => e.split('\t'))
		.find(([id, _name]) => id === stockId);

	return result?.[1];
}

if (require.main === module) {
	(async function test() {
		let stockId = '2330';
		let stockName = await getStockNameById(stockId);
		console.log(stockId, stockName);
	})();
}
