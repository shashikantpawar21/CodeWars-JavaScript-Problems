/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

/* Conversion logic
First Value
Take the first number, 220, and divide by 16. 220 / 16 = 13.75, which means that the first digit of the 6-digit hex color code is 13, or D.
Take the remainder of the first digit, 0.75, and multiply by 16. 0.75 (16) = 12, which means that the second digit of the 6-digit hex color code is 12, or C.
So far, we have #DC____.
follow same for second and third value 
*/
function rgb(r, g, b) {
  // complete this function
  const hexValue =
    convertToHexDigit(r) + convertToHexDigit(g) + convertToHexDigit(b);
  console.log(hexValue);
}

function convertToHexDigit(n) {
  if (n <= 0) return "00";
  if (n >= 255) return "FF";

  let number = n / 16;
  let firstDigit = Math.floor(number);
  let secondDigit = (number - firstDigit) * 16;
  return replaceMoreThan10(firstDigit) + replaceMoreThan10(secondDigit);
}

function replaceMoreThan10(n) {
  let hexNum = ["A", "B", "C", "D", "E", "F"];
  return n > 9 ? hexNum[n - 10] : Math.floor(n).toString();
}

rgb(173, 255, 47); // returns FFFFFF
rgb(300, 255, 255); // returns FFFFFF
rgb(0, 0, 0); // returns 000000
rgb(0, 0, -20); // returns 9400D3

// Test.assertEquals(rgb(0, 0, 0), '000000')
// Test.assertEquals(rgb(0, 0, -20), '000000')
// Test.assertEquals(rgb(300,255,255), 'FFFFFF')
// Test.assertEquals(rgb(173,255,47), 'ADFF2F')

///////////////////////////////////////////////////////////
//seems only single function solution is accepted by code wars so below code
function rgb(r, g, b) {
  // complete this function
  let hexNum = ["A", "B", "C", "D", "E", "F"];
  let hexValue = "";
  let rgb = [r, g, b];
  rgb.forEach((n) => {
    if (n <= 0) hexValue += "00";
    else if (n >= 255) hexValue += "FF";
    else {
      let number = n / 16;
      let firstDigit = Math.floor(number);
      let secondDigit = (number - firstDigit) * 16;
      let firstNumber =
        firstDigit > 9
          ? hexNum[firstDigit - 10]
          : Math.floor(firstDigit).toString();
      let secondNumber =
        secondDigit > 9
          ? hexNum[secondDigit - 10]
          : Math.floor(secondDigit).toString();
      hexValue += firstNumber + secondNumber;
    }
  });
  console.log(hexValue);
}

// one line solution
let rgb = (r, g, b) =>
  [r, g, b]
    .map((item) =>
      item >= 255 ? "FF" : item <= 0 ? "00" : item.toString(16).toUpperCase()
    )
    .join("");
