console.log('es6-arrow-playground');

const square = function(x) {
    return x * x;
};

const squareArrow = (x) => {
    return x * x;
};

const squareArrowShort = (x) => x * x;

console.log(squareArrowShort(10));