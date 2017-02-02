'use strict';

function Thermostat() {
    this._currentTemp = 20;
	this._minTemp = 10;
    this._maxTemp = 25;
    this._powerSaving = true;
}

Thermostat.prototype.temp = function() {
    return this._currentTemp;
};

Thermostat.prototype.up = function(num) {
    if((this._currentTemp + num) > this._maxTemp)  {
		var maxError = 'Cannot exceed max temperature of ' + this._maxTemp;
        throw new Error(maxError);
    }
    this._currentTemp += num;
};

Thermostat.prototype.down = function(num) {
	if((this._currentTemp - num) < this._minTemp) {
		var minError = 'Cannot lower temperature below ' + this._maxTemp;
        throw new Error(minError);
	}
    this._currentTemp -= num;
};

Thermostat.prototype.reset = function() {
	this._currentTemp = 20;
};

Thermostat.prototype.isPowerSavingOn = function() {
	return this._powerSaving;
};

Thermostat.prototype.switchPowerSaving = function() {
	if(this._powerSaving) {
		this._powerSaving = false;
		this._maxTemp = 32;
	} else {
		this._powerSaving = true;
		this._maxTemp = 25;
	}
};

Thermostat.prototype.energyUsage = function() {
	if(this._currentTemp < 18) { return "low-usage"; }
	if(this._currentTemp < 25) { return "medium-usage"; }
	return "high-usage";
};
