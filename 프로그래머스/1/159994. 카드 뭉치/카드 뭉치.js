function solution(cards1, cards2, goal) {
    let goalIdx = 0

    while(goalIdx !== goal.length){
        if(cards1[0] === goal[goalIdx]){
            cards1.shift()
            goalIdx++
        }
        else if(cards2[0] === goal[goalIdx]){
            cards2.shift()
            goalIdx++
        }
        else{
            break;
        }
    }

    return goalIdx === goal.length ? 'Yes' : 'No'
}