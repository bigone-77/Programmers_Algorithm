// 카페라떼 -> 5000, 아메리카노 -> 4500

function solution(order) {
    let answer = order.map((coffee) => {
        if (coffee.includes("cafelatte")) {
            coffee = "5000"
        } else {
            coffee = "4500"
        }
        return coffee
    })
    return answer.map((price) => Number(price)).reduce((a, b) => a + b)
}