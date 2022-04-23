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
4. [类](#类)

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

## [类](../ts-learn/class.ts)

> ECMAScript 6 开始，JavaScript 程序员将能够使用基于类的面向对象的方式。

```js
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "hello, " + this.greeting;
  }
}
let greeter = new Greeter("world");
```

### 继承

> 基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类

```js
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
```

> 我们使用 extends 关键字创建了 Animal 的两个子类

下面是 Horse 类继承 Animal 进行 move 方法的重写的操作

```js
class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}
```

### 公共，私有与受保护的修饰符

- public

  > 在 TypeScript 里，成员都默认为 public

  ```js
  class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }
  ```

- private

  > 成员被标记成 private 时，它就不能在声明它的类的外部访问,在外部衍生子类不可使用

  ```js
  class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
  }
  ```

- protected

  > protected 成员在派生类中仍然可以访问

  ```js
  class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
  }
  ```

- readonly 修饰符

  > 使用 readonly 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

  ```js
  class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
  }
  ```

  > 参数属性可以方便地让我们在一个地方定义并初始化一个成员

  ```js
  class Animal {
    constructor(private name: string) { }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }
  ```
