// PROBLEM STATEMENT: 
// A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, 
// he decides to cancel class if fewer than some number of students are present when class starts. 
// Arrival times go from on time (arrivalTime <= 0) to arrived late (arrivalTime > 0).

// Given the arrival time of each student and a threshhold number of attendees, 
// determine if the class is canceled.

// The angryProfessor function must return YES if class is cancelled, or NO otherwise.
// angryProfessor has the following parameter(s):
// k: the threshold number of students
// a: an array of integers representing arrival times

// Examples: 
// angryProfessor(2, [0, -1, 2, 1])
// => 'NO'
// angryProfessor(3, [-1, -3, 4, 2])
// => 'YES'

function angryProfessor(k, a) {
  const onTime = a.reduce((acc, arrivalTime) => {
    if(arrivalTime <= 0) acc++;
    return acc;
  }, 0);

  return onTime >= k ? 'NO' : 'YES';
};


module.exports = angryProfessor;