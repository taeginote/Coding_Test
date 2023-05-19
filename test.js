function solution(d, budget) {
	let total = budget
	let result = 0

	for (let i = 0; i < d.length; i++) {
		if (total >= d[i]) {
			total -= d[i]
			result += 1
		}
	}
	return result
}
console.log(solution([2, 2, 3, 3], 10))
