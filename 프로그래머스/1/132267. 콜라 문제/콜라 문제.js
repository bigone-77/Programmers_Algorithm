function solution(a, b, n) {
    let result = 0;
    
    while (n >= a) {
        // 교환할 수 있는 병의 수 계산
        let 몫 = Math.floor(n / a); // 교환 가능한 콜라 수
        let 남은병 = n % a;        // 교환 후 남은 빈 병 수
        let 얻은콜라 = 몫 * b;      // 받은 콜라 병 수

        // 콜라 개수 업데이트
        result += 얻은콜라;
        n = 얻은콜라 + 남은병; // 받은 콜라 병과 남은 빈 병으로 다시 시도
    }
    
    return result;
}
