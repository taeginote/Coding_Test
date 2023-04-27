// 점의 위치 구하기
// 문제 설명
// 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.

function solution(dot) {
	let a = dot[0]
	let b = dot[1]
	if (a > 0 && b > 0) return 1
	if (a < 0 && b > 0) return 2
	if (a < 0 && b < 0) return 3
	if (a > 0 && b < 0) return 4
}
