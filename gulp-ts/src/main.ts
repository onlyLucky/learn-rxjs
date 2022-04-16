/*
 * @Author: fg
 * @Date: 2022-04-16 20:49:39
 * @LastEditors: fg
 * @LastEditTime: 2022-04-16 22:56:53
 * @Description: gulp
 */

import { sayHello } from './greet'
function hello (compiler: string) {
  console.log(`hello from ${compiler}`)
}

hello('typescript')

console.log(sayHello('TypeScript'))
