// Declare the size of the grid
const GRID_SIZE = 25;

// Declare characters and game state variables
let player, rat, sword;
let weapon = false;
let encounter = "";
let gameState = "START_MENU";

// Setup function: creates the canvas and initializes the characters
function setup() {
  createCanvas(700, 700);
  player = new Player();
  rat = new Rat();
  sword = new Sword();
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

// Function for the "PLAY" game state
function playGame() {
  drawMap();
  player.statusBarBack();

  // Player interactions
  player.move();
  if (player.ratEncounter()) {
    gameState = "RAT_FIGHT";
    rat.spawn();
  } else {
    encounter = "";
  }

  player.draw();
  player.healthBar();
  rat.draw();
  sword.draw();

  if (player.swordGet()) {
    weapon = true;
    sword.visible = false;
  }

  if (player.health <= 0){
    gameState = "YOU_DIED";
  }
}
