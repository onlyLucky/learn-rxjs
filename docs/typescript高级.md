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
2. [装饰器](#装饰器)

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

6. Omit<Type,Keys>
   > 与 Pick 相反，移除掉 Type 类型中的 Keys 类型的属性，得到一个由剩余的属性组成一个新的类型

```js
type OmitDemo = Omit<PickEg, "name" | "interests">;
/* interface OmitDemo {
  age: number,
  gender: 1|2
} */
```

7. Exclude<UnionType,ExcludeMember>
   > 从联合类型 UnionType 中移除某些类型，得到一个新的类型

```ts
type ExcludeDemo = Exclude<"a" | "b" | "c", "c">;
//  type ExcludeDemo = 'a' | 'b'
```

8. Extract<Type,Union>
   > 提取出 Type 类型中的能符合 Union 联合类型的类型，得到一个新的类型。和&类似，连接两个类型

```ts
type A = Extract<"a" | "b" | ((x: string) => void), Function>;
//  type A = (x: string)=>void
type B = Extract<{ name: string; age: number }, string | { name: string }>;
// type B = {name: string,age: number}
type C = ({ name: string; age: number } & string) | { name: string };
// type C = {name: string, age: number}
```

9. NonNullable 非空类型
   > 移除 Type 类型中的 null 和 undefined，得到一个新类型

```ts
type haveNull = "a" | "b" | undefined;
type NonNullableDemo = NonNullable<haveNull>;
// 'a'|'b'
```

10. Parameters
    > 提取函数类型（或 any，never 等类型）中的参数，得到一个新的元组类型（或 never）

```ts
declare function fun(arg: { a: number; b: string }): void;
type ParametersDemo1 = Parameters<() => string>;
// ParametersDemo1 = []

type ParametersDemo2 = Parameters<(s: string) => void>;
// ParametersDemo2 = [s: string]

type ParametersDemo3 = Parameters<<T>(arg: T) => T>;
// ParametersDemo3 = [arg: unknown]

type ParametersDemo4 = Parameters<typeof fun>;
// ParametersDemo4 = [arg: {a:number;b:string}]

type ParametersDemo5 = Parameters<any>;
//  ParametersDemo5 = unknown[]

type ParametersDemo6 = Parameters<never>;
// ParametersDemo6 = never
```

11. ConstructorParameters
    > 提取构造函数中的所有参数，得到一个新的元组或数组类型（或 never）。

```ts
type ConstructorParameters1 = ConstructorParameters<ErrorConstructor>;
// ConstructorParameters1 = [message?:string]

type ConstructorParameters2 = ConstructorParameters<FunctionConstructor>;
// ConstructorParameters2 = string[]

type ConstructorParameters3 = ConstructorParameters<RegExpConstructor>;
// ConstructorParameters3 = [pattern:string | RegExp, flags?: string]
```

12. ReturnType
    > 得到一个有函数的返回值类型组成的新类型

```ts
declare function fun(): { a: number; b: string };
type ReturnTypeDemo1 = ReturnType<() => string>;
//  ReturnTypeDemo1 = string

type ReturnTypeDemo2 = ReturnType<(s: string) => void>;
// ReturnTypeDemo2 = void

type ReturnTypeDemo3 = ReturnType<<T>() => T>;
// ReturnTypeDemo3 = unknown

type ReturnTypeDemo4 = ReturnType<<T extends U, U extends number[]>() => T>;
// ReturnTypeDemo4 = number[]

type ReturnTypeDemo5 = ReturnType<typeof fun>;
// ReturnTypeDemo5 = {a: number; b: string}

type ReturnTypeDemo6 = ReturnType<any>;
// ReturnTypeDemo6 = any

type ReturnTypeDemo7 = ReturnType<never>;
// ReturnTypeDemo7 = never
```

13. InstanceType
    > 得到 Type 类型中的构造函数实例的类型

```ts
class ClassDemo {
  x = 0;
  y = 0;
}

type InstanceTypeDemo1 = InstanceType<typeof ClassDemo>;
// InstanceTypeDemo1 = ClassDemo

type InstanceTypeDemo2 = InstanceType<any>;
// InstanceTypeDemo2 = any

type InstanceTypeDemo3 = InstanceType<never>;
// InstanceTypeDemo3 = never
```

14. ThisParameterType
    > 得到函数类型 Type 中的 this 参数的类型，如果没有 this 参数，则为 unknown 类型。

```ts
function thisDemo(this: Number) {
  return this.toString(16);
}
type ThisParameterTypeDemo = ThisParameterType<typeof thisDemo>;
//  ThisParameterTypeDemo = Number
```

15. OmitThisParameter
    > 移除函数类型 Type 中的 this 参数，得到一个新的类型。如果没有 this 参数，则直接返回 Type 类型，如果有 this 参数，则返回一个移除了 this 参数的新的函数类型

```ts
function omitThisParameter(this: Number) {
  return this.toString(16);
}
const P: OmitThisParameter<typeof omitThisParameter> =
  omitThisParameter.bind(5);
```

16. ThisType
    > 不会返回新的类型，而是用于指定上下文中的 this 的类型为 Type。

```ts
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; //methods 中的this类型为 D & M
};
```

17. Uppercase
    > 将 string 字面量类型 全部转化为大写，得到一个新的类型；

```ts
type UpperStr = Uppercase<"a" | "b">;
// UpperStr = 'A' | 'B'
```

18. Lowercase
    > 将 string 字面量类型全部转化为小写，得到一个类型

```ts
type lowerStr = Lowercase<"A" | "B">;
//'a'|'b'
```

19. Capitalize
    > 将 string 字面量类型 首字母转化为大写，得到一个新的类型；

```ts
type capitalizeStr = Capitalize<"aa" | "bb">;
//  'Aa' | 'Bb'
```

20. Uncapitalize
    > 将 string 字面量类型 首字母转化为小写，得到一个新的类型；

```ts
type unCapitalizeStr = Uncapitalize<"Aa" | "Bb">;
// 'aa'|'bb'
```

## [装饰器](../ts-advanced/02_decorator.ts)

> 装饰器可以为类提供附加功能。在 JS 中，装饰器仍是第 2 阶段的提案，而在 TS 中，可作为一项实验性功能来使用，增强类的功能。

**启动装饰器**

由于装饰器是一项实验性功能，因此需要在命令行 或 tsconfig.json 配置文件中启用。

1. 命令行启动

这一步需要安装 tsc，typescript 环境，编辑时，加入--experimentalDecorators：

```shell
npx tsc --target ES5 --experimentalDecorators
```

2. 在 tsconfig.json 中启用

这里只需要更改配置文件即可：

```json
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
}
```

> 装饰器是一个函数，可以被附加到类的声明、方法、存取器、属性甚至参数上，从而提供附加功能。装饰器的形式为`@func`，其中 func 是一个函数。例如，我们给出一个`@sealed`装饰器，则应该有相应的 sealed 函数

### 1. 装饰器工厂

> 装饰器工厂时一个函数，其返回值是一个装饰器。我们可以调用装饰器工厂函数，来得到装饰器，即形式为`@ decoratorFactory( )` , 注意与直接写装饰器形式的区别。**装饰器形式无法手动传入参数，但是装饰器工厂可以**

装饰器工厂返回值的类型为装饰器类型，下面是 TS 内置提供：

- 类装饰器类型：ClassDecorator
- 方法装饰器类型： MethodDecorator
- 属性装饰器： PropertyDecorator
- 参数装饰器： ParameterDecorator

```ts
function classFactory(): ClassDecorator {
  return function (target) {};
}
```

### 2. 装饰器组合

> 多个装饰器可以组合使用，可以写在多行

下面为使用方式

```ts
// 单行
@a @b x
// 多行
@a
@b
x
```

> 装饰器的执行顺序是由内而外的，即内层装饰器函数先执行，再将得到的结果传给外层装饰器调用。但是如果我们用的是装饰器工厂，则**工厂函数会自上而下先执行，之后装饰器函数则下而上执行**。

### 3. 装饰器的执行顺序

- 参数装饰器，然后依次是方法装饰器，存取器装饰器，或属性装饰器应用到每个实例成员;
- 参数装饰器，然后依次是方法装饰器，存取器装饰器，或属性装饰器应用到每个静态成员;
- 参数装饰器应用到构造函数;
- 类装饰器应用到类;

### 4. 类装饰器

类装饰器是我们最常使用到的，它的通常作用是，为该类扩展功能

1. 类装饰器有且只有一个参数，参数为类的构造函数 constructor
2. 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明

> 如果**你要返回一个新的构造函数，你必须注意处理好原来的原型链**。 在运行时的装饰器调用逻辑中不会为你做这些。—— 官方文档

```ts
const getPositionDecorator: ClassDecorator = (constructor: Function) => {
  constructor.prototype.getPosition = () => {
    return [100, 200];
  };
};
const addPetrolDecorator: ClassDecorator = (constructor: Function) => {
  constructor.prototype.addPetrol = () => {
    console.log(constructor.name);
  };
};

@getPositionDecorator
@addPetrolDecorator
class BaseClass {
  constructor(pos: Object) {
    this.pos = pos;
  }
}
```

> 多个装饰器叠加的时候，执行顺序为离被装饰对象越近的装饰器越先执行。

**装饰器功能之——重载构造函数**

```ts
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class Greeter {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}
```

### 5.方法装饰器

方法装饰器接受三个参数：

1. 对于静态方法，第一个参数为类的构造函数。对于实例方法，为类的原型对象。
2. 第二个参数为方法名。
3. 第三个参数为方法描述符。
4. 方法装饰器可以有返回值，返回值会作为方法的属性描述符

装饰器功能之——能力增强
```ts
class FunctionGreeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message
  }
  @enumerable(false)
  greet() {
    return 'hello, ' + this.greeting
  }
}

function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDecorator) {
    console.log(target, propertyKey, descriptor)
    descriptor.enumerable = val
  }
}
```

### 6.存取器装饰器

> TS不允许同时装饰同一个成员的 get 和 set ，只能按照书写的顺序装饰最先出现的那一个，因为get和set结合起来，属于同一个属性描述符。

存取器装饰器带有三个参数

- 如果被装饰的是静态成员，则第一个参数为类的构造函数；如果被装饰的是实例成员，则第一个参数是实例成员的原型 prototype ；

- 该成员的名字；

- 该成员的属性描述符。

> 如果存取器装饰器有返回值，则该返回值被用作该成员的属性描述符；如果target设置的版本低于ES5，则返回值会被忽略，成员的属性描述符也为undefined。

```ts
class AccessorsDemo {
  // 属性
  constructor(public name: string, private _age: number) { }
  @configurable(false)
  get age() {
    return this._age
  }
}

function configurable(val: boolean) {
  return function (target: AccessorsDemo, key: string, desc: PropertyDescriptor) {
    console.log(key, target, desc)
    desc.configurable = val
  }
}
```
### 7.属性装饰器

属性装饰器声明于属性的声明之前，不能用在声明文件或其它上下文环境中

下面是属性装饰器函数参数：

- 如果是装饰静态属性，则第一个参数为构造函数；如果装饰实例属性，则第一个参数为实例的原型；
- 属性名；

> 属性装饰器**不支持属性描述符作为参数**，其**返回值也会被忽略**，因为属性是在实例成员身上，而不是在原型身上，目前的机制无法通过修改原型而影响到实例身上的属性

