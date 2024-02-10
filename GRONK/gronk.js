//MAIN SETUP AND CONTROLS OF GRONK

// Declare the size of the grid
const GRID_SIZE = 25;
//player + enemy
let player, playerName, sword, rats = [];
let encounter = "", ratsDefeated = 0, weapon = false;
//misc
let startTime, endTime;
let nameInput;
let textBox;
let cubes = [];
let gameState = "START_MENU", gameEnded = false;
//images
let screenState, screenSize = 700, screens = [], currentScreen = 0;
let playerImage, knifeImage, spriteSize = 320, sprites = [];

function preload() {
  screenState = loadImage('images/screenStates.png'); //load in ui templates
  playerSprite = loadImage('images/playerJacketSheet.png'); //load in player sprites
  knifeImage = loadImage('images/knifeBasic.png'); //load in weapon sprite
}

// Setup function: creates the canvas, initializes the characters, and generates the cubes
function setup() {
  createCanvas(700, 700);
  player = new Player();
  //load spritesheet for game screens
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      let img = screenState.get(j * screenSize, i * screenSize, screenSize, screenSize);
      screens.push(img);
    }
  }
  //load spritesheet for player
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let img = playerSprite.get(j * spriteSize, i * spriteSize, spriteSize, spriteSize);
      sprites.push(img);
    }
  }
  sword = new Sword();
  for (let i = 0; i < 5; i++) {
    rats[i] = new Rat();
  }
}

function resetGame() {
  // Reset all game variables to their initial state
  player = new Player();
  sword = new Sword();
  rats = [];
  for (let i = 0; i < 5; i++) {
    rats[i] = new Rat();
  }
  ratsDefeated = 0;
  weapon = false;
  encounter = "";
  noStroke();
}

// Draw function: called continuously by p5.js, controls game logic
function draw() {
  // Game state logic
  switch (gameState) {
    case "PLAY":
      playGame();
      break;
    case "START_MENU":
      startMenu();
      break;
    case "INTRODUCTIONS":
      introductions();
      break;
    case "START_OBJECTIVE":
      levelStart();
      break;
    case "VICTORY":
      victory();
      resetGame();
      break;
    case "PAUSE":
      pauseScreen();
      break;
    case "RAT_ENCOUNTER":
      fightEncounter('You have encountered a wild rat.\n\nIt seems just as scared of you as you are of it.\n\nYou can choose to attack it to scare it off, or try to get away.', 20, 'rat');
      break;
    case "RAT_FIGHT":
      if (!weapon) {
      encounterOutcome('You have encountered a wild rat.\n\nYou tried to fight the rat without a weapon.\n\nYou lost.', '', 20, 'rat');
      } else {
        encounterOutcome('You have encountered a wild rat.\n\nYou swung your sword wildly.\n\nYou lost.', '', 0, 'rat');
      }
      
      //ratLose();
      break;
    case "RAT_BITE":
      encounterOutcome('You have encountered a wild rat.\n\nYou tried to run away.\n\nThe rat bit your ankle as you tried to run.', '', 10, 'rat');
      //ratBite();
      break;
    case "YOU_DIED":
      youDied();
      break;
    case "GAME_OVER":
      gameOver();
      resetGame();
      break;
  }
}

function keyPressed() 
{
  if (key === 'p' || key === 'P') {
    if (gameState === "PLAY") {
      gameState = "PAUSE";
    } else if (gameState === "PAUSE") {
      gameState = "PLAY";
    }
  }
  if (key === 'f' || key === 'F'){
    if (gameState === "RAT_ENCOUNTER") {
      if (weapon === false) {
        player.health -= 20;
        gameState = "RAT_FIGHT";
      }
      if (weapon === true) {
        ratsDefeated++;
        gameState = "PLAY";
      }
    }
  }
  if (key === 'q' || key === 'Q') {
    if (gameState === "PAUSE") {
      gameState = "START_MENU";
    }
  }
  if (key === 'r' || key === 'R') {
    if (gameState === "RAT_ENCOUNTER") {
      gameState = "RAT_BITE";
      player.health -= 10;
    } else if (gameState === "RAT_FIGHT") {
      gameState = "PLAY";
    } else if (gameState === "RAT_BITE") {
      gameState = "PLAY";
    } else if (gameState === "GAME_OVER") {
      gameState = "START_MENU";
    }
  }
  if (key === ' ') {
    if (gameState === "YOU_DIED") {
      gameState = "GAME_OVER";
    } else if (gameState === "GAME_OVER") {
      newGame();
    }
  }
  if (key === 'Enter') {
    if (gameState === "START_MENU") {
      gameState = "INTRODUCTIONS";
    } else if (gameState === "INTRODUCTIONS") {
      if (nameInput.value() !== "") {
        nameInput.remove();
        nameInput = null;
        gameState = "START_OBJECTIVE";
      }
    } else if (gameState === "START_OBJECTIVE") {
      gameState = "PLAY";
      if (!gameEnded) {
        startTime = Date.now();
      }
    } else if (gameState === "VICTORY") {
      gameState = "START_MENU";
    }
  }
} //end keyPressed()


