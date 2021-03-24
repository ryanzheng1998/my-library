const zip = <T1>(a: T1[]) => <T2>(b: T2[]): [T1, T2][] => {
    let answer: [T1, T2][] = []
    
    const len = Math.min(a.length, b.length)
    for(let i=0; i<len; i++){
        answer.push([a[i], b[i]])
    }

    return answer
}