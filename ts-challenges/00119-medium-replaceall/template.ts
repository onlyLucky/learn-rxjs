/* 

解题思路

- 可以利用刚才Replace实现进行递归处理
- 根据测试案例得，替换后的字符串位置，不能再次进行匹配替换


*/

type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
? S
: S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${ReplaceAll<R,From,To>}`
  : S