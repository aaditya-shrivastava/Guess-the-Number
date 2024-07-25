let display = document.getElementById("result");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let reset = document.getElementById("Reset");
let start = document.getElementById("Start");

let count = true;
let randomNum;
let buttons = [btn1, btn2, btn3];
start.addEventListener("click", () => {
  randomNum = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 3
  console.log(randomNum);
  // Shuffle the positions of the buttons
  shuffleButtons();
  // Display the buttons
  if (count === true) {
    buttons.forEach((btn) => (btn.style.display = "block"));
    count = false;
  } else {
    buttons.forEach((btn) => (btn.style.display = "none"));
    count = true;
}
});

reset.addEventListener("click", () => {
  display.innerHTML = "";
  count = true
  display.style.backgroundColor = "gray";
  buttons.forEach((btn)=>btn.style.display = "none")

  
});

function shuffleButtons() {
  for (let i = buttons.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [buttons[i], buttons[j]] = [buttons[j], buttons[i]];
  }
  buttons.forEach((button) => button.parentNode.appendChild(button));
  // Add event listeners to the shuffled buttons
  btn1.addEventListener("click", () => checkGuess(1));
  btn2.addEventListener("click", () => checkGuess(2));
  btn3.addEventListener("click", () => checkGuess(3));
}

function checkGuess(choice) {
  if (choice === randomNum) {
    display.innerHTML = "Congratulations! You Guessed correctly.";
    display.style.backgroundColor = "green";
    if (count === true) {
      buttons.forEach((btn) => (btn.style.display = "block"));
      count = false;
    } else {
      buttons.forEach((btn) => (btn.style.display = "none"));
      count = true;
    }
  } else {
    display.innerHTML = "Sorry, try again.";
    display.style.backgroundColor = "red";
    buttons.forEach((btn) => (btn.style.display = "none"));
  }
}
