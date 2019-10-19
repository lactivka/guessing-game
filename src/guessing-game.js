class GuessingGame {
    constructor() {
         
    }
    
    setRange(min, max) { // constructor with properties min and max
        this.min = min;
        this.max = max;   
    }

    guess() {
        this.middle = Math.ceil((this.max + this.min)/2); // average value of min and max
        return this.middle;
    }

    lower() {
      this.setRange(this.min, this.middle); // if average value is greater than answer
    }

    greater() {
       this.setRange(this.middle, this.max); // if average value is lower than answer
    }
}

module.exports = GuessingGame;
