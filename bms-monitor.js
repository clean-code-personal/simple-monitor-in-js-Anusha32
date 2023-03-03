const {expect} = require('chai');
const {rangeCheck} = require('./rangeCheck');

function batteryIsOk(temperature, soc, charge_rate) {

    let isbatteryOk = true;
    temp = rangeCheck(temperature, 0, 45);
    stateOfCharge = rangeCheck(soc, 20, 80);
    chargeRate = rangeCheck(charge_rate,0,0.8);

    if(temp == false || stateOfCharge == false || chargeRate == false){
        isbatteryOk = false;
    }

   return isbatteryOk;
}

module.exports = {batteryIsOk};
