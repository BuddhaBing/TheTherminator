$(document).ready(function() {
    $thermostat = new Thermostat();
    var $oneDegree = (100 / ($thermostat._maxTemp - $thermostat._minTemp));
    var $currentPercent = ($thermostat._maxTemp - $thermostat._currentTemp) * $oneDegree;
    var $bubbleColor;
    var $city = "poulton-le-fylde";
    weather = function() {
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + $city + '&appid=01d3fab55cf01107d01773f82f524721&units=metric', function(data) {
            $('#location').text(data.name);
            $('#high-temp').text(data.main.temp_max + "°C");
            $('#low-temp').text(data.main.temp_min + "°C");
            $('#current-temp').text(data.main.temp + "°C");
            $('#current-weather').text(data.weather[0].main);
            $('#wind-speed').text(data.wind.speed + " MPH");
        });
    };

    weather();

    $("#current-city").change(function() {
        // $city = $("#current-city").val();
        weather();
    });

    // bubbleBackground = function() {
    //     if ($thermostat.energyUsage() === "Low usage") { $bubbleColor = "#00d000"; }
    //     else if ( $thermostat.energyUsage() === "Medium usage") { $bubbleColor = "orange"; }
    //     else { $bubbleColor = "red"; }
    //     $('head').append('<style>.thermometer:before, .thermometer:after{background:' + $bubbleColor + '!important;}</style>');
    //     $(".usage").html($thermostat.energyUsage());
    // };

    thermBackground = function() {
        $("#energy-usage").attr("class", $thermostat.energyUsage());
        $("#energy-usage").text($thermostat.energyUsage().replace("-usage", " energy usage").toUpperCase());
        $(".thermometer").css("background", "-webkit-linear-gradient(right, #000 0%, #000 " + $currentPercent + "%, crimson " + $currentPercent + "%, crimson 100%");
    };

    tempDisplay = function() {
        $(".temp").html($thermostat._currentTemp + "&deg;C");
    };

    updateThermometer = function() {
        $oneDegree = (100 / ($thermostat._maxTemp - $thermostat._minTemp));
        $currentPercent = ($thermostat._maxTemp - $thermostat._currentTemp) * $oneDegree;
        // bubbleBackground();
        thermBackground();
        tempDisplay();
    };

    updateThermometer();

    $(".temp-down").click(function(event) {
        $thermostat.down(1);
        updateThermometer();
    });

    $(".temp-up").click(function(event) {
        $thermostat.up(1);
        updateThermometer();
    });

    $(".temp-reset").click(function(event) {
        $thermostat.reset();
        updateThermometer();
    });

    $(".power-saving").click(function(event) {
        $thermostat.switchPowerSaving();
        if ($thermostat.isPowerSavingOn()) {
            $(".fa-leaf").removeClass("ps-off");
            $(".fa-leaf").addClass("ps-on");
            // $(".power-saving-butt").html("POWER SAVING OFF");
            if($thermostat._currentTemp > $thermostat._maxTemp) {$thermostat._currentTemp = $thermostat._maxTemp;}
        } else {
            $(".fa-leaf").removeClass("ps-on");
            $(".fa-leaf").addClass("ps-off");
            // $(".power-saving-butt").html("POWER SAVING ON");
        }
        updateThermometer();
    });

});
