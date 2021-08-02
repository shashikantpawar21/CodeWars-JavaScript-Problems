/*Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !*/
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
function pigIt(sentence) {
  let modifiedStrArr = sentence.split(" ").map((item) => {
    return regex.test(item) ? item : item.substring(1) + item[0] + "ay";
  });

  modifiedSentence = modifiedStrArr.join(" ");
  console.log(modifiedSentence);
}

pigIt("Pig latin is cool");
pigIt("Hello world!");
