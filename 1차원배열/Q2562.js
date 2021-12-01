const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let max = 0
let index = 0
for (let i = 0; i < input.length; i++){
  if (Number(input[i]) > max) {
    index = i + 1
    max = input[i]
  } 
}
console.log(max)
console.log(index)
