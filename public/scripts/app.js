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

user.printPlacesLived();
