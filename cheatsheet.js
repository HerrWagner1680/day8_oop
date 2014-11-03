// Creating objects using

// --object literal
var real_world {
	residents: "people",
	number: 9000000000
	personality_types: 209
}


// --constructor function
function Car(brand,wheels) {
	this.brand = brand;
	this.wheels = wheels
}
// Creating instances of objects
// Instantiating a new Car object
var my_car = new Car ("toyota", 4): 

// accessing object attributes and methods
my_car.brand //dot notation
//dot notation will not accept hyphen in variable name
my_car["brand"]  //square-bracket notation

//-prototypical objects
//adding to existing objects
//It extends a JS object
Car.prototype.windows = "3"
//adds a value of 3 to new category of windows 
//within Car


//To GET the value of a property in an object, run:
// >> object_name.property_name;
//To SET the value of a property in an object, run:
// >> object_name.property_name = "some value";

// multiple arrays within... the format is
 var multi_arrays ={
	arrays: [2, 3, [3,5]]
	"has-leather"= false
}
