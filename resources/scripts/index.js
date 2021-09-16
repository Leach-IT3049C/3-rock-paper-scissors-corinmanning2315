// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const score = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history-paragraph`);

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide gamescreen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  score.innerHTML = userName.value + ": " + game.score.user + " v CPU: " + game.score.cpu;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.clear();
  gameHistoryParagraph.innerText = game.gameHistoryLog;
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  event.preventdefault();
  const username = username.value;
  game = new RockPaperScissors(userName);
  // Complete
  welcomeScreen.classList.add('d-none');
  gameScreen.classList.remove('d-none');
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  event.PreventDefault();
  const userSelection = userSelection.value;
  game.play(userSelection);
  updateScoreTallyUI();
  updateGameHistoryUI();
});