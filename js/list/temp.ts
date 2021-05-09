const findEdges = (grid: number[][]): {[key: string]: number} => {
    let answer: {[key: string]: number} = {}

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] === 1){
                const key1 = `${i-1},${j},${i},${j}`
                const key2 = `${i},${j-1},${i},${j}`
                const key3 = `${i},${j},${i+1},${j}`
                const key4 = `${i},${j},${i},${j+1}`
                
                answer[key1] =  ~~answer[key1] + 1
                answer[key2] =  ~~answer[key2] + 1
                answer[key3] =  ~~answer[key3] + 1
                answer[key4] =  ~~answer[key4] + 1
            }
        }
    }

    return answer
}

function islandPerimeter(grid: number[][]): number {
    const table = findEdges(grid)
    
    return Object.values(table).filter(x => x === 1).length
};