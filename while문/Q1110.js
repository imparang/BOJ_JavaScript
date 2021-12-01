let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0])
let i = 0
while (true) {
  let one = Number(n)%10
  let ten = parseInt(n/10)
  let sum = one + ten 
  n = one * 10 + sum%10
  i += 1
  if (n === Number(input[0])) break
}
console.log(i)
