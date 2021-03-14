let a: number = 3+4;
console.log(a)
// So weird, a type can be a single number! :D
let f: 26.5 = 26.5
console.log(f.toExponential())
// Same for strings!
let s: 'saisai' = 'saisai'
console.log(s.indexOf('s'))
// ...aaaaanddd for objects
let o : { a: 4 } = {a: 4}
console.log(o.a)
// object, {} are equivalent
// let o1 : {} = {a: 4, b: 5}
// This wont work: console.log(o1.a), cuz you also need explicit types on properties
let o1 : {a: number, b: number} = {a: 4, b: 5}
// but this will work
console.log(o1.a)

// Object includes ALL objects cuz its the JS Object type lmao, while the TS `object` includes only non-primitives
let o2: Object = 4
console.log(o2)

// let dog = {
//     foo: () => { console.log('oooff') },
//     bark: () => { console.log('bowbow') }
// };
//
// dog.foo();=
//
// dog.bark();


type Sai = {

}