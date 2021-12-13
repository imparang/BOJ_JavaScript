const fs = require('fs') // /dev/stdin
let [a, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(a)
let graph = arr.map(el => el.split('').map(Number))

let total = 0
let cnt = 0
let count = []
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j) === true) {
      total += 1
      count.push(cnt)
    } else cnt = 0
  }
}

console.log(total)
if (total) console.log(count.sort((a, b) => a - b).join('\n'))
else console.log(0)

function dfs(x, y) {
  if (x <= -1 || x >= n || y <= -1 || y >= n) return false
  if (graph[x][y] === 1) {
    graph[x][y] = 0
    dfs(x - 1, y)
    dfs(x, y - 1)
    dfs(x + 1, y)
    dfs(x, y + 1)
    cnt += 1
    return true
  }
  return false
}
