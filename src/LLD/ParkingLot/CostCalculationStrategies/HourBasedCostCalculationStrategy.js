const CostCalculationStrategy = require("./CostCalculationStrategy");

class HourBasedCostCalculationStrategy extends CostCalculationStrategy {

    constructor(ticket) {
        super(ticket);
    }

    calculateCost() {
        const entryTime = this.ticket.entryTime;
        const exitTime = this.ticket.exitTime ;
        const hoursParked = (exitTime - entryTime) / (1000 * 60 * 60);
        console.log(`Hours parked: ${hoursParked}`);
        const cost = hoursParked * this.ticket.parkingSpot.price;
        return cost.toFixed(2);
    }
}

module.exports = HourBasedCostCalculationStrategy;