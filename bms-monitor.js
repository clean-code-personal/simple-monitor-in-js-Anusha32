const {expect} = require('chai');

function batteryIsOk(temperature, soc, charge_rate,tolerance) {


    const values = [
        {name:"temperature", input: temperature, min:0, max:45},
        {name:"stateOfCharge", input: soc, min:20, max:80},
        {name:"chargeRate", input:charge_rate, min:0, max:0.8}
    ];
    let isbatteryOk = values.every((item)=>{
        if (item.input < item.min || item.input > item.max){
         return false;
        }
        else{
         return true;
        }
     })



   return isbatteryOk;
}

module.exports = {batteryIsOk};
