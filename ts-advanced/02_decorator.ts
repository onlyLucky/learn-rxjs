/*
 * @Author: fg
 * @Date: 2022-05-03 23:51:44
 * @LastEditors: fg
 * @LastEditTime: 2022-05-17 09:59:20
 * @Description: 装饰器
 */

/* function classFactory (): ClassDecorator {
  return function (target) {

  }
}

// 单行
@a @b x
// 多行
@a
@b
x


function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
} */
// 会先执行first工厂函数、second工厂函数，
// 再执行second工厂返回的装饰器、first工厂返回的装饰器函数
// 因此，打印顺序为：
// 'first(): factory evaluated'
// 'second(): factory evaluated'
// 'second(): called'
// 'first(): called'

const getPositionDecorator: ClassDecorator = (constructor: Function) => {
  console.log(constructor.prototype, 'constructor')
  constructor.prototype.getPosition = () => {
    return [100, 200]
  }
}
const addPetrolDecorator: ClassDecorator = (constructor: Function) => {
  constructor.prototype.addPetrol = () => {
    console.log(constructor.name)
  }
}

@getPositionDecorator
@addPetrolDecorator
class BaseClass {
  pos: {}
  constructor(pos: Object) {
    this.pos = pos
  }
}

function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  }
}

@classDecorator
class Greeter {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
    this.test = 123
  }
}

let greeterDemo = new Greeter('test')
console.log(greeterDemo)


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