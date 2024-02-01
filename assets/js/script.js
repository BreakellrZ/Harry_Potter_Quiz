// Start screen to Question screen
document.getElementById('start_game').addEventListener('click', function(){
  document.getElementById('start_screen').style.display = "none"
  document.getElementById('main').style.display = 'flex'
}) 

/*
// Game variables
const computerChoiceDisplay = document.getElementById('draco');
const userChoiceDisplay = document.getElementById('user');
const resultDisplay = document.getElementById('result');
const possiblechoices = document.getElementsByClassName('btn')
let userChoice;
let dracoChoice;
let result_display;

// Function when you click a button
possiblechoices.addEventListener('click', function() {
userChoice = 
generate_Draco_choice()
})

// Dracos choices
function generate_Draco_choice() {
  const randomNumber = Math.floor(Math.random() * 5 ) + 1

  if (randomNumber === 1) {
    dracoChoice = 'Accio'
  }

  if (randomNumber === 2) {
    dracoChoice = 'Petrificus Totalus'
  }

  if (randomNumber === 3) {
    dracoChoice = 'Stupefy'
  }

  if (randomNumber === 4) {
    dracoChoice = 'Expelliarmus'
  }

  if (randomNumber === 5) {
    dracoChoice = 'Confundo'
  }
  userChoiceDisplay.innerHTML = dracoChoice
}
*/

function playGame(userChoice) {
  const possibleActions = ['accio', 'petrificus Totalus', 'stupefy', 'expelliarmus', 'confundo'];
  const computerChoice = possibleActions[Math.floor(Math.random() * possibleActions.length)];

  const result = document.getElementById('result');
  result.textContent = `You chose ${userChoice}, computer chose ${computerChoice}.` 

  if (userChoice === computerChoice) {
    result.textContent + ' WOW, a tie!';
} else if (
    (userChoice === 'expelliarmus' && computerChoice === 'confundo') ||
    (userChoice === 'expelliarmus' && computerChoice === 'stupefy') ||
    (userChoice === 'accio' && computerChoice === 'expelliarmus') ||
    (userChoice === 'accio' && computerChoice === 'petrificus Totalus') ||
    (userChoice === 'stupefy' && computerChoice === 'accio') ||
    (userChoice === 'stupefy' && computerChoice === 'confundo') ||
    (userChoice === 'confundo' && computerChoice === 'accio') ||
    (userChoice === 'confundo' && computerChoice === 'petrificus Totalus') ||
    (userChoice === 'petrificus Totalus' && computerChoice === 'stupefy') ||
    (userChoice === 'petrificus Totalus' && computerChoice === 'expelliarmus')
    ) {
      result.textContent + ' YOU WIN THIS ROUND!';
  } else {
      result.textContent + ' You lose this round.';
  }
}