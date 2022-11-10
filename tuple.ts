
const tuple = <T extends any[]>(...args: T): T => args

let d = tuple("hello", 1, true);

console.log(d);
