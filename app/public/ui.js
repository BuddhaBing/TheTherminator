$(document).ready(function() {
    thermostat = new Thermostat();
    console.log(thermostat);
    var oneDegree = (100 / (thermostat._maxTemp - thermostat._minTemp));
    var currentPercent = (thermostat._maxTemp - thermostat._currentTemp) * oneDegree;
    var lat = 0;
    var lon = 0;

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(weather);
        } else {
            $("#error").html("Geolocation is not supported by this browser");
        }
        weather();
    }

    function weather(position) {
        if(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
        }
        url = "http://api.openweathermap.org/data/2.5/weather?lat=";
        apiKey = "&appid=01d3fab55cf01107d01773f82f524721&units=metric";
        $.get(url + lat + "&lon=" + lon + apiKey, function(data) {
            $('#location').text(data.name);
            $('#high-temp').text(data.main.temp_max + "°C");
            $('#low-temp').text(data.main.temp_min + "°C");
            $('#current-temp').text(data.main.temp + "°C");
            $('#current-weather').text(data.weather[0].main);
            $('#wind-speed').text(data.wind.speed + " MPH");
        });
    }

    getLocation();

    thermBackground = function() {
        $("#energy-usage").attr("class", thermostat.energyUsage());
        $("#energy-usage").text(thermostat.energyUsage().replace("-usage", " energy usage").toUpperCase());
        $(".thermometer").css("background", "-webkit-linear-gradient(right, #000 0%, #000 " + currentPercent + "%, crimson " + currentPercent + "%, crimson 100%");
    };

    tempDisplay = function() {
        $(".temp").html(thermostat._currentTemp + "&deg;C");
    };

    updateThermometer = function() {
        oneDegree = (100 / (thermostat._maxTemp - thermostat._minTemp));
        currentPercent = (thermostat._maxTemp - thermostat._currentTemp) * oneDegree;
        thermBackground();
        tempDisplay();
    };

    updateThermometer();

    $(".temp-down").click(function(event) {
        $("#error").text(thermostat.down(1));
        updateThermometer();
    });

    $(".temp-up").click(function(event) {
        $("#error").text(thermostat.up(1));
        updateThermometer();
    });

    $(".temp-reset").click(function(event) {
        thermostat.reset();
        updateThermometer();
    });

    $(".power-saving").click(function(event) {
        thermostat.switchPowerSaving();
        if (thermostat.isPowerSavingOn()) {
            $(".fa-leaf").removeClass("ps-off");
            $(".fa-leaf").addClass("ps-on");
            if (thermostat._currentTemp > thermostat._maxTemp) {
                thermostat._currentTemp = thermostat._maxTemp;
            }
        } else {
            $(".fa-leaf").removeClass("ps-on");
            $(".fa-leaf").addClass("ps-off");
        }
        updateThermometer();
    });

});
