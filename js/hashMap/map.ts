const map = <T, U>(f: (a: T) => U) => (a: {[key: string]: T}): {[key: string]: U} => {
    let answer: {[key: string]: U} = {}
    
    for(const [key, value] of Object.entries(a)){
        answer[key] = f(value)
    }

    return answer
}