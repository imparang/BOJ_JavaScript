const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let input = []
class Queue {
  constructor() {
    this.items = {}
    this.headIndex = 0
    this.tailIndex = 0
  }

  enqueue(item) {
    this.items[this.tailIndex] = item
    this.tailIndex++
  }

  dequeue() {
    const item = this.items[this.headIndex]
    delete this.items[this.headIndex]
    this.headIndex++
    return item
  }

  peek() {
    return this.items[this.headIndex]
  }

  getLength() {
    return this.tailIndex - this.headIndex
  }
}
let dfsAnswer = ''
function dfs(graph, v, visited) {
  visited[v] = true
  dfsAnswer += v + ' '
  for (const a of graph[v]) {
    if (!visited[a]) {
      dfs(graph, a, visited)
    }
  }
}

let bfsAnswer = ''
function bfs(graph, start, visited) {
  const queue = new Queue()
  queue.enqueue(start)
  visited[start] = true
  while (queue.getLength() !== 0) {
    let v = queue.dequeue()
    bfsAnswer += v + ' '
    for (const a of graph[v]) {
      if (!visited[a]) {
        queue.enqueue(a)
        visited[a] = true
      }
    }
  }
}

rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  let [n, m, v] = input[0].split(' ').map(Number)
  input = input.slice(1)
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0))
  //양방향 그래프로 입력 노드 위치에 1 대입
  for (let i of input) {
    let [x, y] = i.split(' ').map(Number)
    graph[x][y] = 1
    graph[y][x] = 1
  }

  graph = graph.map(el =>
    el.reduce((pv, cv, i) => {
      if (cv === 1) pv.push(i)
      return pv
    }, [])
  )

  let visited = Array(graph.length).fill(false)
  dfs(graph, v, visited)

  visited = Array(graph.length).fill(false)
  bfs(graph, v, visited)

  console.log(dfsAnswer)
  console.log(bfsAnswer)
  process.exit()
})
