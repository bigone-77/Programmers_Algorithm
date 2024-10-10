// 전체 재생구역은 0 ~ convertToSec(video_len)
// 그 중 op_start ~ op_end 사이에 있으면 안됨, 이 부분을 영역A라 하자
// 1. 첫번째 pos가 영역 A안에 있다면 pos를 op_end에 맞춰줘야함
// 2. command[n]를 수행하고 난 뒤 pos에 있다면 pos를 op_end에 맞춰줘야함

function solution(video_len, pos, op_start, op_end, commands) {
    let currentSecs = convertToSec(pos);
    const videoLength = convertToSec(video_len);
    
    currentSecs = inspectOpArea(currentSecs, op_start, op_end);
    
    for (let i = 0; i < commands.length; i += 1) {
        if (commands[i] === 'next') {
            if (currentSecs + 10 < videoLength) {
                currentSecs = inspectOpArea(currentSecs + 10, op_start, op_end);
            } else {
                currentSecs = videoLength;
            }
        }
        else {
            if (currentSecs - 10 > 0) {
                currentSecs = inspectOpArea(currentSecs - 10, op_start, op_end);
            } else {
                currentSecs = inspectOpArea(0, op_start, op_end);
            }
        }
    }
    return convertToTime(currentSecs);
}

// 시간(string)을 초(number)로 바꾸는 훅
const convertToSec = (time) => {
    const [minutes, secs] = time.split(":").map(Number);
    return minutes * 60 + secs;
}

// 초(number)을 시간(string)로 바꾸는 훅
const convertToTime = (time) => {
    const hours = Math.floor(time / 60);
    const secs = time % 60;
    
    return `${String(hours).padStart(2, 0)}:${String(secs).padStart(2, 0)}`
}

// 현재 검사하는 시각(currentPos)
const inspectOpArea = (cur, start, end) => {
    const startSecs = convertToSec(start);   // 오프닝 시작 시간
    const endSecs = convertToSec(end);   // 오프닝 종료 시간
    
    if (cur <= endSecs && cur >= startSecs) {
        return endSecs;
    } else {
        return cur;
    }
}