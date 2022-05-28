/*
深度 Readonly

题目解析：

这是一个深层递归对象，将每个key添加只读属性

解题思路：
我们可以借助Record（Record 可以将K中的类型都转化为T）
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
接下来就进行递归处理，判断当前是否为object

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object
  	? DeepReadonly<T[P]>
  	: T[P]
}

考虑到如果是函数的话，直接返回函数，这里不能extends object, 因为函数也是object

*/

type DeepReadonly<T> = T extends Function ? T : {
  readonly [P in keyof T]: DeepReadonly<T[P]>
} 
