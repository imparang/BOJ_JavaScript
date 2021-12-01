let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0]

let a = Number(data.split(' ')[0])
let b = Number(data.split(' ')[1])

// 시가 바뀌지 않을 때
if (b - 45 >= 0) {
  b -= 45
  console.log(a, b)
} else { // 시가 바뀔 때
  b = 60 + (b-45) // 시가 바뀔 경우는 분이 바껴야 댐
  if(a === 0) { // 0시 일 때
    a = 23 // 무조건 23시로 바뀜
  } else {
    a -= 1 // 시가 하나 뒤로
  }
  console.log(a, b)
}
