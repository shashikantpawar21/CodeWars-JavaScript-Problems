// A Narcissistic Number is a positive valueber which is the sum of its own digits, each raised to the power of the valueber of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false depending upon whether the given valueber is a Narcissistic valueber in base 10.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

function isNarcissisticNumber(value) {
  let valueStr = value.toString();
  let valueLen = valueStr.length;
  let sum = 0;
  // first way
  //   for (let i = 0; i < valueLen; i++) {
  //     sum = sum + valueStr[i] ** valueLen;
  //   }
  // second way
  //   for (let value of valueStr) {
  //     sum = sum + value ** valueLen;
  //   }
  // third way
  [...valueStr].forEach((str) => {
    sum += Math.pow(str, valueLen);
  });
  return parseInt(valueStr) === sum;
}

console.log(isNarcissisticNumber(153));
console.log(isNarcissisticNumber(1652));
console.log(isNarcissisticNumber(2));
