function solution(k, m, score) {
    const 총사과의개수 = score.length;
    
    const 사과박스개수 = Math.floor(총사과의개수 / m);
    
    if (사과박스개수 === 0) {
        return 0;
    }
    
    let sortedArr = score.sort((a, b) => b - a);
    
    // 한 박스에는 m개의 사과가 들어감
    // 그게 총 사과박스개수만큼 박스가 있음
    
    return m * sortedArr.filter((_, index) => (index + 1) % m === 0).reduce((a, b) => a + b);
}