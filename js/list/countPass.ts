export const countPass = <T>(f: (a: T) => boolean) => (a: T[]): number => {
    let answer = 0
    for(const element of a){
        if(f(element)){
            answer++
        }
    }
    return answer
}