const ParkingSpotManager = require("./ParkingSpot/ParkingSpotManager");
const Ticket = require("./Ticket");

class EntryGate {
    vehicle;
    constructor(vehicle) {
        this.vehicle = vehicle;
    }
    generateTicket() {
        // Implementation for generating ticket
        const parkingSpotManager = new ParkingSpotManager();
        parkingSpotManager.addParkingSpot("TwoWheeler", 10.50);
        parkingSpotManager.addParkingSpot("FourWheeler", 20.25); 
        const parkingSpots = parkingSpotManager.getAvailableSpots(this.vehicle.vehicleType);
        const assignedSpot = parkingSpots.length > 0 ? parkingSpots[0] : null;
        // console.log("Available parking spots:", parkingSpots, "Assigned spot:", assignedSpot, "Vehicle type:", this.vehicle.type);
        if (!assignedSpot) {
            throw new Error("No available parking spot");
        }
        const ticketId = `TICKET-${Date.now()}`;
        const ticket = new Ticket(this.vehicle, assignedSpot);
        assignedSpot.occupySpot(this.vehicle.vehicleNumber);
        return ticket;  
    }
}

module.exports = EntryGate;