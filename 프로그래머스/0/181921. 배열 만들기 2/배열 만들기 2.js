function solution(l, r) {
    let arr = [];
    let bad = ["1", "2", "3", "4", "6", "7", "8", "9"]
    for (let i = l; i < r+1; i++) {
        arr.push(i);
    }
    
    const filteredArr = arr.map((number) => String(number))
        .filter((value) => {
            for (let i = 0; i < bad.length; i++) {
                if (value.includes(bad[i])) 
                    return false;
            }
            return true
        })
    return filteredArr.length ? filteredArr.map((value) => Number(value)) : [-1];
}