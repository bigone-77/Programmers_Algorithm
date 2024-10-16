// (1, 2, 3, 1)이 연이어 오면 cnt += 1하고 1, 2, 3, 1제거

function solution(ingredient) {
    let cnt = 0;
    const stack = [];
    
    for (let i = 0; i < ingredient.length; i += 1) {
        stack.push(ingredient[i]);
        if (stack.length > 3) {
            const isBurger = stack.slice(-4).join('');
            
            if (isBurger === '1231') {
                stack.splice(-4);
                cnt += 1;
            }
        }
    }
    return cnt;
    
}