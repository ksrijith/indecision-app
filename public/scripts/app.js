'use strict';

var add = function add(a, b) {
    return a + b;
};

console.log(add(55, 1, 1000));

var user = {
    name: 'Srijith',
    cities: ['Bengaluru', 'Waukesha', 'Tokyo'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        var cityMessages = this.cities.map(function (city) {
            return _this.name + ' has lived in: ' + city;
        });
        cityMessages.forEach(function (cityMessage) {
            console.log(cityMessage);
        });
    }
};

//user.printPlacesLived();

var multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.multiplyBy * number;
        });
    }
};

console.log(multiplier.multiply());
