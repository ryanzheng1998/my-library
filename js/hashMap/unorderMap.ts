const unorderMap = (list: string[]): {[key: string]: boolean} => {
    let answer: {[key: string]: boolean} = {}

    list.forEach(value => {
        answer[value] = true
    })

    return answer
}