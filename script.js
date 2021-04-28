//* *** Random number in range between

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

let randomNumber1020 = randomRange(0, 10);
console.log('random number in range 0-10:', randomNumber1020);

//* *** BASIC ALGORITHM SCRIPTING ***

//* *** #1 - Convert Celsius to Fahrenheit ***

function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log('Convert 30 celsius to fahrnheit', convertToF(0));

//* *** #2 - Reverse a String ***

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log('Reverse a String Hello:', reverseString('hello'));

//* *** Factorialize a Number (recursive function) ***

function factorialize(num) {
  if (num <= 0) {
    return 1;
  } else {
    return factorialize(num - 1) * num;
  }
}

console.log('Factorialize a Number (!5)', factorialize(5));

//* *** Find the Longest Word in a String ***

function findLongestWordLength(str) {
  let strArr = str.split(' ');
  let longest = 0;
  strArr.forEach((word) => {
    if (word.length > longest) {
      longest = word.length;
    }
  });
  return longest;
}

console.log('Find the Longest Word in a String: ', findLongestWordLength('The quick brown fox jumped over the lazy dog'));

//* *** Return Largest Numbers in Arrays ***

function largestOfFour(arr) {
  let arrForRet = [];
  arr.forEach((arr) => {
    arrForRet.push(Math.max(...arr));
  });
  return arrForRet;
}

console.log(
  'Return Largest Numbers in Arrays: ',
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

//* *** Confirm the Ending ***

function confirmEnding(str, target) {
  let checkStr = str.slice(str.length - target.length);
  if (checkStr === target) {
    return true;
  }
  return false;
}

console.log('Confirm the Ending: ', confirmEnding('Bastian', 'astian'));

//* *** Repeat a String Repeat a String ***

function repeatStringNumTimes(str, num) {
  let finalStr = '';
  if (num <= 0) {
    return finalStr;
  }
  for (let i = 0; i < num; i++) {
    finalStr += str;
  }
  return finalStr;
}

console.log('Repeat a String Repeat a String: ', repeatStringNumTimes('*', 3));

//* *** Truncate a String ***

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    let sliceNr = num;
    return str.slice(0, sliceNr) + '...';
  }
}

console.log(
  'Truncate a String: ',
  truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2)
);

//* *** Finders Keepers ***

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(
  'Finders Keepers: ',
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);

//* *** Boo who ***

function booWho(bool) {
  return typeof bool === 'boolean';
}

console.log('Boo who: ', booWho(false));

//* *** Title Case a Sentence ***

function titleCase(str) {
  let strArr = str.toLowerCase().split(' ');
  let capitalizedArr = [];
  strArr.forEach((word) => {
    capitalizedArr.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  return capitalizedArr.join(' ');
}

console.log('Title Case a Sentence:', titleCase("I'm a little tea pot"));

//* *** Slice and Splice ***

function frankenSplice(arr1, arr2, n) {
  let newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

console.log('Slice and Splice: ', frankenSplice([1, 2, 3], [4, 5, 6], 1));

// frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
