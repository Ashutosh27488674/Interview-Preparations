const CostCalculationStrategy = require("./CostCalculationStrategy");

class MinuteBasedCostCalculationStrategy extends CostCalculationStrategy {
    constructor(ticket) {
        super(ticket);
    }

    calculateCost() {
        const entryTime = this.ticket.entryTime;
        const exitTime = this.ticket.exitTime ;
        const minutesParked = ((exitTime - entryTime))/ (1000 * 60);
        // console.log(`Minutes parked: ${minutesParked}`);
        const cost = minutesParked * this.ticket.parkingSpot.price;
        // console.log(`Cost calculated: ${cost}`);
        return cost;
    }
}

module.exports = MinuteBasedCostCalculationStrategy;