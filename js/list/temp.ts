function findWords(words: string[]): string[] {
    const table1 = new Set("qwertyuiop")
    const table2 = new Set("asdfghjkl")
    const table3 = new Set("zxcvbnm")
    
    const answer = words.filter(x => {
        const list = x.split('')
        
        if(list.every(x => table1.has(x))) return true
        if(list.every(x => table2.has(x))) return true
        if(list.every(x => table3.has(x))) return true
        
        return false
    })
    
    return answer
};