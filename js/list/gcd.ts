const gcdHelper = (a: number, b: number): number => !b ? a : gcdHelper(b, a % b)

const gcd = (...args) => args.reduce(gcdHelper)