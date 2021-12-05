const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
let input = []
rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  solution1(input)
  // solution2(input)
  process.exit()
})

function solution1(input) {
  const a = []
  for (let i = 1; i <= Number(input[0]); i++) {
    a.push(input[i])
  }

  // sort가 원본 배열을 변경시키기 때문에 복사해줌
  const members = [...a]
  // 현재 정렬 상태가 오름차순인지 확인
  if (a.join('') === members.sort().join('')) {
    console.log('INCREASING')
    // 현재 정렬 상태가 내림차순인지 확인
  } else if (
    a.join('') ===
    members
      .sort((a, b) => {
        if (a < b) {
          return 1
        }
        if (a === b) {
          return 0
        }
        if (a > b) {
          return -1
        }
      })
      .join('')
  ) {
    console.log('DECREASING')
    // 둘 다 아닐 경우
  } else {
    console.log('NEITHER')
  }
}

function solution2(input) {
  let n = Number(input[0])
  let names = []
  for (let i = 1; i <= n; i++) {
    names.push(input[i])
  }

  // 정렬 상태 초기화
  let increasing = true
  let decreasing = true
  let neither = true

  for (let i = 0; i < n - 1; i++) {
    // 현재 정렬 상태가 오름차순인 경우
    if (names[i] < names[i + 1]) {
      decreasing = false
      // 현재 정렬 상태가 내림차순인 경우
    } else if (names[i] > names[i + 1]) {
      increasing = false
    }
  }

  if (increasing) console.log('INCREASING')
  else if (decreasing) console.log('DECREASING')
  // 둘 다 아닌 경우
  else console.log('NEITHER')
}
