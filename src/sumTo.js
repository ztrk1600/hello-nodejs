function sumTo(n) {
	return n * (n + 1) / 2;
}

if (require.main === module) {
	(function test() {
		for (let n of [1, 2, 10, 100000]) {
			console.log(sumTo(n));
		}
	})();
}
