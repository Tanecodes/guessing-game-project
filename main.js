const userInput = document.getElementById("userInput");
const btn = document.getElementById("btn");
const resetBtn = document.getElementById("reset");
const para = document.getElementById("para");
const score = document.getElementById("score");

let number = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

btn.addEventListener("click", function() {

  if(userInput.value.trim() === "") {
    para.textContent = "please enter a number.."
    return;
  };
  
  const userGuess = Number(userInput.value);

  if(userGuess === number) {
    para.textContent = "you Guessed Correctly! Well Done!"
  } else if(userGuess < number) {
    para.textContent = "your guess was too low try again :)"
  } else {
    para.textContent = "your guess was too high try again."
  };

  guessCount++;
  score.textContent = `Guesses:${guessCount}`;

});

resetBtn.addEventListener("click", function() {

  number = Math.floor(Math.random() * 100) + 1;
  para.textContent = "guess my secret number good luck!";
  userInput.value = "";
  guessCount = 0;
  score.textContent = `Guesses:${guessCount}`;
});