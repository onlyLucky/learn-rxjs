/* 
Last

*/

type Last<T extends any[]> = T extends [...infer Others, infer L] ? L : never
// type Last<T extends any[]> = [any, ...T][T['length']]
