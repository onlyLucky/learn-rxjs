/*
Unshift: 顶部塞入

观察案例:
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]

 */
type Unshift<T extends any[], U> = [U, ...T]
