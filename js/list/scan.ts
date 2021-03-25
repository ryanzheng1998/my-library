export const scan = <T, U>(f: (a: T) => (b: U) => T) => (a: T) => (b: U[]): T[] => {
    let answer: T[] = [a]
    for(let i=0; i<b.length; i++){
        a = f(a)(b[i])
        answer.push(a)
    }
    return answer
}