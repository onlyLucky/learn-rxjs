/* 
- 判断当前S传参左右是否存在空格
- 否则继续递归直至返回
*/

type Trim<S extends string> = S extends `${' '| '\n' | '\t'}${infer P}`|`${infer P}${' '| '\n' | '\t'}`?Trim<P>:S
