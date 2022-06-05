let a = Int(readLine()!)!
let b = Int(readLine()!)!
let c = Int(readLine()!)!

var arr = Array(repeating: 0, count: 10)

var result = a * b * c
var num = 0

result % 10
result / 10

while true {
    if result == 0 {
        break
    }
    
    num = result % 10
    countNumber(num)
    result /= 10
}

func countNumber(_ num: Int) {
    switch num {
    case 0:
        arr[0] += 1
        break
    case 1:
        arr[1] += 1
        break
    case 2:
        arr[2] += 1
        break
    case 3:
        arr[3] += 1
        break
    case 4:
        arr[4] += 1
        break
    case 5:
        arr[5] += 1
        break
    case 6:
        arr[6] += 1
        break
    case 7:
        arr[7] += 1
        break
    case 8:
        arr[8] += 1
        break
    case 9:
        arr[9] += 1
        break
    default:
        break
    }
}

for i in arr {
    print(i)
}

