/*Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case*/
// 8/2 4 0
//4/2  2  0
// 2/2 1   0
//1/2      1
let countOfOnes = 0;
function getNoOfOnesInBinary(num) {
  halfNum = Math.floor(num / 2);
  if (num % 2 !== 0) countOfOnes++;
  if (halfNum > 1) {
    getNoOfOnesInBinary(halfNum);
  } else countOfOnes++;
}
// getNoOfOnesInBinary(3);
// console.log(countOfOnes);
// getNoOfOnesInBinary(4);
// console.log(countOfOnes);
// getNoOfOnesInBinary(1234);
// console.log(countOfOnes);

var countBits = function (n) {
  // Program Me
  let countOfOnes = 0;
  function getNoOfOnesInBinary(num) {
    halfNum = Math.floor(num / 2);
    if (num % 2 !== 0) countOfOnes++;
    if (halfNum > 1) {
      getNoOfOnesInBinary(halfNum);
    } else if (halfNum === 1) countOfOnes++;
  }
  getNoOfOnesInBinary(n);
  console.log(countOfOnes);
};
// countBits(0);
// countBits(4);
// countBits(7);
// countBits(9);
// countBits(10);

// var countOfOnesBit = (n) => n.toString(2).replaceAll("0", "").length;
var countOfOnesBit = (n) => {
  return parseInt(
    n
      .toString(2)
      .split("")
      .reduce((acc, value) => (value === "1" ? ++acc : acc))
  );
};
console.log(countOfOnesBit(0));
console.log(countOfOnesBit(4));
console.log(countOfOnesBit(7));
console.log(countOfOnesBit(9));
console.log(countOfOnesBit(10));
