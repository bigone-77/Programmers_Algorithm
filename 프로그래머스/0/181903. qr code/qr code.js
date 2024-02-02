function solution(q, r, code) {
    // return code[1] + code[1+3] + code[1+3+3] + code[1+3+3+3] + code[1+3+3+3+3]
    let strArr = [];
    let answer = [...code];
    for (let i = 0; i < answer.length; i++) {
        strArr.push(answer[r+i*q]);
    }
    return strArr.join("");
    
}