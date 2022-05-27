/*
获取函数params
ts中类型约束可以作为if判断处理
infer可以作为变量命名用于extends后面使用

解题思路
判断当前传参是否为Function，如果是的话返回infer P 否则返回never
*/
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P)=>any?P:never
