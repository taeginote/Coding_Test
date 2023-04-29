function solution(n, m) {
	/* 최대공약수
    ex)
        7 -> 1 7  
        
        8 -> 1 2 4 8
        n, m 
    */
	let arrN = []
	let arrM = []
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			arrN.push(i)
		}
	}
	for (let k = 1; k <= n; k++) {
		if (m % k === 0) {
			arrM.push(k)
		}
	}

	console.log(arrN, arrM)
	// 최소공배수
	/*
        7 -> 56
        8 -> 56
    */
}
console.log(solution(7, 8))
