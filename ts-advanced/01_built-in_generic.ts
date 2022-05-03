/*
 * @Author: fg
 * @Date: 2022-05-02 19:14:59
 * @LastEditors: fg
 * @LastEditTime: 2022-05-03 21:33:05
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

type ExcludeDemo = Exclude<'a'|'b'|'c','c'>
//  type ExcludeDemo = 'a' | 'b'

type A = Extract<'a'|'b'|((x: string)=>void),Function>
//  type A = (x: string)=>void
type B = Extract<{name: string,age: number},string|{name: string}>
// type B = {name: string,age: number}
type C = {name: string, age: number} & string | {name: string}
// type C = {name: string, age: number}

type haveNull = 'a'|'b'|undefined
type NonNullableDemo = NonNullable<haveNull>
// 'a'|'b'

declare function fun(arg: {a:number;b:string}):void;
type ParametersDemo1 = Parameters<()=>string>;
// ParametersDemo1 = []

type ParametersDemo2 = Parameters<(s: string)=>void>;
// ParametersDemo2 = [s: string]

type ParametersDemo3 = Parameters<<T>(arg: T)=>T>
// ParametersDemo3 = [arg: unknown]

type ParametersDemo4 = Parameters<typeof fun>
// ParametersDemo4 = [arg: {a:number;b:string}]

type ParametersDemo5 = Parameters<any>
//  ParametersDemo5 = unknown[]

type ParametersDemo6 = Parameters<never>
// ParametersDemo6 = never


type ConstructorParameters1 = ConstructorParameters<ErrorConstructor>
// ConstructorParameters1 = [message?:string]

type ConstructorParameters2 = ConstructorParameters<FunctionConstructor>
// ConstructorParameters2 = string[]

type ConstructorParameters3 = ConstructorParameters<RegExpConstructor>
// ConstructorParameters3 = [pattern:string | RegExp, flags?: string]


declare function fun ():{a: number; b: string}
type ReturnTypeDemo1 = ReturnType<()=>string>
//  ReturnTypeDemo1 = string

type ReturnTypeDemo2 = ReturnType<(s: string)=>void>
// ReturnTypeDemo2 = void

type ReturnTypeDemo3 = ReturnType<<T>()=>T>
// ReturnTypeDemo3 = unknown

type ReturnTypeDemo4 = ReturnType<<T extends U, U extends number[]>()=>T>
// ReturnTypeDemo4 = number[]

type ReturnTypeDemo5 = ReturnType<typeof fun>
// ReturnTypeDemo5 = {a: number; b: string}

type ReturnTypeDemo6 = ReturnType<any>
// ReturnTypeDemo6 = any

type ReturnTypeDemo7 = ReturnType<never>
// ReturnTypeDemo7 = never