/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
    constructor(model) {
        this.currentSpeed = 0;
        this.model = model;
        this.accelerationRate = 1;
    }
    accelerate() {
        this.currentSpeed += this.accelerationRate;
    }
    brake() {
        this.currentSpeed -= this.accelerationRate;
    }
    toString() {
        console.log(`model ${this.model}, currentSpeed: ${this.currentSpeed}`)
    }

}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

class ElectricCar extends Car {
    constructor(model) {
        super('Tesla', model);
        this.electricMotor = true;
    }
    accelerate() {
        return (super.accelerate() * super.accelerate());
    }

    toString() {
        //return `model ${super.toString()}`
        console.log(`This is an electric car model ${this.model}`)
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

const tacoma = new Car('Tacoma')
tacoma.accelerate()
tacoma.accelerate()
tacoma.brake()
tacoma.toString()


const modelX = new ElectricCar('Model X')
modelX.accelerate()
//console.log(modelX.currentSpeed)
modelX.accelerate()
//console.log(modelX.currentSpeed)
modelX.brake()
modelX.toString()

