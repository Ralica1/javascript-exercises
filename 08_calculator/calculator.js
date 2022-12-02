const add = function(num1,num2) {
let sum=0;
return sum=num1+num2;
};

const subtract = function(num1,num2) {
	let sum=0;
  return sum=num1-num2;
};

const sum = function(array) {
	let sum=0;
  if (array==false) {
    return sum=0;
  }
  else{
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  }
  return sum;
};

const multiply = function multiply(array) {
  if (array.length === 0) {
    return 1;
  }
  return array[0] * multiply(array.slice(1));
};

const power = function(num1,num2) {
	return num1**num2;
};

const factorial = function fact(number) {
  const f=[];
	if (number == 0 || number == 1)
    return 1;
  if (f[number] > 0)
    return f[number];
  return f[number] = fact(number-1) * number;
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
