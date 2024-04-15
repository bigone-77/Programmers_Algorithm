function solution(people, limit) {
    // 1. 보트를 적게 써야하므로 되도록이면 하나의 여러 사람 수용하기
    // 2. for문을 돌아서 정렬된 배열 중 기준 넘어가기 직전 인덱스 값에 따라 count 증가
    // 3. left, right를 각각 커지게, 작아지게 하여 점점 좁혀나가기
    
    let sortedPeople = people.sort((a, b) => a - b);
    let count = 0;
    let left = 0;
    let right = sortedPeople.length - 1;
    
    while(left <= right) {
         if (sortedPeople[left] + sortedPeople[right] <= limit) {
            left++; 
        }
        right--;
        count++;
    }
    return count;
}