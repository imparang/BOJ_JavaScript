let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let i = -1
while(true) {
  i += 1
  let a = Number(input[i].split(' ')[0])
  let b = Number(input[i].split(' ')[1])
  if(a === 0 && b === 0) break
  console.log(a+b)
}
