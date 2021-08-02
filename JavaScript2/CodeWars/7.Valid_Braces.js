/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

//1. store bracket in arr
//2. make a empty arr
//3. loop thru string of array
//4. check if char is present in braces arr if even pus into new array
//5. if index is odd check if one less no is there in our arry if yes remove it
//6  if not present say false
//7. if iterating end and arr is empty it is valid

function validBraces(braces) {
  let validBraces = ["{", "}", "[", "]", "(", ")"];
  let openBraces = [];
  for (let c of braces) {
    let index = validBraces.indexOf(c);
    if (index % 2) {
      if (openBraces[openBraces.length - 1] === index - 1) {
        openBraces.pop();
      } else {
        return false;
      }
    } else {
      openBraces.push(index);
    }
  }
  return openBraces.length === 0;
  //TODO
}
validBraces("(){}[]");
validBraces("([{}])");
validBraces("(}");
validBraces("[(])");
validBraces("[[({})](]");
