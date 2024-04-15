function solution(n, lost, reserve) {
    let lf = lost.filter(e => !reserve.includes(e)).sort((a, b)=> a - b);
    let rf = reserve.filter(e => !lost.includes(e)).sort((a, b)=> a - b);
    for (let i = 0; i < lf.length; i++) {
        for (let j = 0; j < rf.length; j++) {
            // let temp = 0;
            // temp = lf[i];
            // if ((temp - 1) === rf[j] || (temp + 1) === rf[j]){
            //     lf.splice(i, 1);
            //     rf.splice(j, 1);
            // }
            if(lf[i]-1 == rf[j] || lf[i]+1 == rf[j]) {
                lf.shift();
            }
        }
    }
    return (n - lf.length)
}