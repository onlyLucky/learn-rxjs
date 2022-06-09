/*
解题思路：
- 将Fn函数的参数返回值解析出来
- 判断当前能不能结构出来参数和返回值，不能的话就直接返回Fn，否则就将参数A塞到函数中
*/

type AppendArgument<Fn, A> = Fn extends (...args: infer Args) => infer R
  ? (...args: [...Args, A]) => R
  : Fn
