function solution(arr) {
    let row = arr.length;   // 행의 수
    let col = arr[0].length; // 열의 수
    
    if (row === col) {
        return arr;
    } else if (row > col) { // 열의 수를 차이만큼 증가시켜야함 -> 모든 행에 마지막값으로 0 추가
        return arr.map((value) => {
            for (let i = 0; i < row-col; i++) {
                value.push(0);
            }
            return value;
        })
    } else {    // 행의 수를 증가시켜야함
        for (let i = 0; i < col-row; i++) {
            const newArr = Array.from({length: col}, () => 0);
            arr.push(newArr);
        }
        return arr;
    }
}