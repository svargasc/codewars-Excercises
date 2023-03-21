//This function takes an array of positive integers (a) as input parameter.
//It calculates the weight of two teams where the ith member in a belongs to the ith team.
//If the index of a member in a is even, then the member is added to team1, otherwise the member is added to team2.
//The function returns an array containing the total weight of each team.

function rowWeights(a) {
    let team1 = 0;
    let team2 = 0;
    
    // Iterate over the elements of a using a for loop.
    for (let i = 0; i < a.length; i+=1) {
      // If the index of the element is even, add it to team1. Otherwise, add it to team2.
      if (i % 2 === 0) {
        team1 += a[i];
      } else {
        team2 += a[i];
      }
    }
    // Return an array containing the total weight of team1 and team2.
    return [team1, team2];
}