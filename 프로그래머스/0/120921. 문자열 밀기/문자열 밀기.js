function solution(A, B) {
    let aArr = [...A];
    for (let i = 1; i < A.length; i++) {
        if (A === B) {
            return 0;
        } else {
            aArr.unshift(aArr.pop());
            if (aArr.join("") === B) {
                return i;
            } 
        }
    }
    return -1;
}