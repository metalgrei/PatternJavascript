/**
 * Example pattern Prototype
 */

// No need for capitalization as it's not a constructor
var someCar = {
	drive : function () {},
	name : 'Mazda 3'
};

// Use Object.create to generate a new car
var anotherCar = Object.create(someCar);
console.log(anotherCar.name);

var vehicle = {
	getModel : function () {
		console.log('The model of this vehicle is..' + this.model);
	}
};
var car = Object.create(vehicle, {
		'id' : {
			value : MY_GLOBAL.nextId(),
			enumerable : true // writable:false, configurable:false by default
		},
		'model' : {
			value : 'Ford',
			enumerable : true
		}
	});
console.log(car);