export const countPass = <T>(f: (a: T) => boolean) => (a: T[]): number => {
     return a.filter(f).length
}