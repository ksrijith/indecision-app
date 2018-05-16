// console.log('es6-arrow-playground');

// const square = function(x) {
//     return x * x;
// };

// const squareArrow = (x) => {
//     return x * x;
// };

// const squareArrowShort = (x) => x * x;

// console.log(squareArrowShort(10));

const name = "Mike Smith";
const getFirstName = (name) => {
    return name.split(' ')[0];
};
const getFirstNameShort = (name) => name.split(' ')[0];

console.log(getFirstNameShort(name));