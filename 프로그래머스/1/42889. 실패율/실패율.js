function solution(N, stages) {
    let failure = [];
    let bunmo = stages.length;
    for (let i = 1; i <= N; i++) {
        let bunja = stages.filter((value) => value === i).length;
        failure.push([i, bunja / bunmo]);
        bunmo -= bunja;
    }
    return failure.sort((a, b) => b[1] - a[1]).map((f) => f[0]);
}