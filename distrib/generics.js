// Hello World of Generics
function identity(arg) {
    return arg;
}
let output = identity("myString"); // type of output will be 'string'
console.log(output.charAt(0));
// Generic Type Variables
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function identity_2(arg) {
    return arg;
}
let myIdentity = identity_2;
// Generic Classes
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
function loggingIdentity_2(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity_2({ length: 10, value: 3 });
// Using Type Parameters in Generic Constraints
function copyFields(target, source) {
    for (let id in source) {
        target[id] = source[id];
    }
    return target;
}
let x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 10, d: 20 }); // okay
// copyFields(x, { q: 90 });    // error: property 'q' isn't declared in j'x.
// Using Class Types in Generics
function create(c) {
    return new c();
}
class BeeKeeper {
}
class ZooKeeper {
}
class Animal {
}
class Bee extends Animal {
}
class Lion extends Animal {
}
function findKeeper(a) {
    return a.prototype.keeper;
}
findKeeper(Lion).nametag; // typecheck pass
// findKeeper(Bee).nametag;    // typecheck fail 
