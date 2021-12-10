const fs = require('fs') // /dev/stdin
let [a, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let k = Number(a.split(' ')[0])
let n = Number(a.split(' ')[1])
arr = arr.map(Number)

let start = 0
let end = arr.reduce((a, b) => Math.max(a, b))
let result = 0
while (start <= end) {
  let mid = parseInt((start + end) / 2)
  let total = 0
  for (const a of arr) {
    total += parseInt(a / mid)
  }
  if (total < n) end = mid - 1
  else {
    result = mid
    start = mid + 1
  }
}
console.log(result)
