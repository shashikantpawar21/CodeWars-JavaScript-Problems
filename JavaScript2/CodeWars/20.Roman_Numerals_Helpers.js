/*
Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Examples
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000

1.Locate largest value 
2. Check how many times it is repeated (sum both)
3. if largest val is second then sub val of it from first

*/

class RomanNumerals {
  romanDigit(char) {
    if (char === "I") return 1;
    if (char === "V") return 5;
    if (char === "X") return 10;
    if (char === "L") return 50;
    if (char === "C") return 100;
    if (char === "D") return 500;
    if (char === "M") return 1000;
  }
  toRoman(n) {
    console.log("toRoman " + n);
  }
  fromRoman(str) {
    let romanArr = [...str].map((c) => {
      return this.romanDigit(c);
    });
    let res = 0;
    for (let i = 0; i < romanArr.length; ) {
      if (i + 1 === romanArr.length) {
        res = res + romanArr[i];
        i++;
        continue;
      }
      if (romanArr[i] >= romanArr[i + 1]) {
        if (romanArr[i] === romanArr[i + 1]) {
          if (romanArr[i] === romanArr[i + 2]) {
            res = res + romanArr[i] * 3;
            i = i + 3;
          } else {
            res = res + romanArr[i] * 2;
            i = i + 2;
          }
        } else {
          res = res + romanArr[i] + romanArr[i + 1];
          i = i + 2;
        }
      } else {
        res = res + romanArr[i + 1] - romanArr[i];
        i = i + 2;
      }
    }

    console.log("fromRoman " + romanArr);
    console.log("res " + res);
  }
}

let num = new RomanNumerals();
num.fromRoman("MDCLXIX");

1650 + 10 + 9;
