const filter = <T>(f: (a: T) => boolean) => (a: {[key: string]: T}) => {
    let answer: {[key: string]: T} = {}
    
    for(const [key, value] of Object.entries(a)){
        if(f(value)) answer[key] = a[key]
    }

    return answer
}