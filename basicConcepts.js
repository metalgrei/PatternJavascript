/**
 * basicConcepts
 */
 
function myFunction() {
  console.log(this.name);
}

var objectA = {
  name: "Alice",
  myMethod: myFunction
};

var objectB = {
  name: "Bob",
  myMethod: myFunction
};

/**
*	El objeto this pasado a una función es el objeto que está antes del punto que precede los paréntesis que invocan a la función.
*/

console.log(objectA.myMethod());

console.log(objectB.myMethod());

function testScope() {
  console.log(this);
}
testScope();

var alice = {
  nombre: "Alice",
  saludar: function(amigo1, amigo2) {
    alert("Hola " + amigo1 + " y " + amigo2 + ", yo soy " + this.nombre);
  }
};
var myFunction = alice.saludar;
myFunction.call(alice, "Bob", "Rob");

myFunction.apply(alice, [ "Bob", "Rob" ]);