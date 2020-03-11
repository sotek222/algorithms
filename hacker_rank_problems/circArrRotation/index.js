// PROBLEM STATEMENT:
// John Watson knows of an operation called a right circular rotation 
// on an array of integers.One rotation operation moves the last array 
// element to the first position and shifts all remaining elements right one.
// To test Sherlock's abilities, Watson provides Sherlock with an array of integers. 
// Sherlock is to perform the rotation operation a number of times then determine the 
// value of the element at a given position.

// For each array, perform a number of right circular rotations and return the value 
// of the element at a given index.

// The circularArrayRotation function should return an array of integers representing 
// the values at the specified indices.

// circularArrayRotation has the following parameter(s):

// a: an array of integers to rotate
// k: an integer, the rotation count
// queries: an array of integers, the indices to report

// Examples
// circularArrayRotation([3,4,5], 2, [1,2])
// => [5, 3];
// This works as follows
// 2 is the number of right rotations:
// a = [3,4,5]
// a = [5,3,4]
// a = [4,5,3]
// the output is [a[1], a[2]];

function circularArrayRotation(arr, k, queries){
  arr.unshift(...arr.splice(arr.length - k, k));
  return queries.map(q => arr[q]);
};

module.exports = circularArrayRotation;

// function circularArrayRotation(arr, k, queries) {
//   while (k) {
//     arr.unshift(arr.pop());
//     k--;
//   };
//   return queries.map(q => arr[q]);
// };