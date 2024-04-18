function solution(arr) {
    let i = 0;
    let stk = [];
    while(true) {
        if (stk.length === 0) {
            stk.push(arr[i]);
            i++;
        } else {
            if (stk[stk.length - 1] < arr[i]) {
                stk.push(arr[i]);
                i++;
            } else {
                stk.pop();
            }
        }
        if (i === arr.length) break;
    }
    return stk;
}