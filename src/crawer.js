const axios = require('axios');

function getStockData(stockId, date) {
	return axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
		params: {
			response: 'json',
			stockNo: stockId,
			date: date.toISOString().substr(0, 10).replaceAll('-', ''),
		},
	});
}

if (require.main === module) {
	(function test() {
		getStockData('2610', new Date(2021, 5 - 1, 23))
			.then((response) => {
				console.log(response.data);
			});
	})();
}
