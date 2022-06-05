let n = Int(readLine()!)!

for _ in 1 ... n {
    let str = readLine()!
    let score = getScore(str)
    print(score)
}

func getScore(_ str: String) -> Int {
    var sum = 0
    var temp = 0
    for c in str {
        if c == "O" {
            temp += 1
        } else {
            temp = 0
        }
    
        sum += temp
    }
    
    return sum
}

