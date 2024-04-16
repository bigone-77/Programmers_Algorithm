// 큐를 이용한 프로세스 처리를 충실하게 시뮬레이션하는 문제
// 문제에서 제시된 대로 시뮬레이션하면서, 답안이 발생하면 곧바로 시뮬레이션을 종료.
// -> location번째 요소가 몇번째로 출력되는지? 해당 요소 출력시 종료
function solution(priorities, location) {
    let answer = 0;
    let queue = [];
    
    queue = priorities.map((p, index) => {
        return { p, index };
    });
    
    while(queue.length > 0) {
        let current = queue.shift();
        let isBig = queue.some(e => e.p > current.p);
        
        if(isBig) { // current의 p값보다 더 큰 값을 지닌 요소가 큐에 있다면 큐에 맨 끝에 넣어준다.
            queue.push(current);    
        } else { // current의 p값이 가장 큰 경우 
            answer += 1;
            if(current.index === location) {
                break;
            }
        }
    }
    return answer;
}