let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0]

let a = Number(data.split(' ')[0])
let b = Number(data.split(' ')[1])

if(a > b) console.log('>')
else if (a === b) console.log('==')
else console.log('<')
