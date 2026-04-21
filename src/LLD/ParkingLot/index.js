
const EntryGate = require("./EntryGate");
const ExitGate = require("./ExitGate");
const TwoWheelerVehicle = require("./Vehicle/TwoWheelerVehicle");

function processParkingEntryAndExit() {
    const twoWheelerVehicle = new TwoWheelerVehicle('KA-01-HH-1234', 'Ashutosh Kumar');
    console.info(`Vehicle ${twoWheelerVehicle.name} with number ${twoWheelerVehicle.vehicleNumber} is entering the parking lot.`);
    const entryGate = new EntryGate(twoWheelerVehicle);
    const ticket = entryGate.generateTicket();
    console.info(`Ticket generated: ${ticket.ticketId}`, ticket);
    setTimeout(() => {
            console.info(`Vehicle ${twoWheelerVehicle.name} with number ${twoWheelerVehicle.vehicleNumber} is exiting the parking lot.`);   
            const exitGate = new ExitGate();
            exitGate.processExit(ticket);
            console.info(`Vehicle ${twoWheelerVehicle.name} with number ${twoWheelerVehicle.vehicleNumber} has exited the parking lot.`);
    }, 10000); // Simulating parking duration of 5 seconds
}

module.exports = {
    processParkingEntryAndExit
};