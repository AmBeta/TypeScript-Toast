// Hello World of Generics
function identity<T>(arg: T): T {
    return arg;
}

let output = identity("myString");    // type of output will be 'string'

console.log(output.charAt(0));

// Generic Type Variables
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

// Generic Types
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity_2<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity_2;

// Generic Classes
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };

// Generic Constraints
interface Lengthwise {
    length: number;
}

function loggingIdentity_2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity_2({ length: 10, value: 3 });

// Using Type Parameters in Generic Constraints
function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = source[id];
    }
    return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

copyFields(x, { b: 10, d: 20 });    // okay
// copyFields(x, { q: 90 });    // error: property 'q' isn't declared in j'x.

// Using Class Types in Generics
function create<T>(c: { new(): T; }): T {
    return new c();
}

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function findKeeper<A extends Animal, K>(a: {
    new(): A;
    prototype: { keeper: K }
}): K {
    return a.prototype.keeper;
}

findKeeper(Lion).nametag;    // typecheck pass
// findKeeper(Bee).nametag;    // typecheck fail