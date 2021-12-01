let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0]

let a = Number(data.split(' ')[0])

if (a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0)) {
  console.log(1)
} else {
  console.log(0)
}
