/*
 * @Author: fg
 * @Date: 2022-04-18 18:19:20
 * @LastEditors: fg
 * @LastEditTime: 2022-04-19 10:43:47
 * @Description: 接口
 */

// 简单的接口使用

interface LabelledValue{
  label: string
}

function printLabel (labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}

const myObj = {
  size: 10,
  label: 'size'
}
myObj.label = 'length'
printLabel(myObj)

// 可选属性

// eslint-disable-next-line
interface SquareConfig {
  color?: string;
  width?: number;
}

// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

// 额外的属性检查
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

// 函数类型的接口
interface SearchFun{
  (source: string,subString: string): boolean;
}

// 可索引的类型
interface StringArray {
  [index: number]: string;
}

// 类类型
interface ClockInterface{
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date){
    this.currentTime = d;
  }
  constructor(h: number, m: number){}
}

// 类静态部分与实例部分
interface ClockConstructor {
  new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
  currentTime: Date;
  constructor(h: number, m: number) { }
}

interface ClockInterface{
  tick();
}
function createClock(ctor: ClockConstructor, hour: number, minute: number):ClockInterface{
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface{
  constructor(h: number,m: number){}
  tick() {
    console.log('beep beep')
  }
}

class AnalogClock implements ClockInterface{
  constructor(h: number, m: number){}
  tick() {
    console.log('tick tick')
  }
}
let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)


// 继承接口
interface Shape {
  color: string;
}
interface Square extends Shape{
  sideLength: number;
}

let square = <Square>{}
square.color = 'blue'
square.sideLength = 10
square.penWidth = 5

// 混合类型
interface Counter{
  {start: number}: string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter{
  let counter = <Counter>function (start: number){}
  counter.interval = 123
  counter.reset = function(){}
  return counter
}
let c = getCounter()
c(10)
c.reset()
c.interval = 5

// 接口继承类
class Control{
  private state: any;
}
interface SelectableControl extends Control {
  select():void;
}
class Button extends Control implements SelectableControl{
  select(): void {
    
  }
}
class TextBox extends Control {
  
}