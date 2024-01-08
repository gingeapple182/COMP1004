const GRID_SIZE = 25;

//declare characters
let player;
let rat;
let encounter = "";
let gameState = "NEW_GAME";

//create canvas + characters
function setup() 
{
  createCanvas(700, 700);
  player = new Player();
  rat = new Rat();
} //end setup()

function draw() 
{
  if (gameState === "PLAY") {
    drawMap();
//player interactions
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
  if (player.health <= 0){
    gameState = "YOU_DIED";
  }
  } else if (gameState === "NEW_GAME") {
    newGame();
  } else if (gameState === "PAUSE") {
    pauseScreen();
  } else if (gameState === "RAT_FIGHT") {
    ratFight();
  } else if (gameState === "YOU_DIED") {
    youDied();
  } else if (gameState === "GAME_OVER") {
    gameOver();
  }
} //end draw()


