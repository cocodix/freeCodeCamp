//* *** Random number in range between

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

let randomNumber1020 = randomRange(0, 10);
console.log('random number in range 0-10:', randomNumber1020);

//* *** BASIC ALGORITHM SCRIPTING ***

// * *** #1 - Convert Celsius to Fahrenheit ***

function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log('Convert 30 celsius to fahrnheit', convertToF(0));

// * *** #2 - Reverse a String ***

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log('Reverse a String Hello:', reverseString('hello'));

// * *** Factorialize a Number (recursive function) ***

function factorialize(num) {
  if (num <= 0) {
    return 1;
  } else {
    return factorialize(num - 1) * num;
  }
}

console.log('Factorialize a Number (!5)', factorialize(5));
