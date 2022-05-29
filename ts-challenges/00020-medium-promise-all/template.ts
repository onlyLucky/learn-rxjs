/*
Promise.all
键入函数PromiseAll，它接受PromiseLike对象数组，返回值应为Promise<T>，其中T是解析的结果数组。

题目解析
- [1, 2, 3] as const 会将 [1, 2, 3]作为具体的类型传入 PromiseAll，期望值是 Promise<[1, 2, 3]>，说明只需要简单的遍历并输出即可
- 第三个参数是一个 Promise 类型，这个 Promise 类型中传入的数值 3。同时，期望的值在该位置变为 number，也就是数值 3 的类型（如果传入的数组中有 Promise 类型，则返回值相应的位置会输出对应 Promise 中接收的类型）
- 没有使用 as const，则期望的结果对应位置全部是相应值的类型

解题思路

- value的类型可以为任意类型的数组
```ts
declare function PromiseAll(values: unknown[]): any
```
- 在外部使用 as const 操作后，相应的类型会变为 readonly 的，所以 values 接收的时候，也需要加上 
readonly 修饰符
```ts
declare function PromiseAll(values: readonly unknown[]): any
-传入的 values 类型，后面也会用到，所以使用泛型 T 来表示
```ts
declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): any
```
- 返回值类型及对其数组便利处理
```ts
declare function PromiseAll<T extends unknown[]>(values: readonly [...T]):  
Promise<
  {
    [P in keyof T]: T[P]
  }
>
```
- 如果遍历的内容 T[P] 是 Promise 类型的话，则返回该 Promise 的入参类型
```ts
declare function PromiseAll<T extends unknown[]>(values: readonly [...T]):
Promise<
  {
    [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P]
  }
>
```
*/

declare function PromiseAll<T extends unknown[]>(values: readonly [...T]):
Promise<
  {
    [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P]
  }
>
