<div align="center">
  <h1>typescript高级使用方式</h1>
  <p>你想要的typescript高级使用姿势，我们都需要懂</p>
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

1. [内置泛型接口](#内置泛型接口)

## [内置泛型接口]()

1. Partial 可选类型接口

> 通过 Partial 可以通过将传入的类型的所有属性变为可选属性，从而得到一个新的类型。

```js
interface Person {
  name: string;
  age: number;
}
type PartialPerson = Partial<Person>;
```
