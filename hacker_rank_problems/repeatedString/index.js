// PROBLEM STATEMENT: 
// Lilah has a string, s, of lowercase English letters that she 
// repeated infinitely many times.

// Given an integer, n, find and print the number of letter 
// a's in the first n letters of Lilah's infinite string.

// For example, if the string s = 'abcac' and, n = 10 the substring 
// we consider is 'abcacabcac', 
// the first 10 characters of her infinite string. There are 4 occurrences 
// of a in the substring.

// The repeatedString function should return an integer representing the 
// number of occurrences of a in the prefix of length n in the 
// infinitely repeating string.

// repeatedString has the following parameter(s):
// s: a string to repeat
// n: the number of characters to consider

// Examples: 
// repeatedString('aba', 10);
// "abaabaabaa"
// => 7
// repeatedString('a', 1000000000000)
// => 1000000000000


function countChar(str, character){
  let count = 0;
  for(let char of str){
    char === character ? count++ : null;
  }
  return count;
};


function repeatedString(s, n, char){
  if(s === char) return n;

  const charInString = countChar(s, char);
  
  const preRemainder = Math.floor(n / s.length) * charInString;
  const remainderString = s.slice(0, n % s.length);

  const numOfCharsInRemainder = countChar(remainderString, char);


  return preRemainder + numOfCharsInRemainder;
};

module.exports = repeatedString;

// function repeatedString(s, n){
//   let count = 0;
//   let i = 0;

//   while(n){
//     if(i === s.length) i = 0;
//     if (s[i] === 'a') count++;
//     n--;
//     i++;
//   };
//   return count;
// };
