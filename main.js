const userInput = document.getElementById("userInput");
const btn = document.getElementById("btn");
const para = document.getElementById("para");

const number = Math.floor(Math.random() * 100) + 1;



btn.addEventListener("click", function() {
  
  const userGuess = Number(userInput.value);

  if(userGuess === number) {
    para.textContent = "correct you guessed the right number!"
  } else if(userGuess < number) {
    para.textContent = "your guess is too low try guessing higher"      
  } else {
    para.textContent = "your guess is too high try guessing a lower.."
  }

});