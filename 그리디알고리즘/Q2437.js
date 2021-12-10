const fs = require('fs') // /dev/stdin
let [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(a)
let arr = b.split(' ').map(Number)

arr.sort((a, b) => a - b)

let target = 1
for (const a of arr) {
  if (target < a) break
  target += a
}
console.log(target)
