var myRevealingModule = (function () {
	'use strict';
	var name = 'John Smith', age = 40;
	function updatePerson() {
		name = 'John Smith Updated';
	}
	function setPerson() {
		name = 'John Smith Set';
	}
	function getPerson() {
		return name;
	}
	return {
		set : setPerson,
		get : getPerson
	};
}
	());
// Sample usage:
myRevealingModule.get();
