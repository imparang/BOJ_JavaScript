const fs = require('fs');
const [a, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, total] = a.split(' ')

// 그리디 알고리즘이므로 내림차순 정렬
arr.sort((a,b)=> -Number(a)+Number(b))

// 동전 갯수 초기화
let cnt = 0
// 인덱스 초기화
let i = 0

while(true) {
  // 사용되는 동전 갯수
  let result = parseInt(total/Number(arr[i]))
  // 총 사용 금액 = 사용되는 동전 갯수 * 동전의 금액
  let target = result * Number(arr[i])
  
  // 전체 금액에서 사용금액을 차감
  total -= target
  // 동전 갯수 카운팅
  cnt += result

  // 원래는 arr[n-1]번째 보다 작을 경우로 나누려했으나, 그것이 1이여서 최종적으로 0이 된다고 판단
  if(total === 0) break
  i += 1
}
console.log(cnt)
