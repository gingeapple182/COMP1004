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

// Setup function: creates the canvas, initializes the characters, and generates the cubes
function setup() {
  createCanvas(700, 700);
  player = new Player();
  sword = new Sword();
  for (let i = 0; i < 5; i++) {
    rats[i] = new Rat();
  }
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
    case "PAUSE":
      pauseScreen();
      break;
    case "RAT_FIGHT":
      ratFight();
      break;
    case "YOU_DIED":
      youDied();
      break;
    case "GAME_OVER":
      gameOver();
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
    if (gameState === "RAT_FIGHT") {
      if (weapon === false) {
        player.health -= 20;
      }
      if (weapon === true) {
        ratsDefeated++;
      }
      gameState = "PLAY";
    }
  }
  if (key === 'q' || key === 'Q') {
    if (gameState === "PAUSE") {
      gameState = "START_MENU";
    }
  }
  if (key === 'r' || key === 'R') {
    if (gameState === "RAT_FIGHT") {
      gameState = "PLAY";
      player.health -= 10;
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
      newGame();
    }
  }
} //end keyPressed()


