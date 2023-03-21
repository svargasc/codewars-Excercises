// This function takes an array of strings (strarr) and an integer (k) as input parameters.
// It returns the k-consecutive concatenation of the longest subsequence of strarr.
// If k is greater than the length of strarr or k is less than or equal to zero, then the function 
//returns an empty string.

function longestConsec(strarr, k) {
    // Check if strarr is empty or k is greater than the length of strarr or k is less than or equal to zero.
    if (strarr.length === 0  || k > strarr.length || k <= 0) {
      return "";
    }
  
    // Initialize the longest string variable to an empty string.
    let longest = "";
  
    // Iterate over each element of strarr using a for loop.
    for (let i = 0; i < strarr.length; i++) {
      // Create a new string by joining k consecutive strings starting at index i.
      let currentStr = strarr.slice(i, i + k).join("");
  
      // Check if the length of currentStr is greater than the length of longest.
      if (currentStr.length > longest.length) {
        // If so, update longest to currentStr.
        longest = currentStr;
      }
    }
    // Return the longest string.
    return longest;
  }