# The Therminator

[![Build Status](https://travis-ci.org/treborb/TheTherminator.svg?branch=master)](https://travis-ci.org/treborb/TheTherminator)
[![codecov](https://codecov.io/gh/treborb/TheTherminator/branch/master/graph/badge.svg)](https://codecov.io/gh/treborb/TheTherminator)

## [Makers Academy](http://www.makersacademy.com) - Week 5 - Midweek Paired Programming Challenge

## Technologies
* [Javascript ES5](https://www.javascript.com/)
* [jQuery v3.1.1](http://www.sinatrarb.com/)
* [Google Maps Geolocation API](https://developers.google.com/maps/documentation/geolocation/intro)
* [OpenWeatherMap API](https://openweathermap.org/api)
* [Jasmine v2.5.3](https://jasmine.github.io/)
* [Node Static](https://www.npmjs.com/package/node-static)
* [Grunt](https://gruntjs.com/)
* [NPM](https://www.npmjs.com/)

## Jump To
* [Specification](#specification)
* [Installation](#install)
* [Usage](#usage)
* [Tests](#tests)
* [Heroku Demo](#demo)
* [Screenshots](#screenshots)

## The Brief

Create a simple digital thermostat, using JavaScript, test-driven with Jasmine and using jQuery to interact with the HTML page. Use the OpenWeatherMap API to populate weather information.

## <a name="specification">Specification</a>

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is low-usage, < * 25 is medium-usage, anything else is high-usage
* Create a web based user interface using HTML, CSS and jQuery

## <a name="install">Installation</a>

```
$ git clone https://github.com/treborb/TheTherminator.git
$ cd TheTherminator
```

## <a name="usage">Usage</a>

Open the HTML file in your default browser:

```
$ open index.html
```

OR

```
$ npm start
$ open http://localhost:3000
```

#### Hints on the UI

* Use the controls on the left hand side of the page to control the thermostat
* The right hand side is used to display your current weather information
* The number in the middle of the screen indicates the current temperature
* The red bar at the bottom indicates what percentage of the max temperature you are currently set at (this bar moves when you increase/decrease the temperature)
* Just below the red bar is the notifications area, used for displaying power usage stats and warning messages

#### Displaying the weather

* When the page has finished loading in the browser, you will receive a prompt for you to give your permission for the app to know your location (using the Google Maps Geolocation API)
* Click allow to populate the page with the current weather information for your location (using the OpenWeatherMap API)

#### Controlling the thermostat

* The plus icon increases the temperature
* The minus icon decreases the temperature
* The reset (two semi-circular arrows) resets the temperature to 20 degrees
* The leaf icon turns power saving on and off (green is on, grey is off)
* The maximum temperature when power saving is on is 25 degrees
* The maximum temperature when power saving is off is 32 degrees

## <a name="tests">Running the tests</a>

There are two ways to run the tests:

```sh
$ rspec
```

## <a name="demo">[Heroku Demo](https://the-therminator.herokuapp.com/)</a>
Click on the link above to see a live demo

## <a name="screenshots">Screenshots</a>

![The Therminator](https://d541d4157b28d9cb38c5-cf41a704c6c093350fcb8a1fb943b3e5.ssl.cf5.rackcdn.com/github-readme-images/therminator/therminator.png)
