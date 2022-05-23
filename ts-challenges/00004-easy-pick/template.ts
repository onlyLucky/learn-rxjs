/*
 * @Author: fg
 * @Date: 2022-05-23 10:12:26
 * @LastEditors: fg
 * @LastEditTime: 2022-05-23 11:46:54
 * @Description: 实现 Pick
 */

/*
1.返回一个对象
2.遍历参数2：[P in K]
3.取值：T[P]
4.看看 key 是否在对象中：K extends keyof T
*/

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
/* 
keyof T：获取T中所有的key
K extends：约束 K 是属于 keyof T 的
[P in K]：遍历K，P就是每一次遍历的值
T[P]：取值 
*/

export type {
  MyPick
}


/* keyof  keyof T 类型被视为字符串的子类型。*/

interface Person {
  name: string
  age: number
  location: string
}
type K1 = keyof Person // "name" | "age" | "location"
type K2 = keyof Person[] // "length" | "push" | "pop" | "concat" | ...
type K3 = keyof { name: 1 } // name
type K4 = keyof { [x: string]: Person } // string


