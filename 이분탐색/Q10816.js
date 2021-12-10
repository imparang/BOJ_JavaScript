const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let arrN = input[1].split(' ').map(Number)
let m = Number(input[2])
let arrM = input[3].split(' ').map(Number)

const map = new Map()
for (let i = 0; i < n; i++) {
  if (map.has(arrN[i])) map.set(arrN[i], map.get(arrN[i]) + 1)
  else map.set(arrN[i], 1)
}
let answer = ''
for (let i = 0; i < m; i++) {
  answer += (map.get(arrM[i]) || 0) + ' '
}
console.log(answer)
