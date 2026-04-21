const Vehicle = require("./Vehicle");

class FourWheelerVehicle extends Vehicle {
    constructor(vehicleNumber, name) {
        super(vehicleNumber, 'FourWheeler', name);
    }
}

module.exports = FourWheelerVehicle;