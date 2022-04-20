/*
 * @Author: fg
 * @Date: 2022-04-20 19:40:40
 * @LastEditors: fg
 * @LastEditTime: 2022-04-20 19:54:46
 * @Description: 类
 */

// 类

class Greeter{
  greeting: string;
  constructor(message: string){
    this.greeting = message
  }
  greet(){
    return "hello, "+this.greeting
  }
}
let greeter = new Greeter('world')

// 继承
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

class Horse extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

const dog = new Dog();