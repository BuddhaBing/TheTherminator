$(document).ready(function() {
    $thermostat = new Thermostat();
    var $oneDegree = (100 / ($thermostat._maxTemp - $thermostat._minTemp));
    var $currentPercent = ($thermostat._maxTemp - $thermostat._currentTemp) * $oneDegree;
    var $bubbleColor;

    bubbleBackground = function() {
        if ($thermostat.energyUsage() === "Low usage") { $bubbleColor = "#00d000"; }
        else if ( $thermostat.energyUsage() === "Medium usage") { $bubbleColor = "orange"; }
        else { $bubbleColor = "red"; }
        $(".thermometer:before").css("background", $bubbleColor);
        $('head').append('<style>.thermometer:before, .thermometer:after{background:' + $bubbleColor + '!important;}</style>');
        $(".usage").html($thermostat.energyUsage());
    };

    thermBackground = function() {
        $(".thermometer").css("background", "-webkit-linear-gradient(top, #fff 0%, #fff " + $currentPercent + "%, " + $bubbleColor + " " + $currentPercent + "%, " + $bubbleColor + " 100%");
    };

    tempDisplay = function() {
        $(".temp").html($thermostat._currentTemp + "&deg;C");
    };

    updateThermometer = function() {
        $oneDegree = (100 / ($thermostat._maxTemp - $thermostat._minTemp));
        $currentPercent = ($thermostat._maxTemp - $thermostat._currentTemp) * $oneDegree;
        bubbleBackground();
        thermBackground();
        tempDisplay();
    };

    updateThermometer();

    $(".temp-down").click(function(event) {
        $currentPercent += $oneDegree;
        $thermostat.down(1);
        if ($thermostat._currentTemp >= $thermostat._minTemp) {
            updateThermometer();
        } //else {
        //     $(".error").html("Cannot lower temperature below " + $thermostat._minTemp);
        // }
    });

    $(".temp-up").click(function(event) {
        $currentPercent -= $oneDegree;
        $thermostat.up(1);
        if ($thermostat._currentTemp <= $thermostat._maxTemp) {
            updateThermometer();
        } //else {
        //     $(".error").html("Cannot exceed max temperature of " + $thermostat._maxTemp);
        // }
    });

    $(".temp-reset").click(function(event) {
        $thermostat.reset();
        updateThermometer();
    });

    $(".power-saving-butt").click(function(event) {
        $thermostat.switchPowerSaving();
        if ($thermostat.isPowerSavingOn()) {
            $(".fa-leaf").css("color", "#00d000");
            $(".power-saving-butt").html("POWER SAVING OFF");
            if($thermostat._currentTemp > $thermostat._maxTemp) {$thermostat._currentTemp = $thermostat._maxTemp;}
        } else {
            $(".fa-leaf").css("color", "gray");
            $(".power-saving-butt").html("POWER SAVING ON");
        }
        updateThermometer();
    });

});
