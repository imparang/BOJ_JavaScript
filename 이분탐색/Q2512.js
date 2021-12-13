const fs = require('fs') // /dev/stdin
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let arrN = input[1].split(' ').map(Number)
let cost = Number(input[2])

let start = 0
let end = arrN.reduce((a, b) => Math.max(a, b))

let result = 0
while (start <= end) {
  let mid = parseInt((end + start) / 2)
  let total = 0
  for (const a of arrN) {
    if (a < mid) total += a
    else total += mid
  }
  if (total > cost) end = mid - 1
  else {
    result = mid
    start = mid + 1
  }
}
console.log(result)
