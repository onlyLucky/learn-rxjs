<div align="center">
  <h1>learn-typescript</h1>
  <p>在rxjs学习的过程中，补充typescript类型编程学习及部分实践，大部分内容参考typescript中文文档</p>
  <a href="https://github.com/onlyLucky/learn-rxjs">
    <img src="https://s4.ax1x.com/2022/02/28/bu6BJx.png" alt="node">
  </a>
  <a href="https://github.com/onlyLucky/learn-rxjs">
    <img src="https://s4.ax1x.com/2022/02/28/bu6yQO.png" alt="npm">
  </a>
  <a href="https://github.com/onlyLucky/learn-rxjs">
    <img src="https://s4.ax1x.com/2022/02/28/bu6sSK.png" alt="build">
  </a>
  <a href="https://github.com/onlyLucky/learn-rxjs">
    <img src="https://s4.ax1x.com/2022/02/28/bu6DW6.png" alt="license">
  </a>
</div>

## 目录

1. [简介](#简介)
2. [基础类型](#基础类型)
3. [接口](#接口)

## 简介

> TypeScript 是 JavaScript 类型的超集，它可以编译成纯 JavaScript。

## [基础类型](../ts-learn/basic_type.ts)

- 布尔值
- 数字
- 字符串
- 元组
- 枚举
- any
- void
- null undefined
- never
- object
- 类型断言
  一般使用`<type>` 或者使用`as`

## [接口](../ts-learn/interface.ts)

> 对值所具有的结构进行类型检查,接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

- 对象类型

  规定某个对象的格式类型

  - 可选属性：

  ```js
  interface SquareConfig {
    color?: string;
    width?: number;
  }
  ```

  - 只读属性

  ```js
  interface Point {
    readonly x: number;
    readonly y: number;
  }
  ```

  **const 与 readonly：**

  > 该用 readonly 还是 const 的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用 readonly。

  - 额外的属性检查

  ```js
  interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
  }
  ```

- 函数类型

  > 接口能够描述 JavaScript 中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。

  函数参数列表里的每一个参数都需要名字和类型，以及返回值类型的约定

  ```js
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }
  ```

  - 可索引的类型

  ```js
  interface StringArray {
    [index: number]: string;
  }

  let myArray: StringArray;
  myArray = ["Bob", "Fred"];
  ```

- 类类型

  > 可以在接口中描述一个方法，在类里实现它。一个接口可以继承多个接口，创建出多个接口的合成接口

  - 继承接口

  ```js
  interface Shape {
    color: string;
  }

  interface Square extends Shape {
    sideLength: number;
  }
  ```

- 混合类型

  > 接口能够描述 JavaScript 里丰富的类型

  ```js
  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }
  function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
  }

  ```
