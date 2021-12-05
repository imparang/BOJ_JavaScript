function solution1() {
  const fs = require('fs')
  const [n, ...input] = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')

  // 오름차순 정렬
  const arr = input.map(Number).sort((a, b) => -a + b)

  let answer = -1
  for (let i = 0; i < Number(n) - 2; i++) {
    let cnt = -1
    for (let j = 0; j < 3; j++) {
      const temp = arr.slice(i, i + 3)
      if (temp[0] < temp[1] + temp[2]) cnt = temp[0] + temp[1] + temp[2]
    }
    answer = Math.max(answer, cnt)
  }

  console.log(answer)
}

function solution2() {
  const fs = require('fs')
  const [n, ...input] = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')

  // 오름차순 정렬
  const arr = input.map(Number).sort((a, b) => a - b)

  // 삼각형이 안되면 -1 리턴
  let answer = -1
  // 삼각형 둘레의 최댓값을 구하는 것이므로 인접한 3개만 확인
  for (let i = 0; i < Number(n) - 2; i++) {
    let a = arr[i]
    let b = arr[i + 1]
    let c = arr[i + 2]
    // 삼각형이면 그 합으로 변경
    if (c < a + b) {
      answer = a + b + c
    }
  }
  console.log(answer)
}
