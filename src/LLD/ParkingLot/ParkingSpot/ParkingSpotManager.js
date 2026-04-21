const TwoWheelerParkingSpot = require("./TwoWheelerParkingSpot");
const FourWheelerParkingSpot = require("./FourWheelerParkingSpot");

class ParkingSpotManager {
    parkingSpots;
    constructor() {
        this.parkingSpots = [];
    }

    #getParkingSpotType(type, spotId, price) {
        switch(type) {
            case 'TwoWheeler':
                return new TwoWheelerParkingSpot(spotId, price);
            case 'FourWheeler':
                return new FourWheelerParkingSpot(spotId, price);
            default:
                throw new Error("Invalid parking spot type");
        }
    }

    addParkingSpot(type, price) {
        const spotId = this.parkingSpots.length + 1;
        let parkingSpot = this.#getParkingSpotType(type, spotId, price);
        // console.log("Adding parking spot:", parkingSpot);
        this.parkingSpots.push(parkingSpot);
    }

    getAvailableSpots(type) {
        return this.parkingSpots.filter(spot => spot.spotType === type && !spot.isOccupied);
    }

    removeParkingSpot(spotId) {
        const index = this.parkingSpots.findIndex(spot => spot.spotId === spotId);
        if(index === -1) {
            throw new Error("Parking spot not found");
        }
        this.parkingSpots.splice(index, 1);
    }

    parkVehicle(vehicle, parkingSpot) {
        const spot = this.parkingSpots.find(spot => spot.spotId === parkingSpot.spotId);
        if(!spot) {
            throw new Error("Parking spot not found");
        }
        spot.occupySpot(vehicle.vehicleNumber);
    }

    freeParkingSpot(spotId) {
        const spot = this.parkingSpots.find(spot => spot.spotId === spotId);
        if(!spot) {
            throw new Error("Parking spot not found");
        }
        spot.freeSpot();
    }
}

module.exports = ParkingSpotManager;