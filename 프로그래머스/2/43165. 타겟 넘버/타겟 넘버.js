function solution(numbers, target) {
    let answer = 0;
    
    const dfs = (sum, depth) => {
        if (depth === numbers.length) {
            if (sum === target) {
                answer++;
            }
            return;
        }
        dfs(sum + numbers[depth], depth + 1);
        dfs(sum - numbers[depth], depth + 1);
    }
    dfs(0, 0);
    return answer;
}
