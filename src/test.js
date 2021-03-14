var a = 3 + 4;
console.log(a);
// So weird, a type can be a single number! :D
var f = 26.5;
console.log(f.toExponential());
// Same for strings!
var s = 'saisai';
console.log(s.indexOf('s'));
// ...aaaaanddd for objects
var o = { a: 4 };
console.log(o.a);
// object, {} are equivalent
// let o1 : {} = {a: 4, b: 5}
// This wont work: console.log(o1.a), cuz you also need explicit types on properties
var o1 = { a: 4, b: 5 };
// but this will work
console.log(o1.a);
// Object includes ALL objects cuz its the JS Object type lmao, while the TS `object` includes only non-primitives
var o2 = 4;
console.log(o2);
