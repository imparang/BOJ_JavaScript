let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// input은 저장소를 읽어서 줄 별로 나누어서 배열에 담은거

data = input[0].split(' ')
// 첫 번째 줄의 데이터를 공백 기준으로 나눔
// data = ['1', '2']

a = Number(data[0])
b = Number(data[1])

console.log(a * b)
