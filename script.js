// Let's declare variables for both player and Computer
const pChoiceToBeMade = document.querySelectorAll('button');
const playerChoice = document.getElementById('player-choice');
const ComputerChoiceDisplay = document.getElementById('computer-choice');
const gameResult = document.getElementById('round-winner');
const playerVictoryCount = document.getElementById('player-victory-count');
const computerVictoryCount = document.getElementById('computer-victory-count');
const champion = document.getElementById('game-winner');
const maxCountToBetheChampion = 5;
let playerCount = 0;
let computerCount = 0;
let userChoice;
let compChoice;
let result;
let championOfTheGame;

// Let's get our computer selected choice randomly
function cInput() {
  const computerChoicesAvailable = Math.floor(Math.random() * 3) + 1;
  if (computerChoicesAvailable === 1) {
    compChoice = 'Rock';
  } else if (computerChoicesAvailable === 2) {
    compChoice = 'Scissors';
  } else if (computerChoicesAvailable === 3) {
    compChoice = 'Paper';
  }
  ComputerChoiceDisplay.textContent = compChoice;
  ComputerChoiceDisplay.style.color = 'orange';
}

// This section is to figure out who will be the winner of the game
function theWinnerOfTheGame() {
  if (userChoice === compChoice) {
    result = 'It\'s a tie Both of you chose the same option,Please try again';
  }
  if (userChoice === 'Rock' && compChoice === 'Scissors') {
    result = 'You won ,computer lost as the Rock can break the Scissors';
    playerCount += 1;
  } else if (userChoice === 'Scissors' && compChoice === 'Rock') {
    result = 'You Lost ,computer Won as the Rock can break the Scissors';
    computerCount += 1;
  } else if (userChoice === 'Paper' && compChoice === 'Rock') {
    result = 'You Won ,computer Lost as the Paper can cover the Rock';
    playerCount += 1;
  } else if (userChoice === 'Rock' && compChoice === 'Paper') {
    result = 'You Lost ,computer won as the Paper can cover the Rock';
    computerCount += 1;
  } else if (userChoice === 'Scissors' && compChoice === 'Paper') {
    result = 'You won ,computer lost as the Scissors can cut the Paper';
    playerCount += 1;
  } else if (userChoice === 'Paper' && compChoice === 'Scissors') {
    result = 'You Lost ,computer Won as the Scissors can cut the Paper';
    computerCount += 1;
  }
  playerVictoryCount.textContent = playerCount;
  playerVictoryCount.style.color = 'purple';
  computerVictoryCount.textContent = computerCount;
  computerVictoryCount.style.color = 'purple';
  gameResult.textContent = result;
  gameResult.style.fontSize = '1rem';
  gameResult.style.color = 'green';
}

function winnerChampion() {
  if (playerCount === maxCountToBetheChampion && computerCount < maxCountToBetheChampion) {
    championOfTheGame = 'You are the CHAMPION keep it up';
    champion.textContent = championOfTheGame;
    champion.style.color = 'blue';
  } else if (playerCount < maxCountToBetheChampion && computerCount === maxCountToBetheChampion) {
    championOfTheGame = 'The computer is the CHAMPION';
    champion.textContent = championOfTheGame;
    champion.style.color = 'red';
  }
}
// Let's get our Player's choices
pChoiceToBeMade.forEach((pChoice) => pChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  playerChoice.textContent = userChoice;
  playerChoice.style.color = 'blue';
  cInput();
  theWinnerOfTheGame();
  winnerChampion();
}));