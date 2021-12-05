const fs = require('fs');
const [n, ...a] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const distances = a[0].split(' ').map(Number)
const prices = a[1].split(' ').map(Number)

let currentPrice = prices[0]
let answer = 0

for (let i = 0; i < n-1; i++) {
  answer += currentPrice * distances[i]
  if (currentPrice > prices[i+1]) currentPrice = prices[i+1]
}
console.log(answer)
