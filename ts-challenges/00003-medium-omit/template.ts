/*
Omit 实现
Omit 会创建一个省略 K 中字段的 T 对象

观察题目得：
1.T为一个object，K可以为联合类型
2.K 不能不在T里面

题目解析：
- 限制 K 的类型 必须要在T中的
- 进行遍历 进行类型断言 限制P和T一样的话不返回

下面是ts中Omit实现的过程：
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

Pick 相当于遍历的作用

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
}

Exclude<T, K>，它的作用就是去除 T 中的 K 项

整体思路：
先把 T 中的 K 都给去除掉（假设去除后的内容为 U）
再对 U 进行遍历
*/

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
