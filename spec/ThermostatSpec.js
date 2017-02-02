'use strict';

describe('Thermostat', function() {
    var thermostat;
    beforeEach(function(){
        thermostat = new Thermostat();
    });
    it('has an initial temperature of 20 degrees', function(){
        expect(thermostat._currentTemp).toEqual(20);
    });
    it('can raise the temperature', function() {
        thermostat.up(2);
        expect(thermostat._currentTemp).toEqual(22);
    });
    it('can lower the temperature', function() {
        thermostat.down(2);
        expect(thermostat._currentTemp).toEqual(18);
    });
    it('has a minimum temperature of 10', function() {
        // expect(function(){ thermostat.down(20); }).toThrowError('Cannot lower temperature below 10');
        var minTemp = thermostat._minTemp;
        expect(thermostat.down(20)).toEqual('Cannot lower temperature below ' + minTemp + "°C");
    });
    it('can reset the temperature to 20', function() {
        thermostat.reset()
        expect(thermostat._currentTemp).toEqual(20);
    });
    it('power saving is on by default', function() {
        expect(thermostat.isPowerSavingOn()).toBe(true);
    });
    it('power saving can be switched off', function() {
        thermostat.switchPowerSaving();
        expect(thermostat.isPowerSavingOn()).toBe(false);
    });
    it('switching power modes adjuests max temperature', function() {
        var defaultTemp = 25;
        thermostat.switchPowerSaving();
        expect(thermostat._maxTemp).not.toEqual(defaultTemp)
    });
    it('does not allow the max temp to be exceeded', function() {
        var maxTemp = thermostat._maxTemp;
        // expect(function(){thermostat.up(6)}).toThrowError('Cannot exceed max temperature of ' + maxTemp)
        expect(thermostat.up(6)).toEqual('Cannot raise temperature above ' + maxTemp + "°C")
    });
    it('can report energy usage', function() {
        expect(thermostat.energyUsage()).toMatch('usage');
    });

});
