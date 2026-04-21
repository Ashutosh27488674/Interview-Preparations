const Vehicle = require("./Vehicle");

class TwoWheelerVehicle extends Vehicle {
    constructor(vehicleNumber, name) {
        super(vehicleNumber, 'TwoWheeler', name);
    }
}

module.exports = TwoWheelerVehicle;