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