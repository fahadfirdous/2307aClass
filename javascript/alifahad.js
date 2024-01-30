
    


    

        

var secretNumber = Math.floor(Math.random() * 10) + 1;

        console.log(secretNumber);

var turns = 3;


while (turns > 0) {
  
  var userGuess = prompt("Guess the number between 1 to 10:");

  
  var guess = parseInt(userGuess);

 
  if (guess === secretNumber) {
    alert("Congratulations! You win!");
    break; 
  } 
  
  else if (guess < secretNumber) {
    alert("Wrong guess! Try a higher number.");
  } 
  
  else if (guess > secretNumber) {
    alert("Wrong guess! Try a lower number.");
  }

  // Decrement the number of turns
  turns--;

  
  if (turns > 0) {
    alert(`You have ${turns} turns left.`);
  } 
  
  else {
    alert(`Sorry, you ran out of turns. The correct number was ${secretNumber}.`);
  }
}
    


   
