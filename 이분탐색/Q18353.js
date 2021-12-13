const fs = require('fs') // /dev/stdin
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(Number)
arr.reverse()

const d = [0]

for (const a of arr) {
  if (d[d.length - 1] < a) d.push(a)
  else {
    let index = lowerBound(d, a, 0, d.length)
    d[index] = a
  }
}

console.log(n - (d.length - 1))

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2)
    if (arr[mid] >= target) end = mid
    else start = mid + 1
  }
  return end
}
