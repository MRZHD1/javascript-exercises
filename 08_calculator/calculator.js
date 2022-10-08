const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
	let num = 0
  array.forEach(anum => {num += anum})
  return num
};

const multiply = function(array) {
  if (!array.length) {
    return 0
  }
  let num = 1
  array.forEach(anum => {num *= anum})
  return num
};

const power = function(a,b) {
	return a**b
};

const factorial = function(num) {
  let value = 1
	for (let i=1; i<=num; i++) {
    value *= i
  }
  return value
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
