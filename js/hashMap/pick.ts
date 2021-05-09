const pick = <K extends string>(names: K[]) => <T>(obj: T): Pick<T, Exclude<keyof T, Exclude<keyof T, K>>> => {
    // create table
    const table = unorderMap(names)
    
    
    let answer: any = {}

    for(const [key, value] of Object.entries(obj)){
        if(table[key]) answer[key] = value
    }

    return answer
}

