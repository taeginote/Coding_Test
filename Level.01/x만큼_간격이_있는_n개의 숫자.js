function solution(x, n) {
	let a = []
	let b = 0
	for (let i = 0; i < n; i++) {
		a.push((b += x))
	}
	return a
}
