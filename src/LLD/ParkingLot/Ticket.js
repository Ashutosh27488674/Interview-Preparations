
class Ticket {
    ticketId;
    vehicle;
    parkingSpot;
    entryTime;
    exitTime;
    constructor(vehicle, parkingSpot) {
        this.ticketId = `${vehicle.vehicleNumber}-${Date.now()}`;
        this.vehicle = vehicle;
        this.parkingSpot = parkingSpot;
        this.entryTime = new Date();
        this.exitTime = null;
    }

    markExitTime() {
        this.exitTime = new Date();
    }
}

module.exports = Ticket;