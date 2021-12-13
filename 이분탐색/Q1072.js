const fs = require('fs') // /dev/stdin
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

let x = Number(input[0])
let y = Number(input[1])

function z(x, y) {
  return parseInt((BigInt(y) * BigInt(100)) / BigInt(x))
}

let init = z(x, y) // 80
let start = 1
let end = 1000000000
let result = -1
while (start <= end) {
  let mid = parseInt((end + start) / 2)
  let check = false
  if (init !== z(mid + x, mid + y)) check = true

  if (check) {
    result = mid
    end = mid - 1
  } else {
    start = mid + 1
  }
}
if (result === -1) result = -1
console.log(result)
