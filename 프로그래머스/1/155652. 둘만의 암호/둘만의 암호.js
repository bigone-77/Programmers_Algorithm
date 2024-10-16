function solution(s, skip, index) {
    const 알파벳 = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
        'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z'
    ].filter((alpha) => skip.includes(alpha) === false);
    
    let result = [];
    
    for (let i = 0; i < s.length; i += 1) {
        let word_index = 알파벳.join('').indexOf(s[i]);
        
        // if (word_index + index > 알파벳.length) {
        //     result.push(알파벳[word_index + index - 알파벳.length]);
        // } else {
        //     result.push(알파벳[word_index + index]);
        // }
        let new_index = (word_index + index) % 알파벳.length;
        result.push(알파벳[new_index]);
    }
    return result.join('');
}