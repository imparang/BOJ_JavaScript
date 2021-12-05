const fs = require('fs')
const [n, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

// 오름차순 정렬
const arr = input.map(Number).sort((a, b) => a - b)

// 연속적인 수열 길이의 최댓값
let answer = 0
for (let i = 0; i < n; i++) {
  // 현재 수부터의 연속적인 수열 길이
  let cnt = 0
  // 5개씩 잘라서
  for (let j = 0; j < 5; j++) {
    // 연속적인 값이 존재하는지 확인
    if (arr.slice(i, i + 5).includes(arr[i] + j)) {
      cnt += 1
    }
    // 최대 길이 갱신
    answer = Math.max(answer, cnt)
  }
}
// 5 - 존재하는 최대 길이 = 필요한 길이
console.log(5 - answer)
