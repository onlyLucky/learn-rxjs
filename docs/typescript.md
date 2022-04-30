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

### 存取器

> TypeScript 支持通过 getters/setters 来截取对对象成员的访问

```js
let passcode = "secret passcode";

class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    }
    else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  alert(employee.fullName);
}

```

> 只带有 get 不带有 set 的存取器自动被推断为 readonly
>
> 利用这个属性的用户会看到不允许够改变它的值

### 静态属性

> 创建类的静态成员，这些属性存在于类本身上面而不是类的实例上

```js
class Grid {
  static origin = {x: 0, y: 0}
  calculateDistanceFromOrigin(point: {x: number; y: number;}){
    let xDist = (point.x - Grid.origin.x)
    let yDist = (point.y - Grid.origin.y)
    return Math.sqrt(xDist*xDist + yDist*yDist)/this.scale
  }
  constructor(public scale: number){}
}
let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}))
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}))

```

### 抽象类

> 不同于接口，抽象类可以包含成员的实现细节。 abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法

```js
abstract class Department{
  constructor(public name: string){}
  printName():void{
    console.log('Department name: '+this.name)
  }
  abstract printMeeting(): void// 必须在派生类中实现
}

class AccountingDepartment extends Department{
  constructor(){
    super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
  }
  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}
```

### 类作为接口使用

> 类可以创建出类型，所以你能够在允许使用接口的地方使用类

```js
class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}
```

## [函数](../ts-learn/function.ts)

函数大体上包括有名字的函数以及匿名函数，其中我们还要留意传参的作用域；在 typescript 中我们需要为函数的参数和返回值进行类型

```js
function add(x: number, y: number): number {
  return x + y;
}

const myAdd: (x: number, y: number) => number = function (x, y) {
  return x + y;
};
```

- 可选参&默认传参&剩余参数

```js
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}

function buildNameDefault(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

function buildName1(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName1("Joseph", "Samuel", "Lucas", "MacKinzie");
```

- this 箭头函数

如果没有规定好 this 指向，他的值只会是 any

```js
interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number;
  createCardPicker(this: Deck): () => Card;
}
const deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function (this: Deck) {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52);
      const pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};
```

> this 参数在回调函数里

```js
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}
```

> 函数重载 传递不同参数执行不同的
