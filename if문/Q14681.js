// node.js 문제 중 fs로 풀리지 않는 경우 readline을 사용해야 한다.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = []

rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
    // 이 안에 로직 작성
    let x = Number(input[0])
    let y = Number(input[1])

    if (x > 0 && y > 0) {
        console.log('1')
    } else if (x > 0 && y < 0) {
        console.log('4')
    } else if (x < 0 && y > 0) {
        console.log('2')
    } else {
        console.log('3')
    }
})
