const fs = require('fs') // /dev/stdin
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let m = Number(input[1])
let arr = input.slice(2)

let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0))
for (const a of arr) {
  let [x, y] = a.split(' ').map(Number)
  graph[x][y] = 1
  graph[y][x] = 1
}
graph = graph.map(el =>
  el.reduce((pv, cv, i) => {
    if (cv === 1) pv.push(i)
    return pv
  }, [])
)

let visited = Array(n + 1).fill(false)
let cnt = 0
function dfs(graph, v, visited) {
  visited[v] = true
  cnt += 1
  for (const a of graph[v]) {
    if (!visited[a]) {
      dfs(graph, a, visited)
    }
  }
}

dfs(graph, 1, visited)
console.log(cnt - 1)
