// PROBLEM STATEMENT:
// HackerLand Enterprise is adopting a new viral advertising 
// strategy. When they launch a new product, they advertise 
// it to exactly 5 people on social media.

// On the first day, half of those 5 people (i.e. floor(5/2) = 2) like the advertisement 
// and each shares it with 3 of their friends. At the beginning of the second day, 
// floor(5/2 = 2) * 3 = 6 people receive the advertisement.

// Each day, floor(numOfRecipients/2) of the recipients like the advertisement and will share it with  
// 3 friends on the following day. Assuming nobody receives the advertisement twice, 
// determine how many people have liked the ad by the end of a given day, 
// beginning with launch day as day 1.

// Day Shared Liked Cumulative
// 1      5     2       2
// 2      6     3       5
// 3      9     4       9
// 4     12     6      15
// 5     18     9      24
// 6     27     13     37
// 7     39     19     56
// 8     57     28     84
// 9    84     42     126
// 10   126    63     189

// The cumulative number of likes is 24.


// The viralAdvertising function should return the cumulative 
// number of people who have liked the ad at a given time.

// viralAdvertising has the following parameter(s):
// n: the integer number of days

// Example: 
// viralAdvertising(3)
// => 9

function viralAdvertising(n){
  let likes = 0;
  let shares = 5;

  for(let i = 0; i < n; i++){
    const liked = Math.floor(shares / 2);

    likes += liked;
    shares = liked * 3;
  };

  return likes;
};


module.exports = viralAdvertising;