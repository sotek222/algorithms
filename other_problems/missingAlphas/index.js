// PROBLEM STATEMENT:
// The missingAlphas function in a sentence as a string and returns 
// all the letters that it is missing from the alphabet.
// You will ignore the case of the letters in the input sentence and 
// any other characters that are not in the alphabet.
// Your return should be all lower case characters in alphabetical 
// order.

// missingAlphas has the following parameter(s):
// sentence: a string representing a sentence

// EXAMPLES:
// missingAlphas("A lazy dog jumps over the quick brown fox.");
// => ""
// missingAlphas("");
// => "abcdefghijklmnopqrstuvwxyz"
// missingAlphas("Let's fly to Hawaii in May!");
// => "bcdgjkpqruvxz"

function missingAlphas(sentence){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const missingLetters = [];

  const charMap = sentence.split("").reduce((acc, cv) => {
    acc[cv.toLowerCase()] ? acc[cv.toLowerCase()] += 1 : acc[cv.toLowerCase()] = 1; 
    return acc;
  }, {});

  for (const letter of alphabet) {
    charMap[letter] ? null : missingLetters.push(letter);
  }

  return missingLetters.join('');
};

module.exports = missingAlphas;