/* 
取出数组的第一个元素

由观察测试case得到：
- 数组 [3,2,1] 希望取出 3
- 数组 [()=>123, {a:string}]，希望取出函数 ()=>123
- 空数组，希望取出 never
- 唯一元素数组 [undefined]，取出唯一元素 undefined
- 传入元素不是数组，希望报错

解题思路：
T[0] 获取数组第一个元素测试case= [true,true,false,true],空数组，希望取出 never

T extends [] 相当于判断 T 是否为空数组
T["length"] extends 0 也可以判断当前是否为空数组，T["length"]取数组length
T[0] extends T[number] 判断T[0] 是否在T数组中

知识点：
- T[0] 没有的话会返回 undefined
- T[number] 没有的话会返回 never
-infer（推断）：可以理解为声明一个变量
*/

type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
// type First<T extends any[]> =  T[0] extends T[number] ? T[0] : never
// type First<T extends any[]> = T extends [infer first, ...infer rest] ? first : never

