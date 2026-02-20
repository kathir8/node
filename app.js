const {calculateSum, calculateMultiply} = require('./calculate');
const {anotherModule, anotherVariable} = require('./xyz');
var name = "Namaste";

var a = 10;

console.log(name + ' ' + a);
calculateSum(5, 10);
calculateMultiply(5, 10);
console.log(anotherVariable);
anotherModule();