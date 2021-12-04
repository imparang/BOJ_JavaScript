const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const s = input[0].split('').sort((a,b) => -Number(a)+Number(b)).join('')
console.log(s)
