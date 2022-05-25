/*
Promise<ExampleType>返回 ExampleType
- 仅条件类型的 "extends" 子句中才允许 "infer" 声明。

如果Promise<Promise<string | number>>返回的是Promise<string | number>
这不是我们所想要的，看样子需要递归处理
*/
type MyAwaited<T extends Promise<any>> = T extends Promise<infer P> ? P extends Promise<any> ? MyAwaited<P> : P : T

