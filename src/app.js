//import './utils.js'; 
import { square, add } from './utils.js';
import { isAdult, canDrink } from './person.js';

console.log('app.js is running');
console.log('sq:' + square(4));
console.log('add:' + add(4, 2));

console.log('isAdult:' + isAdult(15));
console.log('isAdult:' + isAdult(18));
console.log('isAdult:' + isAdult(21));

console.log('canDrink:' + canDrink(15));
console.log('canDrink:' + canDrink(21));
console.log('canDrink:' + canDrink(30));