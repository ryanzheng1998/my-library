const transpose = (matrix: number[][]): number[][] => {
    const answer = matrix[0].map((_, i) => matrix.map(y => y[i]))

    return answer
}