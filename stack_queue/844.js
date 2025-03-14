/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.
*/

var backspaceCompare = function (s, t) {
  let sTemp = "";
  let bTemp = "";

  for (const char of s) {
    if (char === "#") {
      sTemp = sTemp.slice(0, sTemp.length - 1);
    } else {
      sTemp += char;
    }
  }

  for (const char of t) {
    if (char === "#") {
      bTemp = bTemp.slice(0, bTemp.length - 1);
    } else {
      bTemp += char;
    }
  }
  return sTemp === bTemp;
};
