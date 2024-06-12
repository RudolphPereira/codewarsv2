/*

1) 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases. */

function likes(names) {
  if (names.length === 0) {
    return `no one likes this`;
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

likes(["Alex", "Jacob", "Mark", "Max", "Rudolph"]);

/*
2)
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

function createPhoneNumber(numbers) {
  const firstSection = numbers.splice(0, 3).join("");
  const midSection = numbers.splice(0, 3).join("");
  const lastSection = numbers.splice(0).join("");
  return `(${firstSection}) ${midSection}-${lastSection}`;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

/* 
3) 
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
*/

function squareDigits(num) {
  const numStr = num.toString();
  const numArr = numStr.split("");
  const sqArr = numArr.map((sqNum) => {
    return sqNum ** 2;
  });

  return Number(sqArr.join(""));
}

squareDigits(9119);

/*
4)
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.

*/

function highAndLow(numbers) {
  const numArr = numbers.split(" ");
  const sortedArr = numArr.sort((a, b) => a - b);
  const lowestNum = sortedArr[0];
  const highestNum = sortedArr[sortedArr.length - 1];
  return (total = `${highestNum} ${lowestNum}`);
}

highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"

/* 
5)
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/
function digitalRoot(n) {
  const total = n
    .toString()
    .split("")
    .map((num) => Number(num))
    .reduce((acc, cv) => acc + cv, 0);
  const grandTotal = total
    .toString()
    .split("")
    .map((num2) => Number(num2))
    .reduce((acc, cv) => acc + cv, 0);
  const grandGrandTotal = grandTotal
    .toString()
    .split("")
    .map((num3) => Number(num3))
    .reduce((acc, cv) => acc + cv, 0);

  return grandGrandTotal;
}

digitalRoot(34);

/*
6) 
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = (n) => {
  let newArr = [];
  for (let i = 1; i <= n; i++) {
    newArr.push(i);
  }
  return newArr.reverse();
};

reverseSeq(4);

/* 
7)
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
*/

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false;
}

isDivisible(3, 1, 3);

/*
8)
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}

getAverage([1, 1, 1, 1, 1, 1, 1, 2]);

/*
9)
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
*/
function bonusTime(salary, bonus) {
  if (bonus) {
    const sum = salary * 10;
    return `£${sum}`;
  } else {
    return `£${salary}`;
  }
  // your code here
}

bonusTime(bonusTime(10000, true));

/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.
*/

function sumStrings(a, b) {
  const num1 = BigInt(a);
  const num2 = BigInt(b);
  const total = num1 + num2;
  return total.toString();
}

sumStrings("712569312664357328695151392", "8100824045303269669937");
