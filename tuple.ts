
const tuple = <T extends any[]>(...args: T): T => args

let d = tuple("hello", 1, true);

let testTuple: readonly [string, number, boolean] = ['Age', 24, true] 

console.log(d);
