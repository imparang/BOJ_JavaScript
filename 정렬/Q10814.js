const fs = require('fs');
const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// member들을 나이와 이름으로 2차원 배열로 만들어 준다.
const member = arr.map(el => el.split(' '))

// 나이를 기준으로 정렬
member.sort((a,b) => Number(a[0] - Number(b[0])))

// 출력 형태 맞추기
console.log(member.map(el => el.join(' ')).join('\n'))
