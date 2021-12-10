const fs = require('fs') // /dev/stdin
let [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(a)
let arr = b.split(' ').map(Number)
let d = [0]
for (const a of arr) {
  if (d[d.length - 1] < a) d.push(a)
  else {
    let idx = lowerBound(d, a, 0, d.length)
    d[idx] = a
  }
}

console.log(d.length - 1)

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2)
    if (arr[mid] >= target) end = mid
    // 최대한 왼쪽으로 이동하기
    else start = mid + 1
  }
  return end
}
