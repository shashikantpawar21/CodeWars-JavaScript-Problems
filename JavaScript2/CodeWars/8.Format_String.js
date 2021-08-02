/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/
function list(names) {
  //your code here
  let nameLen = names.length;
  let formattedStr = "";
  formattedStr = names.reduce((str, name, index) => {
    let nextName = () => {
      switch (index) {
        case nameLen - 1:
          return name.name;
        case nameLen - 2:
          return name.name + " & ";
        default:
          return name.name + ", ";
      }
    };
    str += nextName();
    return str;
  }, "");
  return formattedStr;
}

list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]);
// returns 'Bart, Lisa & Maggie'

list([{ name: "Bart" }, { name: "Lisa" }]);
// // returns 'Bart & Lisa'

list([{ name: "Bart" }]);
// // returns 'Bart'

list([]);
// returns ''
