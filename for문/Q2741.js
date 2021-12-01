let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0])

let answer = []
// i는 1부터 n까지 증가
for(let i = 1; i < n + 1; i++) {
    answer.push(i)
}
console.log(answer.join('\n'))
