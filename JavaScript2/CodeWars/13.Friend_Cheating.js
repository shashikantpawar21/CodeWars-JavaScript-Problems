/*
A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?

 1 2 3 4 - 10 
 2 * 1 == 10 - (2 + 1)      i=  1 n-1  1...3      2   7
 3 * 1 ==  10 - (3 + 1)      j =  i+1  n   2...4  3   6
 4 * 1 == 10 - (4 + 1)        j*i = sum - (J+1)   4   5
                                Add into array
  (4 *1) +(4+1)

 3 * 2 ==  10 - (3 + 2)         2..3      6  4
 4 * 2 == 10 - (4 + 2)          3..4      8  4 

 4 * 3 == 10 - (4 + 3)         3  4        12  3  

(a+b) + (a*b)  = 351 
n 
*/

function removeNb(n) {
  sumOfNb = (n * (n + 1)) / 2;
  let result = [];
  let halfOfNo = Math.floor(n / 2);
  for (let i = halfOfNo; i <= n; i++) {
    for (let j = n; j >= halfOfNo; j--) {
      if (j * i === sumOfNb - (j + i)) {
        result.push([i, j]);
        result.push([j, i]);
        return result;
      }
    }
  }
  return result;
  // console.log(result);
}

function removeNb1(n) {
  sumOfNb = (n * (n + 1)) / 2;
  let result = [];
  for (let i = 1; i <= n; i++) {
    let j = (sumOfNb - i) / (i + 1);
    if ((sumOfNb - i) % (i + 1) == 0 && j <= n) {
      result.push([i, j]);
      // result.push([j, i]);
      // return result;
    }
  }
  return result;
  // console.log(result);
}

function removeNb(n) {
  // from the instruction:
  // a * b = S(n) - a - b

  // and the sum of all first n natural numbers is
  // S(n) = n * (n + 1) / 2

  // so we can refrase the first formula like this:
  // a * b = n * (n + 1) / 2 - a - b
  // a * b + b = n * (n + 1) / 2 - a
  // b * (a + 1) = n * (n + 1) / 2 - a
  // b = (n * (n + 1) / 2 - a) / (a + 1)

  // but a and b are natural and up to n

  var results = [];
  for (var a = 1; a <= n; a++) {
    var b = ((n * (n + 1)) / 2 - a) / (a + 1);
    if (b % 1 === 0 && b <= n) results.push([a, b]);
  }
  return results;
}
console.log(removeNb1(1000003));
