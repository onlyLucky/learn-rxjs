/*
实现内置的Exclude<T, U>

Exclude ：从第一个参数中剔除掉第二个参数存在的数据。

解题思路：
- 便利两个传参

type MyExclude<T, U> = T extends U ? A : B
假设 T = "a" | "b" | "c"，U = "a"

"a" 同 "a" 进行对比：如果匹配上，就返回 A ，否则返回 B
"b" 同 "a" 进行对比：如果匹配上，就返回 A ，否则返回 B
"c" 同 "a" 进行对比：如果匹配上，就返回 A ，否则返回 B
得到的结果就是 A B B。（第一个匹配上了，返回了 A）
如果循环的过程中匹配上的话，我们是不希望返回这个元素的，所以我们把 A 替换为 never ；把 B 替换为 T

知识点：
- union 类型是默认可以循环的："a" | "b"这种就是 union 类型

*/

type MyExclude<T, U> = T extends U ? never : T
type MyTemp<T, U> = T extends U ? T : U
