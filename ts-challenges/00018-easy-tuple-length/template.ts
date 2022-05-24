/*
获取元组长度

元组类型是另一种数组类型，它确切地知道它包含多少元素，以及它在特定位置包含哪些类型

元组：一个定死定长的一个数组类型

*/

type Length<T extends readonly any[]> = T['length']

/*
tuple 和普通数组有什么区别：
tuple 的 length 属性是一个它长度的数值，而普通数组的 length 属性是 number
*/

type StringNumberPair = [string, number]
type stringArr = string[]

type t1 = StringNumberPair["length"] // type t1 = 2
type t2 = stringArr["length"] // type t2 = number
