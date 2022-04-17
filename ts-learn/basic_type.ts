/*
 * @Author: fg
 * @Date: 2022-04-17 15:07:31
 * @LastEditors: fg
 * @LastEditTime: 2022-04-17 21:23:46
 * @Description: 基础类型
 */

// 布尔值
const isDone: boolean = false

// 数字
const decLiteral: number = 6
const hexLiteral: number = 0xf00d
const binaryLiteral: number = 0b1010
const octalLiteral: number = 0o744

// 字符串
let name: string = 'bob'
name = 'smith'

// 数组
const list: number[] = [1, 2, 3]
const list1: Array<number> = [1, 2, 3]

// 元组
let x: [string, number]
x = ['hello', 12]

// 枚举
enum Color {Red, Green, Blue}
const c: Color = Color.Green

// any
const notSure: any = 4

// void
function warnUser (): void {
  console.log('this is my warning message')
}
const unusable: void = undefined

// Null undefined
const u: undefined = undefined
const n: null = null

// never 永远不会返回数据的值
// 返回never的函数必须存在无法达到的终点
function error (message: string): never {
  throw new Error(message)
}

// 推断的返回值类型为never
function fail () {
  return error('Something failed')
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop (): never {
  while (true) {
  }
}

// object
declare function create(o: object | null): void;
create({ prop: 0 })
create(null)

// 类型断言
const someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length;
// let strLength: number = (someValue as string).length;
