const  ParkingSpot = require("./ParkingSpot");

class TwoWheelerParkingSpot extends ParkingSpot {
    constructor(spotId, price) {
        super(spotId, 'TwoWheeler', price);
    }
}

module.exports = TwoWheelerParkingSpot;