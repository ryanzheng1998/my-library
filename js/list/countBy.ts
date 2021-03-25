const countBy = <T>(f: (a: T) => string) => (a: T[]): { [index: string]: number } => {
    let answer: { [index: string]: number } = {}
    for(const element of a){
        const key = f(element)
        if(answer[key]){
            answer[key]++
        } else {
            answer[key] = 1
        }
    }
    return answer
}