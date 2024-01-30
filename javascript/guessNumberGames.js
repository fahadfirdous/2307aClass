// var random_number = Math.floor( Math.random()*10);
// // var random_number = Math.ceil( 66.665);
// var turns=3;
// while(turns>0){
//     var val = parseInt(prompt("enter"));
//     if(val == random_number){
//         alert("congraturaliong");
//         break;
//     }
//     else if(turns ==0){
//         alert("loser");
//     }
//     else {
//         turns--;
//         var val = parseInt(prompt("enter".turns));
//     }
// }

// console.log(random_number);


const targetNumber = Math.floor(Math.random() * 10) + 1;
let remainingTurns = 3;


while (remainingTurns > 0) {

    const userGuess = parseInt(prompt(`Guess a number between 1 and 10. (${remainingTurns} ${remainingTurns === 1 ? 'turn' : 'turns'} remaining)`));
    if (!isNaN(userGuess)) {
        if (userGuess === targetNumber) {
            alert('Congratulations! You guessed the correct number.');
            break;
        } else {
            remainingTurns--;
            if (remainingTurns > 0) {
                alert(`Incorrect! You have ${remainingTurns} ${remainingTurns === 1 ? 'turn' : 'turns'} left.`);
            } else {
                alert(`Game over! The correct number was ${targetNumber}.`);
            }
        }
    } else {
        alert('Please enter a valid number.');
    }
}
