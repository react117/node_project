// Require CUstom Module [calcmod.js]
var calc = require('./calcmod');

// Invoke functions from Custom Module
console.log(`Your ADD result is --> ${calc.add(20, 91)}`);
console.log(`Your SUBSTRACTION result is --> ${calc.subs(20, 9)}`);
console.log(`Your MULTIPLICATION result is --> ${calc.mult(2, 9)}`);
console.log(`Your DIVISION result is --> ${calc.divs(9, 2)}`);
