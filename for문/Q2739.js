let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0]

for (let i = 1; i < 10; i++) {
  console.log(`${data} * ${i} = ${data * i}`)
}
