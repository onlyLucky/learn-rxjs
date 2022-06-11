/*
题目分析：
- 单个元素时，全排列
- 多个元素时，不考虑排列组合顺序
- 为never时，结果为空数组

代码实现


*/

type Permutation<T,U=T> = [T] extends [never]
?[]
: (T extends U
  ? [T, ...Permutation<Exclude<U, T>>]
  : [])
