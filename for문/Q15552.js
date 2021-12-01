let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 백만번 테스트를 하기 때문에 콘솔만 하면 런타임 오류가 생깁니다.
// 그래서 문자열로 정리해서 한 번 콘솔 입력하면 됨
let n = Number(input[0])
let answer = ''

for(let i = 1; i < n + 1; i++) {
  let data = input[i].split(' ')
  let a = Number(data[0])
  let b = Number(data[1])

  answer += a + b + '\n'
}

console.log(answer)
