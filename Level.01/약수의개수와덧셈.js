// 약수의 개수와 덧셈
// 문제 설명
// 두 정수 left와 right가 매개변수로 주어집니다.
// left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

function solution(left, right) {
	let total = 0
	let count = 0
	for (let a = left; a <= right; a++) {
		for (let b = 1; b <= a; b++) {
			if (a % b === 0) {
				count++
			}
		}
		if (count % 2 === 0) {
			total += a
		} else {
			total -= a
		}
		count = 0
	}
	return total
}
