


type Pop<T extends any[]> = T extends [...infer Val, infer Laster] ? Val : never
