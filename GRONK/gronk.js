//MAIN SETUP AND CONTROLS OF GRONK

// Declare the size of the grid
const GRID_SIZE = 25;

// Declare characters and game state variables
let player, sword;
let rats = [];
let ratsDefeated = 0;
let weapon = false;
let encounter = "";
let cubes = [];
let gameState = "START_MENU";
let playerImage;
let knifeImage;

function preload() {
  playerImage = loadImage('images/playerDefault.png');
  knifeImage = loadImage('images/knifeBasic.png');
}

// Setup function: creates the canvas, initializes the characters, and generates the cubes
function setup() {
  createCanvas(700, 700);
  player = new Player();
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
      ratFight();
      break;
    case "RAT_FIGHT":
      ratLose()
      break;
    case "RAT_BITE":
      ratBite();
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
    } else if (gameState = "RAT_FIGHT") {
      gameState = "PLAY";
    } else if (gameState = "RAT_BITE") {
      gameState = "PLAY";
    } else if (gameState = "GAME_OVER") {
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
      gameState = "START_OBJECTIVE";
    } else if (gameState === "START_OBJECTIVE") {
      gameState = "PLAY";
    } else if (gameState === "VICTORY") {
      gameState = "START_MENU";
    }
  }
} //end keyPressed()


