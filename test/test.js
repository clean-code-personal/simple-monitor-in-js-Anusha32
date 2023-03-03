const {expect, assert} = require('chai');
const {batteryIsOk} = require('../bms-monitor');

describe("Test case to check battery", function(){
    it("Battery is good", function(){
        assert.equal(batteryIsOk(25,50,0.5),true,"battery is okay");
    });
});