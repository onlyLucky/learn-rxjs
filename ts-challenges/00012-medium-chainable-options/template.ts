/* 
可串联构造器

题目解析：

- 相当于用链式的方式，将参数注入相应的对象
- 相同 key 的内容再次注入会报错

解题思路：

- 传入默认值用来储存key 和value
type Chainable<T = {}> = {
  option(key: string, value: any): any
  get(): any
}
- 对option的类型进行约束处理
type Chainable<T = {}> = {
  option<K extends string,V extends unknown>(key: K, value: V):any
  get(): any
}
- 串联调用对函数返回值类型（Chainable）处理
type Chainable<T = {}> = {
  option<K extends string,V extends unknown>(key: K, value: V):Chainable<T & {[P in K]:V}>
  get(): T
}
- 处理相同 key 的内容再次注入会报错，添加判断
type Chainable<T = {}> = {
  option<K extends string, V extends unknown>(key: K extends keyof T ? never : K, value: V): Chainable<T & { [P in K]: V }>
  get(): T
}


*/


type Chainable<T = {}> = {
  option<K extends string, V extends unknown>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<T & { [P in K]: V }>
  get(): T
}
