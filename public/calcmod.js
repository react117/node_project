// Add Functionality
var add = function(a, b){
  return a + b;
};

// Substraction Functionality
var subs = function(a, b){
  return a - b;
};

// Multiply Functionality
var mult = function(a, b){
  return a * b;
};

// Devision Functionality
var divs = function(a, b){
  return `Quotient is ${Math.floor(a/b)} \n Remainder is ${a%b}`;
};

// Exporting throught Object Literal
module.exports = {
  add: add,
  subs: subs,
  mult: mult,
  divs: divs
};
