let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0]

let a = Number(data.split(' ')[0])

if (100 >= a && a >89) {
  console.log('A')
} else if (89 >= a && a > 79) {
  console.log('B')
} else if (79 >= a && a> 69) {
  console.log('C')
} else if (69 >= a && a > 59) {
  console.log('D')
} else {
  console.log('F')
}
