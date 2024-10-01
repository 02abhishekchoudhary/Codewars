/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

/*
To solve this problem, we can use the XOR (^) operator, which is a bitwise operation. XOR has a useful property: when you XOR a number with itself, the result is 0. Also, XOR-ing any number with 0 leaves the number unchanged.

If we XOR all the numbers in the array, pairs of numbers that appear an even number of times will cancel each other out, leaving the number that appears an odd number of times.
*/

const findOdd = function (arr) {
  let result = 0;
  for (let num of arr) result ^= num;
  return result;
};

const findOdd2 = (arr) => arr.reduce((a, b) => a ^ b);

function findOdd3(arr) {
  return arr.find((item) => arr.filter((el) => el == item).length % 2);
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
