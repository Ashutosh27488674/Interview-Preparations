
class Vehicle{
    vehicleNumber;
    vehicleType;
    name;
    constructor(vehicleNumber, vehicleType, name) {
        this.vehicleNumber = vehicleNumber;
        this.vehicleType = vehicleType;
        this.name = name;
    }

    getVehicleNumber() {
        return this.vehicleNumber;
    }

    getVehicleType() {
        return this.vehicleType;
    }
}

module.exports = Vehicle;