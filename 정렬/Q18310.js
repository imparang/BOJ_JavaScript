const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b)

// 중앙값에 해당하는 위치의 경우, 거리의 총합이 최소가 된다.

// 중앙값 출력
const answer = arr[parseInt((n - 1) / 2)]
console.log(answer)
