// 形態太復雜了 QQ
const unest = <T>(a : T[][]) => {
    const answer: T[] = []
    for(const element of a){
        for(const element2 of element){
            answer.push(element2)
        }
    }
    return answer
}