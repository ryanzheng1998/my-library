const add = (a: number) => (b: number): number => a + b
const lte = (a: number) => (b: number): boolean => a <= b

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const max = Math.max(...candies)
    const addExtra = add(extraCandies)
    const maxCandies = candies.map(addExtra)
    const more = lte(max)
    const answer = maxCandies.map(more)

    let a

    const b = ~~a

    return answer
};