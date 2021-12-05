const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

// -를 기준으로 분리
const cal = input.join('').split('-')
let arr = []

// cal 배열 순회 (-로 나눈 녀석들의 합이 크면 클 수록 전체 값이 작아짐)
for (const a of cal) {
  // 한 뭉텅이 값 초기화
  let cnt = 0
  // -를 기준으로 나눈 값에서 +를 기준으로 나눔
  let s = a.split('+')

  // 기준으로 넣은 값이 없으면 문자열 전체를 배열의 엘리먼트로 만듬
  // +가 없으면 그냥 값 전체를 더함
  for (const b of s) { 
    cnt += Number(b)
  }
  // -를 기준으로 나눈 값들 중 뭉텅이 별로 합을 각각 구해놓음
  arr.push(cnt)
}

// 첫 번째 값은 양수이므로 따로 빼줘야 함
let answer = arr[0]

// arr를 순회하여 모든 값을 빼주면 된다.
for (let i = 1; i < arr.length; i++) {
  answer -= arr[i]
}

console.log(answer)
