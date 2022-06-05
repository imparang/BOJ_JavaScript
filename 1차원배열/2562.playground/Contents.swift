var arr = [Int]()
for _ in 1 ... 9 {
    let input = Int(readLine()!)!
    arr.append(input)
}

let sortedArr = arr.sorted(by: { $0 > $1 })
let index = String((arr.firstIndex(of: sortedArr[0]) ?? 0) + 1)
let max = String(sortedArr[0])

var answer = max + "\n" + index

print(answer)
