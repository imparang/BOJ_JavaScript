const fs = require('fs');
const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const times = arr.map(el => el.split(' ').map(Number))
times.sort((a,b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0]
  } else {
    return a[1] - b[1]
  }
})

let cnt = 1
let time = times[0]
let i = 1
while(i < n) {
  if(time[1] <= times[i][0]) {
    time = times[i]
    cnt += 1
  }
  i += 1
}
console.log(cnt)
