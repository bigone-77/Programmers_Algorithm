// 쉽게 생각하면 두 배열의 차이를 구하면 되는것이여라

// function solution(participant, completion) {
//     let wanju = {};
//     participant.forEach((v) => {
//         if (wanju[v]) wanju[v]++;
//         else wanju[v] = 1;
//     });
//     for (let i = 0; i < completion.length; i++) {
//         if (wanju[completion[i]] !== 0) wanju[completion[i]] --;
//     }
//     for (let key in wanju) {
//         if (wanju[key] !== 0) return key;
//     }
// }
function solution(participants, completions) {
    const map = new Map();
    
    for(const participant of participants) {
        if (!map.get(participant)) {
            map.set(participant, 1)
        } else {
            map.set(participant, map.get(participant) + 1)
        }
    }
    
    for(const completion of completions) {
        if (map.get(completion)) {
            map.set(completion, map.get(completion) - 1)
        }
    }
    
    for (let [key, value] of map) {
        if (value >= 1) {
            return key
        }
    }
    
}