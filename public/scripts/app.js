'use strict';

// console.log('es6-arrow-playground');

// const square = function(x) {
//     return x * x;
// };

// const squareArrow = (x) => {
//     return x * x;
// };

// const squareArrowShort = (x) => x * x;

// console.log(squareArrowShort(10));

var name = "Mike Smith";
var getFirstName = function getFirstName(name) {
    return name.split(' ')[0];
};
var getFirstNameShort = function getFirstNameShort(name) {
    return name.split(' ')[0];
};

console.log(getFirstNameShort(name));
