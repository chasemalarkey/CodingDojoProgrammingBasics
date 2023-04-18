// Feature 1

// function howMuchLeftOverCake(numberOfPieces, numberOfPeople){
//     let cake = numberOfPieces % numberOfPeople

//     console.log(`You will have ${cake} pieces of cake left over`)
// }
// howMuchLeftOverCake(12, 5);
// Feature 2

function howMuchLeftOverCake(numberOfPieces, numberOfPeople){
    let cake = numberOfPieces % numberOfPeople
    if(cake == 0){
        console.log("No leftovers for you!")
    }
    else if(cake <= 2){
        console.log("You have some leftovers!")
    }
    else if(cake < 5 && cake > 3){
        console.log("You have some leftovers to share!")
    }
    else{
        console.log("Have another party!")
    }
    console.log(`You will have ${cake} pieces of cake left over`)
}

howMuchLeftOverCake(12, 5);