/* 
js 数组中 includes 的方法：判断参数2是否存在于参数1中，如果存在则返回 true，否则返回 false

遍历进行循环判断

题目解析：
这里进行了递归处理，使用extends进行判定取值 infer进行变量赋值，分离出来的first和U进行比较，相等返回true，否则再次进行递归进行判断

*/

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends readonly any[], U> =
  T extends [infer first, ...infer Rest] ?
  Equal<first, U> extends true ?
  true :
  Includes<Rest, U> :
  false
