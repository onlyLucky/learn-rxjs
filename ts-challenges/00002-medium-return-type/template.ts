
/*

返回return数据类型

观察题目可以得到：
- 返回类型为return的类型
- 如果为判断语句，会返回一个联合类型 a|b

解题思路：
这里还是同上一个一样使用 extends进行类型约束判断，infer进行变量命名，只不过这次命名的是返回值的类型

*/

type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer P ? P : any
