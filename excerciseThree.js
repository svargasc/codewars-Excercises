//This function takes an array of length 2 (x) as input parameter.
//If both elements in the array are not numbers, the function returns "Void!".
//If only the first element in the array is not a number, the function sets score to the value of the second element in the array.
//If only the second element in the array is not a number, the function sets score to the value of the first element in the array.
//If both elements in the array are numbers, the function sets score to the sum of the two numbers.
//The function then creates a new array (result) consisting of the elements of x repeated score times.
//Finally, the function returns the result array.

function explode(x) {
    let score = 0;
    let result = [];
    
    if (typeof x[0] !== "number" && typeof x[1] !== "number") {
      return "Void!";
    } else if (typeof x[0] !== "number" && typeof x[1] === "number") {
      score = x[1];
    } else if (typeof x[0] === "number" && typeof x[1] !== "number") {
      score = x[0];
    } else {
      score = x[0] + x[1];
    }
    
    for (let i = 0; i < score; i++) {
      result.push(x);
    }
    
    return result;
}