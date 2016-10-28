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

// Metadata
class PointMeta {
	x: number;
	y: number;
}

class LineMeta {
	private _p0: Point;
	private _p1: Point;

	@validate
	set p0(value: Point) {
		this._p0 = value;
	}
	get p0() {
		return this._p0;
	}

	@validate
	set p1(value: Point) {
		this._p1 = value;
	}
	get p1() {
		return this._p1;
	}
}

function validate<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
	let set = descriptor.set;
	descriptor.set = function (value: T) {
		let type = Reflect.getMetadata("design:type", target, propertyKey);
		if (!(value instanceof type)) {
			throw new TypeError("Invalid type.");
		}
	}
}
