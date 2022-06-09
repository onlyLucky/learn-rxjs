
/* 

题目解析
- 拿到首字母
- 利用Uppercase将分离出来的首字母转化为大写

*/
// 这里分割两部分，如果只有一个字母i的话，F为i，O为''
type MyCapitalizeCase<S extends string> = S extends `${infer F}${infer O}` ? `${O}` : S

type MyCapitalize<S extends string> = S extends `${infer F}${infer O}`?`${Uppercase<F>}${O}`:S
