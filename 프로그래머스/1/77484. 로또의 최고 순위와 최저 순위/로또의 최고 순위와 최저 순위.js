function solution(lottos, win_nums) {
    
    // 최소 겹치는 수 
    let duplicates = lottos.filter((lotto) => win_nums.includes(lotto)).length;
    
    // 0의 개수
    let zeroCounts = lottos.filter((lotto) => lotto === 0).length;
    
    let maxRank = duplicates + zeroCounts;
    
    return [getRank(maxRank), getRank(duplicates)]
    
    
}

const getRank = (num) => {
    if (num === 0 || num === 1) {
        return 6;
    } else {
        return 7-num;
    }
}