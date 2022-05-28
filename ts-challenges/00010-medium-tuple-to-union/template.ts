/* 
tuple to union 元组转联合类型

*/


// type TupleToUnion<T> = T extends Array<infer K> ? K : never
type TupleToUnion<T extends any[]> = T[number]
