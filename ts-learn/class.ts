/*
 * @Author: fg
 * @Date: 2022-04-20 19:40:40
 * @LastEditors: fg
 * @LastEditTime: 2022-04-24 16:31:46
 * @Description: 类
 */

// 类

class Greeter {
  greeting: string;
  constructor (message: string) {
    this.greeting = message
  }

  greet () {
    return 'hello, ' + this.greeting
  }
}
const greeter = new Greeter('world')

// 继承
class Animal {
  move (distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`)
  }
}

class Dog extends Animal {
  bark () {
    console.log('Woof! Woof!')
  }
}

class Horse extends Animal {
  constructor (name: string) { super(name) }
  move (distanceInMeters = 45) {
    console.log('Galloping...')
    super.move(distanceInMeters)
  }
}

const dog = new Dog()


// 存取器

let passcode = "secret passcode"
class Employee{
  private _fullName: string
  get fullName():string{
    return this._fullName
  }
  set fullName(newName: string){
    if(passcode && passcode == 'secret passcode'){
      this._fullName = newName
    }else{
      console.log('Error: Unauthorized update of employee!')
    }
  }
}

let employee = new Employee()
employee.fullName = 'Bob Smith'
if(employee.fullName){
  alert(employee.fullName)
}

// 静态属性
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

// abstract

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

