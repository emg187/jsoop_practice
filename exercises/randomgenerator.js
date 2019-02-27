

class RandomGenerator{
	constructor(min, max){ 
		if (typeof min === "undefined" || typeof max === "undefined"){
			this.min = 1;
			this.max = 10;
		} else {
			this.min = min;
			this.max = max;
		}
		this.random = null;
		//takes in the minimum and maximum values
		//if they are not defined, it sets the minimum to 1, and the max to 10
		//makes storage for the random number
	}
	generate(){
		this.random = Math.floor(Math.random()*(this.max+1))+this.min;
		//make a random value between the minimum and maximum values
		//and store the number into the storage from the constructor
	}
	getRange(){
		var obj = {
			min: this.min,
			max: this.max
		}
		return obj;
		//return an object with min and max, min being the minimum value for the generator, max being the maximum value
		//returns a basic object literal
	}
	getNum(){
		return this.random;
		//return the random number that was generated by generate()
	}
}