/*
 * @Author: fg
 * @Date: 2022-05-17 11:35:58
 * @LastEditors: fg
 * @LastEditTime: 2022-05-23 11:36:25
 * @Description: 测试文件
 */
import type { Equal, Expect, NotAny } from '@type-challenges/utils'
import './template.ts'
/* eslint-disable */
type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]