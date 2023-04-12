// How do we know we need a loop here?
    // Because we are incrementing candy by every 2 miles. This can only be done by a loop.
// What's the starting point of the loop?
    //The starting point of the loop is 2 miles.
// When should the loop stop?
    // The loop should stop when user readches mile 6
// How will the loop know when to stop?
    // The loop will know when to stop by putting candyPerMile <= to a number.
// What's incrementing for each iteration of the loop?
    //CandyPerMile
// What variables do we need?
    // We need miles and candypermile. However, this can be done by just miles.
// var candyPerMile = 0;

for (var miles = 0; miles <= 6; miles += 2){
    if (miles % 2 == 0 && miles != 0){
        candyPerMile++
        console.log(candyPerMile)
    }
    
}

// Extra feature 1

var candyPerMile = 0;
let speed = 6;

for (var miles = 0; miles <= 6; miles += 2){
    if (miles % 2 == 0 && miles != 0 && speed > 5.5 ){
        candyPerMile++
        console.log(candyPerMile)
    }
    
}
