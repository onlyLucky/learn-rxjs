/*
 * @Author: fg
 * @Date: 2022-05-02 19:14:59
 * @LastEditors: fg
 * @LastEditTime: 2022-05-02 20:00:10
 * @Description: ts内置泛型接口
 */
// Partial

interface Person {
  name: string,
  age: number
}
type PartialPerson = Partial<Person>

// 其实相当于
/*
 interface PartialPerson = {
   name?: string,
   age?: number
 }
*/

// Required 
interface Person{
  name?: string,
  age?: number
}

type RequiredPerson = Required<Person>

// Readonly
type ReadonlyPerson = Readonly<Person>


// Record
type Partners = 'a'| 'b' | 'c'
type RecordInfo = Record<Partners,Person>

/* interface RecordInfo = {
  a: {name: string, age: number},
  b: {name: string, age: number},
  c: {name: string, age: number}
}  */