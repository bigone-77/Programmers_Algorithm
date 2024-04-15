// 전형적인 스택 사용 문제
// '(' 괄호가 나오면 스택에 push
// ')' 괄호가 나오면 스택에 pop
function solution(s){
    if (s.length % 2 !== 0) return false;
    
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(s[i]);
        else {
            if (stack.length === 0) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    if (stack.length > 0) return false;
    return true;
}