/*
 * @Author: fg
 * @Date: 2022-05-23 10:13:26
 * @LastEditors: fg
 * @LastEditTime: 2022-05-23 11:09:50
 * @Description: 实现 Pick test-cases.ts
 */

import type { Equal, Expect } from '@type-challenges/utils'
import type { MyPick } from './template'

interface Todo {
  title: string,
  description: string,
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string,
  completed: boolean
}

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]
