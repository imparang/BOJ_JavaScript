var arr = [Int]()
for _ in 1 ... 10 {
    let input = Int(readLine()!)!
    arr.append(input)
}

var redundantArray = Set<Int>()

for i in arr {
    let remainder = i % 42
    redundantArray.update(with: remainder)
}

print(redundantArray.count)

