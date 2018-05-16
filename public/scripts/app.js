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

        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in: ' + city);
        });
    }
};

user.printPlacesLived();
