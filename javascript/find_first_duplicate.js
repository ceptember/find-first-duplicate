// First is my brute force solution
/*
function findFirstDuplicate(arr) {
  let lastIndex = arr.length; 
  for (let i = 0; i < arr.length-1; i++){
    for (let j = i+1; j < arr.length; j++){
      if (arr[i] == arr[j] && j < lastIndex){
        lastIndex = j; 
      }
    }
  }

  if (lastIndex == arr.length){
    return -1; 
  }
  else {
    return arr[lastIndex]
  } 
}
*/

// Second solution is shorter and cleaner, but just as slow because it still has nested loops 
function findFirstDuplicate(arr){
  let matches = [-1]
  for (let i = arr.length - 1; i >= 0; i--){
    for (let j = i-1; j >= 0; j--){
      if (arr[i] == arr[j]){
        matches.push(arr[i]);
      }
    }
  }
  return matches[matches.length-1]
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  // my tests below: 
  console.log("");

  console.log("Expecting: '2'");
  console.log("=>", findFirstDuplicate([1, 2, 3, 2, 1, 3]));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4, 5, 2, 1]));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4, 5, 1, 2]));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4, 5, 1, 2]));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4, 5, 1, 5]));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", findFirstDuplicate([1, 2, 2, 1 ]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file

// lastIndex 
// find duplicates, set the index of the second item in the pair to lastIndex 
// loop through each item
// nested loop through the items > i
// if there's a match-
//   see if j < lastIndex 
// At the end, return arr[lastIndex]


// And a written explanation of your solution
/*

By "first duplicate" it means the duplicte that ends first, i.e the second item in the pair has the lowest index.  

It's not necessarily the one with the first starting number, or the pair that is closest together. 

To focus on the ending number, I created a variable to keep track of the index of the second number in a pair, and replace it when it finds
a pair where the second number has a lower index. At the end of the loop, I redurned the array item at that index. 

*/