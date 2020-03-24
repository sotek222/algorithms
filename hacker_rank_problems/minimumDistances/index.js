// PROBLEM STATEMENT:
// We define the distance between two array values as the 
// number of indices between the two values.
// Given an array (arr),find the minimum distance between 
// any pair of equal elements in the array.
// If no such value exists, print -1.

// The minimumDistances function should return the minimum distance 
// between any two matching elements.

// minimumDistances has the following parameter(s):

// arr: an array of integers

// Examples: 
// arr = [3,2,1,2,3]
// minimumDistances(arr)
// => 2 (the distance between 2 && 2)

function minimumDistances(arr){
  let min;

  for (let i = 0; i < arr.length; i++) {
    let distance;
    for (let j = (i + 1); j < arr.length; j++) {
        if (arr[j] === arr[i]) {
          distance = j - i;
        };
    };
    if (distance < min || !min) min = distance;
  };

  return min ? min : -1;
};

module.exports = minimumDistances;