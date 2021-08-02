/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

function solution(input, markers) {
  let b = input.split(markers[0]);
  let c = b[1].split("\n");
  let d = c.reduce((currVale, element, index) => {
    if (index > 0) return (currVale += "\n" + element);
    return "";
  }, "");
  let e = d.split(markers[1]);
  console.log(b[0].trim() + "\n" + e[0].trim());
}

solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]); //, "apples, plums\npears\noranges")
solution("Q @b\nu\ne -e f g", ["@", "-"]); //, "Q\nu\ne");
