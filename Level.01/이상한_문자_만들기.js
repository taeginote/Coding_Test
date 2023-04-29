function solution(s) {
	/*
        
    */
	let arr = []
	let changeJoin = s.split(' ').join('-').split('')
	for (let i = 0; i < changeJoin.length; i++) {
		if (i % 2 === 1) {
			arr.push(changeJoin[i])
		}
		if (i % 2 === 0) {
			arr.push(changeJoin[i].toUpperCase())
		}
	}
	console.log(arr.join('').split('-').join(''))
}
console.log(solution('try hello world'))
