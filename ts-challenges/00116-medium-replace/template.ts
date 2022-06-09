/* 
解题思路
- 判断当前传值From的值是否为空，如果为空，直接返回S
- 否则判断当前S之中是否存在From，将左右两侧的字符串进行infer命名
- 进行替换，或者直接返回S

*/

type Replace<S extends string, From extends string, To extends string> = From extends ''
? S
: S extends `${infer L}${From}${infer R}`?`${L}${To}${R}`:S
