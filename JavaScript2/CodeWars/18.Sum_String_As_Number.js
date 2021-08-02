/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

function sumStrings(a, b) {
  let aIsNotNum = isNaN(parseInt(a));
  let bIsNotNum = isNaN(parseInt(b));

  if (aIsNotNum || bIsNotNum) {
    if (aIsNotNum && bIsNotNum) return "0";
    else if (aIsNotNum) return b.toString();
    else if (bIsNotNum) return a.toString();
  }
  let strMin = "";
  let strMax = "";
  if (a.length === b.length) {
    strMin = a;
    strMax = b;
  } else if (a.length > b.length) {
    strMin = b;
    strMax = a;
  } else {
    strMin = a;
    strMax = b;
  }
  strMinLen = strMin.length;
  strMaxLen = strMax.length;
  let str = "";
  let carry = 0;
  for (let i = strMinLen - 1, j = strMaxLen - 1; i >= 0; i--, j--) {
    let m = parseInt(strMin[i]) + parseInt(strMax[j]);
    if (carry) {
      m = m + carry;
    }
    if (m < 10) {
      str = m.toString() + str;
      carry = 0;
    } else {
      {
        let t = m.toString();
        str = t[1] + str;
        carry = parseInt(t[0]);
      }
    }
  }
  console.log(str);
  // if (carry) {
  let remStr = strMax.substring(0, strMaxLen - strMinLen);
  remStr = (isNaN(parseInt(remStr)) ? 0 : parseInt(remStr)) + carry;
  str = remStr.toString() + str;
  // }
  console.log(str);
  console.log(str.replace(/^0+/, ""));
}
sumStrings("48228648020712363202005101969", "628287285856966864729045730673"); //: expected '76515933877679227931050832642' to equal '676515933877679227931050832642'
// sumStrings("50095301248058391139327916261", "81055900096023504197206408605"); //: expected '31151201344081895336534324866' to equal '131151201344081895336534324866'
// sumStrings("712569312664357328695151392", "8100824045303269669937"); // => '3'// 712577413488402631964821329
// sumStrings("00103", "08567"); // => '3'// 712577413488402631964821329
// 380 + 422
//       02
// sumStrings("712569312664357328695151392", "8100824045303269669937"); //: expected '7.125774134884027e+26' to equal '712577413488402631964821329'
// sumStrings("50095301248058391139327916261", "81055900096023504197206408605"); //: expected 'NaN31151201344081895336534324866' to equal '131151201344081895336534324866'
