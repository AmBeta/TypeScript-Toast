var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Hello World of Generics
function identity(arg) {
    return arg;
}
var output = identity("myString"); // type of output will be 'string'
console.log(output.charAt(0));
// Generic Type Variables
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function identity_2(arg) {
    return arg;
}
var myIdentity = identity_2;
// Generic Classes
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
function loggingIdentity_2(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity_2({ length: 10, value: 3 });
// Using Type Parameters in Generic Constraints
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 10, d: 20 }); // okay
// copyFields(x, { q: 90 });    // error: property 'q' isn't declared in j'x.
// Using Class Types in Generics
function create(c) {
    return new c();
}
var BeeKeeper = (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        _super.apply(this, arguments);
    }
    return Bee;
}(Animal));
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        _super.apply(this, arguments);
    }
    return Lion;
}(Animal));
function findKeeper(a) {
    return a.prototype.keeper;
}
findKeeper(Lion).nametag; // typecheck pass
// findKeeper(Bee).nametag;    // typecheck fail 
