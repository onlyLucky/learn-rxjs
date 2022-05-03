/*
 * @Author: fg
 * @Date: 2022-05-02 19:14:59
 * @LastEditors: fg
 * @LastEditTime: 2022-05-03 15:21:17
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

// Pick
interface PickEg {
  name: string,
  age: number, 
  gender: 1|2，
  interests: string[]
}

type PickedDemo = Pick<PickEg,'name'| 'interests'>
/* interface PickedDemo {
  name: string,
  interests: string[]
} */

type OmitDemo = Omit<PickEg,'name'| 'interests'>
/* interface OmitDemo {
  age: number,
  gender: 1|2
} */