//GAME STATES FOR VISUALS

function playGame() {
  textSize(15);
  drawMap();
  statusBarBack();
  healthBar();
  objective();
  if (weapon == false) {  //can also use (!weapon)
    weaponBox();
  } else {
    weaponEquipped();
    console.log('Weapon found');
  }

  // Player interactions
  player.move();
  player.draw();
  sword.draw();

  for (let rat of rats) {
    rat.draw();
    if (player.ratEncounter(rat)) {
      gameState = "RAT_ENCOUNTER";
      if (ratsDefeated <= 5) {
        console.log('Spawning rat...');
        rat.spawn();
      }
      if (ratsDefeated >= 5) {
        console.log('Dont spawn rat!');
        player.defeatRat(rat);
        rat.spawn();
      }
    } else {
      encounter = "";
    }
  }
  
  if (player.swordGet()) {
    weapon = true;
    sword.visible = false;
  }
  if (player.health <= 0){
    gameState = "YOU_DIED";
  }
  if (ratsDefeated === 10) {
    gameState = "VICTORY";
  }
}

function startMenu() {
  //background(0);
  //fill(0, 204, 0);
  //textSize(40);
  textAlign(LEFT);
  //text("GRONK", width/4, height/4);
  image(gronkTitle, 0, 0, 700, 700);
  fill(255);
  textSize(25);
  text("Press enter to start", width/4, height/2);
  textSize(15);
  text("Created by gingeapple182", width - width/3, height - height / 15);
}

function levelStart() {
  background(0);
  fill(255);
  textSize(25);
  textAlign(LEFT);
  text("Gronk you must defeat the rats surrounding us!", width/4, height/2);
  textSize(20);
  text("Press enter to start", width/4, height/2+30);
} 

function pauseScreen() {
  background(0); //set background to black
  fill(255); //set text colour to white
  textSize(32);
  textAlign(LEFT);
  text("Game Paused", width/2, height/2);
  textSize(25);
  text("Press 'p' to resume", width/2, height/2+40);
  text("Press 'q' to quit to main menu", width/2, height/2+70);
}

function victory() {
  background(0);
  fill(255);
  textSize(40);
  textAlign(LEFT);
  text("Congratulations!", width/4, height/2);
  textSize(25);
  text("Press enter to quit to main menu", width/4, height/2+40);
}  

function youDied() {
  background(0);
  fill(255, 0, 0);
  textSize(40);
  textAlign(LEFT);
  text("You died", width/3, height/3);
  textSize(25);
  text("Press space to continue", width/3, height/3+30);
}

function gameOver() {
  background(0);
  fill(255, 0, 0);
  textSize(40);
  textAlign(LEFT);
  text("Game Over", width/3, height/3);
  textSize(25);
  text("Press space to restart", width/3, height/3+30);
  text("Press 'r' to go back to home", width/3, height/3+60);
}

function newGame() {
  gameState = "PLAY";
  player.body[0] = {x: width/2, y: height/2};
  player.health = 100;
  sword.spawn();
  weapon = false;
  sword.visible = true;
}
