/* 
返回一个对象

遍历传入的对象（接口）   P in keyof T

加上 readonly 关键字  readonly [P in keyof T]

通过 key 获取传入对象（接口）的值，接口的值就是类型 [P in keyof T]: T[P]

*/


type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}



