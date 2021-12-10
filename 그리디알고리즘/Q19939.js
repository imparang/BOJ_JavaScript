const fs = require('fs') // /dev/stdin
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

let n = Number(input[0])
let k = Number(input[1])

let sum = 0
for (let i = 1; i < k + 1; i++) {
  sum += i
}

if (sum > n) {
  console.log(-1)
} else {
  n -= sum
  if (n % k === 0) console.log(k - 1)
  else console.log(k)
}
