function solution(progresses, speeds) {
    let s = []; // 각 작업당 배포하는데 필요한 시간
    for (let i = 0; i < progresses.length; i++) {
        let num = 0;
        while (progresses[i] + speeds[i]*num < 100) {
            num++;
        }
        s.push(num);
    }
    
    let result = [];
    let maxDay = s[0]; // 현재까지 최대 배포일
    let count = 1; // 현재까지 배포되는 기능 수
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] <= maxDay) { // 이전 작업보다 배포일이 작거나 같을 경우
            count++; // 배포되는 기능 수 증가
        } else { // 이전 작업보다 배포일이 큰 경우
            result.push(count); // 이전까지 배포되는 기능 수를 결과 배열에 추가
            maxDay = s[i]; // 최대 배포일 갱신
            count = 1; // 배포되는 기능 수 초기화
        }
    }
    result.push(count); // 마지막 배포되는 기능 수 추가
    
    return result;
}