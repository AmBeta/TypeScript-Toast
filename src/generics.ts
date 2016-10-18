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