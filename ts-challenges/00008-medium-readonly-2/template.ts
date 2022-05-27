/*
指定对象中的某些key为readonly

type MyReadonly2<T, K extends keyof any> = {
  readonly [P in keyof T as P extends K ? P : never]: T[P]
}
这一步我们是将readonly 字段进行

type MyOmit = Omit<T, K>

type co = {
  completed: boolean;
}

我们将两者进行拼接 & 类型合并（火并）

type MyReadonly2<T, K extends keyof any> = {
  readonly [P in keyof T as P extends K ? P : never]: T[P]
}& Omit<T, K>

K 的默认值

如果没有传入参数2，则 MyReadonly2 需要和 Readonly 同样的效果，即将全部内容转换为 readonly 的
这里，我们给参数2一个默认值来实现这个效果。
根据上面的代码实现，K 的默认值应该和 T 相等，这样才能将 T 中的全部内容进行转换
<T, K extends keyof any = keyof T>
*/

type MyReadonly2<T, K extends keyof any = keyof T> = {
  readonly [P in keyof T as P extends K ? P : never]: T[P]
} & Omit<T, K>

type MyOmit = Omit<T, K>
/* 
type co = {
  completed: boolean;
}
*/