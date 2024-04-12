function solution(arr, divisor) {
    let result = [];
    
    arr.sort((a, b) => a - b).map((value) => {
        if (value % divisor === 0) {
            result.push(value)
        }  
    })
    if (result.length === 0) result.push(-1)
    return result
}