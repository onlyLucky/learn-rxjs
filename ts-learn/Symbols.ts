/*
 * @Author: fg
 * @Date: 2022-05-02 18:42:15
 * @LastEditors: fg
 * @LastEditTime: 2022-05-02 18:58:59
 * @Description: Symbols 类型
 */
const sym2 = Symbol('key')
const sym3 = Symbol('key')

sym2 === sym3 // false, symbols是唯一的

const sym = Symbol()

let obj = {
  [sym]: 'value'
}

console.log(obj[sym]) // "value"
