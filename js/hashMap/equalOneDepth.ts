const equalOneDepth = <T>(a: {[key: string]: T}) => (b: {[key: string]: T}): boolean => {
    if(Object.keys(a).length !== Object.keys(b).length) return false

    for(const [key, value] of Object.entries(a)){
        if(value !== b[key]){
            return false
        }
    }

    return true
}