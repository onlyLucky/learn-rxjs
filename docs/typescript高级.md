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

## [内置泛型接口](../ts-advanced/01_built-in_generic.ts)

讲一些自己的接口，添加不同类型的内置泛型，便利处理接口功能

1. Partial 可选类型接口

> 通过 Partial 可以通过将传入的类型的所有属性变为可选属性，从而得到一个新的类型。

```js
interface Person {
  name: string;
  age: number;
}
type PartialPerson = Partial<Person>;
```

2. Required 必须类型接口
   > 与 Partial 相反，Required 把传入的类型 T 的所有属性都变为必需的，得到一个新的类型。

```js
interface Person {
  name?: string;
  age?: number;
}

type RequiredPerson = Required<Person>;
```

3. Readonly 只读类型接口
   > 将传入的类型的所有属性都变为只读属性，得到一个新的类型

```js
type ReadonlyPerson = Readonly<Person>;
```

4. Record<key, Type>
   > 创建一个 key 为 Key 类型、value 为 Type 类型的对象类型

```js
interface Person {
  name: string;
  age: number;
}
type Partners = "a" | "b" | "c";
type RecordInfo = Record<Partners, Person>;
/* interface RecordInfo = {
  a: {name: string, age: number},
  b: {name: string, age: number},
  c: {name: string, age: number}
}  */
```

5. Pick<Type,Keys>
   > 挑选出 Type 类型中的 Keys 类型的属性，得到一个新的类型。一般来说，Keys 为联合类型

```ts
interface PickEg {
  name: string,
  age: number,
  gender: 1|2，
  interests: string[]
}

type PickedDemo = Pick<PickEg,'name'| 'interests'>
/* interface PickedDemo {
  name: string,
  interests: string[]
} */
```
