// function myReplace(str, before, after) {
  
//   // Check if the first letter of 'before' is uppercase
//   if (before[0] === before[0].toUpperCase()){
    
//     // If it is, replace 'after' with its first letter capitalized
//     after = after[0].toUpperCase() + after.slice(1);
  
//   } else {
    
//     // If not, make sure 'after' is in all lowercase
//     after = after.toLowerCase();
//   }

//   // Use a regular expression with the 'g' flag to replace all occurrences of 'before' with 'after' in 'str'
//   return str.replace(new RegExp(before, "gi"), after);
 
// }

// console.log(myReplace("Let us go to the ore", "Store", "mall") )


function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(new RegExp(before, 'gi'), after);

  return str;
}

// test here
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));