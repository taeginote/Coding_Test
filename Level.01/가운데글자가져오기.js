// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
	let a = s.length
	let b
	if (a % 2 === 1) return s[Math.floor(a / 2)]
	if (a % 2 === 0) return s[Math.floor(a / 2) - 1] + s[Math.floor(a / 2)]
}
