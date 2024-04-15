// function solution(numbers) {
//     let numberS = numbers.map(v => String(v));
//     numberS.sort((a, b) => {
//         return b+a > a+b ? 1 : a+b > b+a ? -1 : 0;
//     })
//     let result = numberS.reduce((a, b) => a + b);
//     if (Number(result) === 0) return "0";
//     return result;
// }


function solution(numbers) {
    let strArr = [...numbers].map((number) => String(number));
    strArr.sort((a, b) => {
        return b + a > a + b ? 1 : a + b > b + a ? -1 : 0;
    });
    let result = strArr.reduce((a, b) => a + b);
    if (Number(result) === 0) {
        return "0";
    } return result;
}