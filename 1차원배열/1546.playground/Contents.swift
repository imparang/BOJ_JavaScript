let n = Int(readLine()!)!
var arr = readLine()!.split(separator: " ").map { Double(String($0))! }

arr.sort(by: { $0 > $1 })

let m = arr[0]

var answer = 0
func fabricateScore(_ m: Double, _ arr: [Double]) -> Double {
    var newArr = [Double]()
    
    for i in arr {
        let newScore: Double = i / m * 100
        newArr.append(newScore)
    }
    
    var sum:Double = 0
    for i in newArr {
        sum += i
    }
    return sum / Double(newArr.count)
}

print(fabricateScore(m, arr))

