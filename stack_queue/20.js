/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

var isValid = function (s) {
  const map = { ")": "(", "}": "{", "]": "[" };
  const stack = [];

  for (const char of s) {
    if (Object.keys(map).includes(char)) {
      const item = stack.pop();
      if (item !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
