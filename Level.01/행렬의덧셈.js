// 행렬의 덧셈
// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

function solution(arr1, arr2) {
	let k = []
	for (let a = 0; a < arr1.length; a++) {
		let n = []
		for (let b = 0; b < arr1[a].length; b++) {
			n.push(arr1[a][b] + arr2[a][b])
		}
		k.push(n)
	}
	return k
}
