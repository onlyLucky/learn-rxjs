<div align="center">
  <h1>learn-rxjs</h1>
  <p>对rxjs响应式编程学习及部分实践</p>
  <p>鸽了那么久，总算想起来还有rxjs文档需要整理，嘿嘿嘿🕊️🕊️🕊️</p>
</div>

## 目录

- [目录](#目录)
- [背景](#背景)
  - [1. 回调地狱](#1-回调地狱)
  - [2.promise缺点](#2promise缺点)
- [简介](#简介)
  - [1. 典型写法](#1-典型写法)
  - [2. 简单创建器](#2-简单创建器)
- [提交规范](#提交规范)

## 背景

**其实 Rxjs 用来处理异步请求处理的**，就这么简单。javascript 是一种函数式编程，也是过程式的语言，我们日常的开发分为同步和异步处理的环境中，过程式和函数式在处理同步中，过程式编程更胜一筹。在异步处理 ajax 请求中，按部就班的过程处理显得不是很合理。函数式编程可以依据本身回调特性去处理，由此而诞生下面的大魔王。

### 1. 回调地狱

如果我们使用的异步请求多达好多个，由此下去就会发现是一个像楼梯的代码，维护起来成本很大，你或许可能想起一个叫 Promise 的中介，拯救这个无尽循环地狱。

promise原意是承诺许诺的意思，我们将所需要完成的事情交给promise这个老板，在处理完之后，他会告诉我们成功或失败了，我们在成功的时候进行一系列的操作，失败后进行错误处理。

promise更多使用细节就不在进行重复了，因为这些只是前菜。

### 2.promise缺点
对于那个楼梯一样的代码，promise已经有了很大的进步，但是在其他的异步场景中还是远远不够看的。比如下面的场景

> 如果你发起了一个 Ajax 请求，然后用户导航到了另一个路由，显然，你这个请求如果还没有完成就应该被取消，而不应该发出去。但是使用 Promise，你做不到。不是因为实现方面的原因，而是因为它在概念层（接口定义上）就无法支持取消。

很显然，promise这个中介只会关注我给你结果，你给他所需要处理过程，像驴子一样倔强，只要开始，直至返回结果

这时我们就需要一个更高级的 Promise。

下面列举一些异步处理演变过程,也算是前置知识

- Observable（观察模式）
- FRP（响应式编程）
- ReactiveX（FRP库）

下面就是Rxjs的出场了


## 简介

> RxJS 就是 ReactiveX 在 JavaScript 语言上的实现

<p><img style="max-height: 2em;"  src="https://s1.ax1x.com/2022/06/09/XsvseS.png"/><span style="font-size: 2em;color: #EC0C8E;margin-left:0.3em;">RxJS</span> 是 Reactive Extensions for JavaScript 的缩写，起源于 Reactive Extensions，是一个基于可观测数据流 Stream 结合观察者模式和迭代器模式的一种异步编程的应用库。RxJS 是 Reactive Extensions 在 JavaScript 上的实现。</p>


### 1. 典型写法
```js
of(1,2,3).pipe(  
  filter(item=>item % 2 === 1),  
  map(item=>item \* 3),  
).subscribe(item=> console.log(item))
```
其中 of 称为创建器（creator），用来创建流，它返回一个 Observable 类型的对象，filter 和 map 称为操作符（operator），用来对条目进行处理。这些操作符被当作 Observable 对象的 pipe 方法的参数传进去。诚然，这个写法略显怪异，不过这主要是被 js 的设计缺陷所迫，它已经是目前 js 体系下多种解决方案中相对好看的一种了。


Observable 对象的 subscribe 方法表示消费者要订阅这个流，当流中出现数据时，传给 subscribe 方法的回调函数就会被调用，并且把这个数据传进去。这个回调函数可能被调用很多次，取决于这个流中有多少条数据。

### 2. 简单创建器


## 提交规范

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `build` 对构建系统或者外部依赖项进行了修改
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中
