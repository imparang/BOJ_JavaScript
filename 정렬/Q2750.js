const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stout
})

let input = []
rl.on('line', function(line){
  input.push(line)
}).on('close', function(){
  solution(input)
  process.exit()
})
function solution(input) {
const n = input[0]
const arr = input.filter((el,idx) => idx > 0)

console.log(arr.sort((a,b) => a-b).join('\n'))
}
