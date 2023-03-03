const {expect, assert} = require('chai');
const {batteryIsOk} = require('../bms-monitor');

describe("Test case to check battery", function(){
    it("Battery is good", function(){
        assert.equal(batteryIsOk(25,50,0.5),true,"battery is okay");
    });
    it('Battery temperature is high', function () {
        assert.equal(batteryIsOk(47,60,0.6),true,"battery temperature is not okay") 
    });
    it('Battery temperature is low', function () {
        assert.equal(batteryIsOk(-1,60,0.6),true,"battery temperature is not okay") 
    });
    it('State of charge is low', function () {
        assert.equal(batteryIsOk(25,10,0.6),true,"battery state is not okay") 
    });
    it('State of charge is high', function () {
        assert.equal(batteryIsOk(25,85,0.6),true,"battery state is not okay") 
    });
    it('Charge rate is low', function () {
        assert.equal(batteryIsOk(25,60,-0.1),true,"battery charge rate is not okay") 
    });
    it('Charge rate is high', function () {
        assert.equal(batteryIsOk(25,85,0.9),true,"battery is not okay") 
    });
});