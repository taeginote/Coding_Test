function solution(s) {
	let a = 0
	let b = 0
	for (let i = 0; i < s.length; i++) {
		if ('p' === s[i] || 'P' === s[i]) {
			a++
		} else if ('y' === s[i] || 'Y' === s[i]) {
			b++
		}
	}
	if (a === b) return true
	if (a !== b) return false
}
