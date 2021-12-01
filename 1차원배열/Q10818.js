const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0])
const arr = input[1].split(' ')

const max = arr.reduce((a,b) => Math.max(a, b))
const min = arr.reduce((a,b) => Math.min(a, b))

console.log(`${min} ${max}`)
