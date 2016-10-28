"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("reflect-metadata");
// Class Decorators
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter = __decorate([
        sealed, 
        __metadata('design:paramtypes', [String])
    ], Greeter);
    return Greeter;
}());
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
// Method Decorators
var Greeter_2 = (function () {
    function Greeter_2(message) {
        this.greeting = message;
    }
    Greeter_2.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    __decorate([
        enumerable(false), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Greeter_2.prototype, "greet", null);
    return Greeter_2;
}());
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
// Accessor Decorators
var Point = (function () {
    function Point(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () { return this._x; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () { return this._y; },
        enumerable: true,
        configurable: true
    });
    ;
    __decorate([
        configurable(false), 
        __metadata('design:type', Object)
    ], Point.prototype, "x", null);
    __decorate([
        configurable(false), 
        __metadata('design:type', Object)
    ], Point.prototype, "y", null);
    return Point;
}());
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
// Property Decorators
// Parameter Decorators
// Metadata
var PointMeta = (function () {
    function PointMeta() {
    }
    return PointMeta;
}());
var LineMeta = (function () {
    function LineMeta() {
    }
    Object.defineProperty(LineMeta.prototype, "p0", {
        get: function () {
            return this._p0;
        },
        set: function (value) {
            this._p0 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineMeta.prototype, "p1", {
        get: function () {
            return this._p1;
        },
        set: function (value) {
            this._p1 = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        validate, 
        __metadata('design:type', Point), 
        __metadata('design:paramtypes', [Point])
    ], LineMeta.prototype, "p0", null);
    __decorate([
        validate, 
        __metadata('design:type', Point), 
        __metadata('design:paramtypes', [Point])
    ], LineMeta.prototype, "p1", null);
    return LineMeta;
}());
function validate(target, propertyKey, descriptor) {
    var set = descriptor.set;
    descriptor.set = function (value) {
        var type = Reflect.getMetadata("design:type", target, propertyKey);
        if (!(value instanceof type)) {
            throw new TypeError("Invalid type.");
        }
    };
}
