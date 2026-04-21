class ParkingSpot{
    spotId;
    spotType;
    vehicleNumber
    isOccupied;
    price;

    constructor(spotId, spotType, price) {
        this.spotId = spotId;
        this.spotType = spotType;
        // Price can be based on spot type, location, etc. For simplicity, we take it as a parameter here.
        this.price = price;
        this.isOccupied = false;
    }

    isOccupied(){
        return this.isOccupied;
    }

    occupySpot(vehicleNumber) {
        if(this.isOccupied) {
            throw new Error("Spot is already occupied");
        }
        this.isOccupied = true;
        this.vehicleNumber = vehicleNumber;
    }

    freeSpot() {
        if(!this.isOccupied) {
            throw new Error("Spot is already free");
        }
        this.isOccupied = false;
        this.vehicleNumber = null;
    }

}

module.exports = ParkingSpot;