setTimeout(function () {
	console.log(new Date(), '刷牙');
	setTimeout(function () {
		console.log(new Date(), '吃早餐');
		setTimeout(function () {
			console.log(new Date(), '寫功課');
		}, 1000);
	}, 1000);
}, 1000);
