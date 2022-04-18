/*
 * @Author: fg
 * @Date: 2022-04-18 18:19:20
 * @LastEditors: fg
 * @LastEditTime: 2022-04-18 19:01:24
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

class Clock implements 