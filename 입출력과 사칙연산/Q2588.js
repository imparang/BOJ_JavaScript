let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

a = input[0] // 472
b = input[1] // 385

console.log(a * b[2]) // 472 * 5
console.log(a * b[1]) // 472 * 8
console.log(a * b[0]) // 472 * 3
console.log(a * b) // 472 * 385
