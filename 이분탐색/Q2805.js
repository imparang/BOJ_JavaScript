const fs = require('fs') // /dev/stdin
let [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(a.split(' ')[0])
let m = Number(a.split(' ')[1])
const arr = b.split(' ').map(Number)

let start = 0
let end = arr.reduce((a, b) => Math.max(a, b))
let result = 0
while (start <= end) {
  let mid = parseInt((start + end) / 2)
  let total = 0
  for (const a of arr) {
    total += a - mid >= 0 ? a - mid : 0
  }
  if (total < m) end = mid - 1
  else {
    result = mid
    start = mid + 1
  }
}
console.log(result)
