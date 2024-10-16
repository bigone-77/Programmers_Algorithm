function solution(numbers) {
    const arr = Array.from(Array(10), (_, index) => index);
    return arr.filter((value) => !numbers.includes(value)).reduce((a, b) => a+b)
}