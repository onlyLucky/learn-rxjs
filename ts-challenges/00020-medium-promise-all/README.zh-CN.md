<!--info-header-start--><h1>Promise.all <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/> <img src="https://img.shields.io/badge/-%23built--in-999" alt="#built-in"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/20/play/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-3178c6?logo=typescript&logoColor=white" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> 由谷歌自动翻译，欢迎 PR 改进翻译质量。

键入函数`PromiseAll`，它接受PromiseLike对象数组，返回值应为`Promise<T>`，其中`T`是解析的结果数组。

```ts
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = Promise.all([promise1, promise2, promise3] as const)
```

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://tsch.js.org/20/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://tsch.js.org/20/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->


### 题目解析
- [1, 2, 3] as const 会将 [1, 2, 3]作为具体的类型传入 PromiseAll，期望值是 Promise<[1, 2, 3]>，说明只需要简单的遍历并输出即可
- 第三个参数是一个 Promise 类型，这个 Promise 类型中传入的数值 3。同时，期望的值在该位置变为 number，也就是数值 3 的类型（如果传入的数组中有 Promise 类型，则返回值相应的位置会输出对应 Promise 中接收的类型）
- 没有使用 as const，则期望的结果对应位置全部是相应值的类型

### 解题思路

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