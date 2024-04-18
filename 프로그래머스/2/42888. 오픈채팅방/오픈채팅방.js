function solution(record) {
    let original = record.map((v) => v.split(" "));
    let hashMap = new Map();
    original.map((v) => {
        if((v[0]==='Enter')||(v[0]==='Change')){
               hashMap.set(v[1], v[2]);
        }
    });
    original.map((v) => {
        v[1] = hashMap.get(v[1]);
    })

    return original.filter((v) => v[0] !== 'Change').map((s) => {
        if (s[0] === 'Enter') {
            return `${s[1]}님이 들어왔습니다.`;
        } else if (s[0] === 'Leave') {
            return `${s[1]}님이 나갔습니다.`;
        } 
    })
    
}