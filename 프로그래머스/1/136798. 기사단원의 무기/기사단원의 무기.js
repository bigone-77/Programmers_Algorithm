function solution(number, limit, power) {
    let arr = Array.from(Array(number), (_, index) => index + 1);
    
    let result = arr.map((value) => {
        if (getDivisorCnt(value).length <= limit) {
            return getDivisorCnt(value).length;
        } else {
            return power;
        }
    })
    return result.reduce((a, b) => a + b);
}

const getDivisorCnt = (num) => {
    let answer = [];
    
    for(let i = 1; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) {
            answer.push(i);
            
            if (i !== (num / i)) {
                answer.push(num / i);
            }
        }
    }
    return answer;
}