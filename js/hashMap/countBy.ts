export const countBy = <T>(f: (a: T) => string) => (a: T[]): {[key: string]: number} => {
    let answer: {[key: string]: number} = {}

    for(const element of a){
        const key = f(element)
        
        answer[key] = ~~answer[key] + 1
    }

    return answer
}