/**
 * Example pattern Command
 */
	())
=======
 (function(){
	'use strict';
	var CarManager = {
		// request information
		requestInfo:function(model, id){
			return 'The information for ' + model +
			' with ID ' + id + ' is foobar';
		},
		//purchase the car
		buyVehicle:function(model, id){
			return 'You have successfully purchased Item ' 
			+ id + ' , a ' + model;
		},
		arrangeViewing:function(model, id){
			return 'You have successfully booked a viewing of '
			+ model + ' ( ' + id + ' ) ';
		}
	};
	
	CarManager.execute = function (name) {
		return CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1));
	};
	
	CarManager.execute("buyVehicle", "Ford Escort", "453543");
	
}());
