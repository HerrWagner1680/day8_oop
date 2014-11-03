// Create an object called MULTIPLIER with two methods:
// MULTIPLY and GETCURRENTVALUE.   MULTIPLY should initially
// return the number supplied*1 and from then on whatever the
// current value is times the number supplied.
// GETCURRENTVALUE  should return the last answer returned from
// MULTIPLY.

//SOLUTION
function Multiplier() {
	this.currentValue = 1;
	this.multiply = function(value) {
		this.currentValue = this.currentValue * value;
		return this.currentValue
	}
	this.getCurrentValue = function() {
		return this.currentValue;
	}
}

var math = new Multiplier();

//SAMPLE ENTRIES
// math.getCurrentValue();
// >> 1

// math.multiply(5);
// >> 5

// math.getCurrentValue();
// >> 5

// math.multiply(5);
// >> 25
