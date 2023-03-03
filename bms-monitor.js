const {expect} = require('chai');
const {rangeCheck} = require('./rangeCheck');
const {statusindicator} = require('./statusIndicator')

function batteryIsOk(temperature, soc, charge_rate) {

    temp = rangeCheck(temperature, 0, 45);
    stateOfCharge = rangeCheck(soc, 20, 80);
    chargeRate = rangeCheck(charge_rate,0,0.8);
}

module.exports = {batteryIsOk};
