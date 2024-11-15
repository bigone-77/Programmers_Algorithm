// 배열을 복사해서 불린 사람의 인덱스만 조정해도 알아서 뒤로 밀리지 않을까 ?

function solution(players, callings) {
    let playersMap = {};
    
    players.forEach((player, index) => {
        playersMap[player] = index;
    });
    
    for (let i = 0; i < callings.length; i += 1) {
        let idx = playersMap[callings[i]];
        let temp = players[idx - 1];
        
        players[idx - 1] = callings[i];
        players[idx] = temp;
        
        playersMap[callings[i]] = idx - 1;
        playersMap[temp] = idx;
    }
    
    return players;
}