/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

// Solution 1:
const createPhoneNumber = function (phoneNumber) {
  const number = phoneNumber.join("");
  const leftNumber = number.slice(0, 3);
  const middleNumber = number.slice(3, 6);
  const rightNumber = number.slice(6, number.length);
  return `(${leftNumber}) ${middleNumber}-${rightNumber}`;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Solution 2:
const createPhoneNumber2 = function (phoneNumber) {
  let format = "(xxx) xxx-xxxx";
  for (let i = 0; i < phoneNumber.length; i++) {
    format = format.replace("x", phoneNumber[i]);
  }
  return format;
};
console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Solution 3:
function createPhoneNumber3(phoneNumber) {
  return phoneNumber.reduce((p, c) => p.replace("x", c), "(xxx) xxx-xxxx");
}
console.log(createPhoneNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
