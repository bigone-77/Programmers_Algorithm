function solution(n) {
    return String(n).split('').map((value) => Number(value)).reverse();
}