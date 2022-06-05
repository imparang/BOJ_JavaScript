import Foundation

let c = Int(readLine()!)!

for _ in 1 ... c {
    var testCase = readLine()!.split(separator: " ").map { Double(String($0))! }
    let n: Double = testCase[0]
    testCase.remove(at: 0)

    var sum: Double = 0
    for a in testCase {
        sum += Double(a)
    }
    let mean: Double = sum / n

    let filteredArr = testCase.filter { mean < $0 }
    let numberOfStudents = Double(filteredArr.count) / Double(n) * 100
    
    print(String(format: "%.3f", numberOfStudents) + "%")
}
