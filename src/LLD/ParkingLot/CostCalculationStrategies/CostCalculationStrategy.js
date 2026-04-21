const Ticket = require("../Ticket");
class CostCalculationStrategy {
    ticket;
    constructor(ticket) {
        this.ticket = ticket;
    }
}

module.exports = CostCalculationStrategy;