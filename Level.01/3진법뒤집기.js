function solution(num) {
	// 3진법으로 만들기
	num.toString(3)
	let result = num.toString(3).split('').reverse().join('')
	let realResult = parseInt(result, 3)
	return realResult
}
console.log(solution(45))
