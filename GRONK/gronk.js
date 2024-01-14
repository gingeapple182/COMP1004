const GRID_SIZE = 25;

//declare characters
let player;
let rat;
let sword;
let weapon = false;
let encounter = "";
let gameState = "START_MENU";

//create canvas + characters
function setup() 
{
  createCanvas(700, 700); 	//(windowWidth, 700);
  player = new Player();
  rat = new Rat();
  sword = new Sword();
} //end setup()

function draw() 
{
  if (gameState === "PLAY") {
    drawMap();
    player.statusBarBack();
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
    sword.draw();
  if (player.swordGet()) {
    weapon = true;
    sword.visible = false;
  }
  if (player.health <= 0){
    gameState = "YOU_DIED";
  }
  } else if (gameState === "START_MENU") {
    startMenu();
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


