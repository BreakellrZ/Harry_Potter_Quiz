let username = null;
let score = 0;
let scoreDraco = 0;
let maxScore = 10;

// Start screen to Game arena screen + Username needed
document.getElementById('start_game').addEventListener('click', function(){
  const input = document.getElementById('fname')
  if(input.value ===''){
    alert('Please enter a username to start');
    return
  }
  username = input.value;
  document.getElementById('start_screen').style.display = "none"
  document.getElementById('main').style.display = 'flex'
}) 

//Start screen to rules screen
document.getElementById('rules').addEventListener('click', function(){
  document.getElementById('start_screen').style.display = "none"
  document.getElementById('instructions').style.display = 'flex'
}) 

//Rules screen to start screen
document.getElementById('back').addEventListener('click', function(){
  document.getElementById('instructions').style.display = "none"
  document.getElementById('start_screen').style.display = 'flex'
}) 

//Game arena screen to start screen
document.getElementById('home').addEventListener('click', function(){
  document.getElementById('main').style.display = "none"
  document.getElementById('start_screen').style.display = 'flex'
}) 

//Play Game function
function playGame(userChoice) {
  const possibleActions = ['accio', 'petrificus Totalus', 'stupefy', 'expelliarmus', 'confundo'];
  const computerChoice = possibleActions[Math.floor(Math.random() * possibleActions.length)];

  const result = document.getElementById('result');
  result.textContent = `You chose ${userChoice}, computer chose ${computerChoice}.` 

  if (userChoice === computerChoice) {
    result.textContent += ' WOW, a tie!';
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
      result.textContent += ' YOU WIN THIS ROUND!';
      score++;
      if(score == maxScore) {
        alert('Congrats you defeated Draco Well done !!')
        score = 0;
        scoreDraco = 0;
      }
      const score_Div = document.getElementById('score')
      score_Div.textContent = `${username}, your score is ${score}`;
  } else {
      result.textContent += ' You lose this round.';
      scoreDraco++;
      if(scoreDraco == maxScore) {
        alert('Unlucky! Draco defeated you, better luck next time!')
        scoreDraco = 0;
        score = 0;
      }
      const draco_score = document.getElementById('draco_score')
      draco_score.textContent = `Dracos score is ${scoreDraco}` ;
  }
}
