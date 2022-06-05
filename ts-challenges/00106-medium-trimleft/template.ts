/* 
题目分析：也就是清空左侧的空格

题目解析：
- 首先确保入参类型为字符串类型
- 空格符需要清除的有三种" "(空格符)、"\n"(换行符)、"\t"(制表符)

*/

type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer Rest}` ? TrimLeft<Rest> : S
