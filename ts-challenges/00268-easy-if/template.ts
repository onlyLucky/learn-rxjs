/*
观察题目
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'

我们可以使用extends进行类型约束及判断
*/

type If<C extends boolean, T, F> = C extends true ? T : F
