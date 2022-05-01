/*
 * @Author: fg
 * @Date: 2022-05-01 05:24:58
 * @LastEditors: fg
 * @LastEditTime: 2022-05-01 08:00:24
 * @Description: 泛型
 */

function identity<T> (arg: T): T {
  return arg
}

const output = identity<string>('myString')

function loggingIdentity<T> (arg: T[]): T[] {
  console.log(arg.length) // Array has a .length, so no more error
  return arg
}

// arg: Array<T>
class GenericNumber <T> {
  zeroValue: T;
  add: (x: T, y: T)=>T
}

// 泛型约束
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length);  // Error: T doesn't have .length
  return arg;
}

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}
//  泛型约束使用类型参数
function getProperty(obj: TemplateStringsArray,key: K){
  return obj[key]
}
let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.


function create<T>(c: {new(): T; }): T {
  return new c();
}

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nameTag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nameTag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!