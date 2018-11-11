/**
 * 在node中，每一个js代码都是独立运行在一个函数中，而不是在全局作用域中，所以一个模块中的函数和变量无法在其他模块中访问，
 * 此时需要使用exports向外部暴露相应的函数或变量。
 */

console.log('02 module');

let x = 0;

exports.y = '02_module y';