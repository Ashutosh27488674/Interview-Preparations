const MinuteBasedCostCalculationStrategy = require("./MinuteBasedCostCalculationStrategy");
const HourBasedCostCalculationStrategy = require("./HourBasedCostCalculationStrategy");

class CostCalculationStrategyFactory {
    #strategies = new Map();

    constructor() {
        this.#strategies.set('MinuteBased', MinuteBasedCostCalculationStrategy);
        this.#strategies.set('HourBased', HourBasedCostCalculationStrategy);
    }

    getCostCalculationStrategy(type, ticket) {
        const StrategyClass = this.#strategies.get(type);
        if (!StrategyClass) {
            throw new Error(`Cost calculation strategy of type ${type} not found`);
        }
        return new StrategyClass(ticket);
    }

    calculate(type, ticket) {
        const strategy = this.getCostCalculationStrategy(type, ticket);
        return strategy.calculateCost();
    }
}

module.exports = CostCalculationStrategyFactory;