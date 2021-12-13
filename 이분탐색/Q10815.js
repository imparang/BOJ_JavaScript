const fs = require('fs') // /dev/stdin
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let m = Number(input[2])
let arrN = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b)
let arrM = input[3].split(' ').map(Number)
let start = 0
let end = n - 1
function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = parseInt((end + start) / 2)
    if (arr[mid] === target) return 1
    else if (arr[mid] > target) end = mid - 1
    else start = mid + 1
  }
  return 0
}

let result = ''
for (const a of arrM) {
  result += binarySearch(arrN, a, start, end) + ' '
}
console.log(result)
