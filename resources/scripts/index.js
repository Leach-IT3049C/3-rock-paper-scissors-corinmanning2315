// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history-paragraph`);

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide gamescreen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.innerHTML = userName + ":" + game.score.user + "v CPU" + game.score.cpu;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.innerHTML += '${game.gameHistoryLog[count]}<br/>';
  gameHistoryParagraph.innerText = game.gameHistoryLog;
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  const username = userName.value;
  game = new RockPaperScissors(userName);
  // Complete
  welcomeScreen.classList('d-done');
  gameScreen.classList.remove('d-done');
});

// go-button EventListener
startGameButton.addEventListener(`click`, function () {
  let userselection = userSelection.value;
  game.play(userselection);
  count++;
  updateScoreTallyUI();
  updateGameHistoryUI();
});