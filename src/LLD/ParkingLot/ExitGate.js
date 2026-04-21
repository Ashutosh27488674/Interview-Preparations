const CostCalculationStrategyFactory = require("./CostCalculationStrategies/index.js");
class ExitGate {
    constructor(gateId) {
        this.gateId = gateId || `ExitGate-${Math.floor(Math.random() * 1000)}`;
    }

    processExit(ticket) {
        if (!ticket) {
            throw new Error('Invalid ticket');
        }

        ticket.markExitTime();
        const costCalculationStrategyFactory = new CostCalculationStrategyFactory();
        const cost = costCalculationStrategyFactory.calculate('MinuteBased', ticket);

        // Here you can add logic to process payment based on the calculated cost
        console.log(`Vehicle with number ${ticket.vehicle.vehicleNumber} has ₹${cost} for parking.`);

        // After processing payment, you can free the parking spot
        ticket.parkingSpot.freeSpot();
    }
}

module.exports = ExitGate;
        