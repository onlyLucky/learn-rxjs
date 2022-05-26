/*
concat 合并

观察测试案例可得：
Concat 接收两个参数，并且都是 any 类型的数组
得到的结果是两个参数数组合并成的一个数组，并且顺序和参数传入顺序一致
*/

type Concat<T extends any[], U extends any[]> = [...T,...U]
