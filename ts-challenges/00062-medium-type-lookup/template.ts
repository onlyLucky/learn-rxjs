/*
题目分析：
想通过在联合Cat | Dog中搜索公共type字段来获取相应的类型

解题思路：

- 进行传参类型约束
- 返回值进行类型约束

*/

type LookUp<U extends { type: string }, T extends string> = U extends { type: T } ? U : never
