const GRID_SIZE = 20;

//declare characters
let player;
let rat;
let encounter = "";
let gameState = "PLAY";

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
    player.update();
    if (player.ratEncounter()) {
      gameState = "RAT_FIGHT";
      rat.spawn();
    } else {
      encounter = "";
    }
    
    player.draw();
    rat.draw();
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
      gameState = "YOU_DIED";
    }
  }
  if (key === 'r' || key === 'R') {
    if (gameState === "RAT_FIGHT") {
      gameState = "PLAY";
    }
  }
  if (key === ' ') {
    if (gameState === "YOU_DIED") {
      gameState = "GAME_OVER";
    }
    else if (gameState === "GAME_OVER") {
      gameState = "PLAY";
      player.body[0] = {x: width/2, y: height/2};
    }
  }
} //end keyPressed()

