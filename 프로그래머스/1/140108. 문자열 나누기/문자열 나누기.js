function solution(s) {
    let stack = [];
    let cnt = 0;
    
    for (let i = 0; i < s.length; i += 1) {
        stack.push(s[i]);
        
        let same = stack.filter((num) => num === stack[0]);
        let diff = stack.filter((num) => num !== stack[0]);
        
        if (same.length === diff.length) {
            cnt += 1;
            stack = [];
        }
    }
    if (stack.length !== 0) cnt += 1;
    
    return cnt;
}