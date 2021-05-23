function fibonacci(n) {
	let curr = 0, next = 1;

	for (let i = 0; i < n; i++)
		[curr, next] = [next, curr + next];

	return curr;
}

if (require.main === module) {
	(function test() {
		for (let n = 0; n <= 15; n++) {
			console.log(`fibonacci(${n}) =`, fibonacci(n));
		}
	})();
}
