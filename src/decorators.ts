import "reflect-metadata";

// Class Decorators
@sealed
class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}
	greet() {
		return "Hello, " + this.greeting;
	}
}

function sealed(constructor: Function) {
	Object.seal(constructor);
	Object.seal(constructor.prototype);
}

// Method Decorators
class Greeter_2 {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}

	@enumerable(false)
	greet() {
		return "Hello, " + this.greeting;
	}
}

function enumerable(value: boolean) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		descriptor.enumerable = value;
	};
}

// Accessor Decorators
class Point {
	private _x: number;
	private _y: number;
	constructor(x: number, y: number) {
		this._x = x;
		this._y = y;
	}

	@configurable(false)
	get x() { return this._x; }

	@configurable(false)
	get y() { return this._y };
}

function configurable(value: boolean) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		descriptor.configurable = value;
	}
}

// Property Decorators

// Parameter Decorators
class GreeterB {
	greeting: string;

	constructor(message: string) {
		this.greeting = message;
	}

	@validate
	greet(@required name: string) {
		return "Hello " + name + ", " + this.greeting;
	}
}

const requiredMetadataKey = Symbol("required");

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
	
}