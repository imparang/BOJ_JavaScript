const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let arrN = input[1].split(' ').map(Number)
let m = Number(input[2])
let arrM = input[3].split(' ').map(Number)
arrN.sort((a, b) => a - b)

let result = ''
for (let i = 0; i < m; i++) {
  // 이진 탐색 수행 결과 출력
  result += binarySearch(arrN, arrM[i], 0, n - 1) + '\n'
}
console.log(result)

function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2)
    // 찾은 경우 중간점 인덱스 반환
    if (arr[mid] == target) return 1
    // 중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽 확인
    else if (arr[mid] > target) end = mid - 1
    // 중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
    else start = mid + 1
  }
  return 0
}
