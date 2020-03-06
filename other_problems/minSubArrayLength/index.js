// PROBLEM STATEMENT:
// Given an array, and a number, write a function that returns the 
// length of a min contiguous sub-array that is equal to or greater than the given number. 

// The minSubArrayLength function must return the length of the min sub-array that sums to
// the num or greater.
// minSubArrayLength has the following parameter(s):
// arr: an array of integers
// num: an integer representing the number we must sum to or greater

// Examples: 
// msal([2, 3, 1, 2, 4, 3], 7)
// => 2

// msal([1,1,2,1,1,1], 4)
// => 3

function msal(arr, num) {
  const lengths = [];

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    let count = 1;
    let j = i + 1;
    while(sum < num){
      sum += arr[j];
      count++;
      j++;
    }
    if(sum >= num){
      lengths.push(count);  
    };
    count = 0;
  };
  
  return Math.min(...lengths);
}

module.exports = msal;