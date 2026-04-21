const ParkingSpot = require("./ParkingSpot");

class FourWheelerParkingSpot extends ParkingSpot {
    constructor(spotId, price) {
        super(spotId, 'FourWheeler', price);
    }
}

module.exports = FourWheelerParkingSpot;