/* 
T[number] 传递为元祖
ts 中遍历数组的方式 [number]


*/

type TupleToObject<T extends readonly (string|number|symbol)[]> = {

  [P in T[number]]: P
}
