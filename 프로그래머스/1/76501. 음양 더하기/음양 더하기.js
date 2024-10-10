function solution(absolutes, signs) {
    let numbers = signs.map((sign, index) => {
        if (sign) {
            return absolutes[index];
        } return -absolutes[index];
    });
    return numbers.reduce((a, b) => a + b);
}