/* 
Feature 1: Generate a random number and log it (just to check).

Feature 2: Take a user’s guess from an input and display it back.

Feature 3: Compare the guess with the random number → tell user "Too high" / "Too low" / "Correct".

Feature 4: Limit number of attempts (10 tries).

Feature 5: Show previous guesses.

Feature 6: End the game when guesses run out or number is guessed.

Feature 7: Add “Restart Game” button.

Feature 8: Style with CSS and polish messages.

(Optional) Extra features like difficulty levels, animations, or sound.
*/
let input = document.getElementById("user-input");
function randomGen() {
  return Math.floor(Math.random() * 100) + 1;
}
let previousGuesses = document.getElementById("numberOfGuess");
let counter = 0;
let maxAccess = 10;
let hint = document.getElementById("hint");
let randomNumber = randomGen();
console.log("the ran no", randomNumber);
let number = [];
let submitBtn = document.getElementById("submit-input");
let counterEl = document.getElementById("counter-el");
submitBtn.addEventListener("click", function submitInput(e) {
  userInput = parseInt(input.value);
  e.preventDefault();
  if (isNaN(userInput)) {
    let isnan = confirm("input a number");
    console.log(isnan);
    input.value = "";
    return;
  }
  counter++;
  number.push(userInput);
  console.log(number);
  previousGuesses.textContent = number;
     counterEl.textContent = counter;
  if (userInput) {
    input.value = "";
    if (userInput == randomNumber) {
      hint.innerHTML = `you won, you guessed correctly after ${counter} tries`;
      endGame();
    } else if (counter >= maxAccess && userInput !== randomNumber) {
      hint.innerHTML = `you have used up your tries,you used ${counter} tries`;
      endGame();
    } else if (userInput < randomNumber) {
      hint.innerHTML = "the number you input is smaller,try a bigger number";
    } else if (userInput > randomNumber) {
      hint.innerHTML = "the number you input is bigger ,try a smaller number";
    }
  } else if (userInput === false) {
    alert("input a valid number");
  }
});
let showRestartButton = () => {
  let restartbutton = document.createElement("button");
  document.body.appendChild(restartbutton);
  restartbutton.id = "restart-btn";
  restartbutton.textContent = "restart game";
  restartbutton.addEventListener("click", () => {
    input.value = "";
    hint.innerHTML = "";
    previousGuesses.textContent = "";
    counter = 0;
    counterEl.textContent = 0;
    input.disabled = false;
    submitBtn.disabled = false;
    const btn = document.getElementById("restart-btn");
    btn.remove();
    randomNumber = randomGen();
    console.log(randomNumber, "the new number");
  });
};
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    submitBtn.click();
  }
});

function endGame() {
  input.disabled = true; // stop typing
  submitBtn.disabled = true; // stop submitting
  showRestartButton();
}
