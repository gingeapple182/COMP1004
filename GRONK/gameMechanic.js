//GAME STATES FOR HYPERTEXT INTERACTIVITY

function fightEncounter(encounterText, hpLoss, creature) {
  console.log(creature + " encounter function called");
  currentScreen = 5;
  image(screens[currentScreen], 0,0, 700, 700);
  textAlign(CENTER);
  noStroke();
  fill(255);
  textSize(40);
  text('ENCOUNTER', width/2, height/9);
  textAlign(LEFT);
  textSize(20);
  drawText(encounterText, width/12, height/4, 250);
  text("Press 'f' to fight", width/2, height - height/3+30);
  text("Press 'r' to run away", width/2, height - height/3+60);
  fill(255, 0, 0);
  textSize(12);
  text("Lose 10HP", width/2+200, height - height/3+60);
  if (!weapon) {
    text("Lose " + hpLoss + "HP", width/2+200, height - height/3+30);
  }
  currentScreen = 4;
  image(screens[currentScreen], 0,0, 700, 700);
}

function encounterOutcome() {
  console.log(creature + "encounter function called");
  currentScreen = 5;
  image(screens[currentScreen], 0,0, 700, 700);
  textAlign(CENTER);
  noStroke();
  fill(255);
  textSize(40);
  text('ENCOUNTER', width/2, height/9);
  textAlign(LEFT);
  textSize(20);
  drawText(encounterText, width/12, height/4, 250);
  text("Press 'f' to fight", width/2, height - height/3+30);
  text("Press 'r' to run away", width/2, height - height/3+60);
  fill(255, 0, 0);
  textSize(12);
  text("Lose 10HP", width/2+200, height - height/3+60);
  if (!weapon) {
    text("Lose " + hpLoss + "HP", width/2+200, height - height/3+30);
  }
  currentScreen = 4;
  image(screens[currentScreen], 0,0, 700, 700);
}

/*function ratFight() {
  console.log("ratFight function called");
  textAlign(CENTER);
  currentScreen = 5;
  image(screens[currentScreen], 0,0, 700, 700);
  noStroke();
  fill(255);
  textSize(40);
  text('ENCOUNTER', width/2, height/9);
  textAlign(LEFT);
  textSize(20);
  drawText('You have encountered a wild rat.\nIt seems just as scared of you as you are of it, you can choose to attack it to scare it off, or try to get away.', width/12, height/4, 250);
  text("Press 'f' to fight", width/2, height - height/3+30);
  text("Press 'r' to run away", width/2, height - height/3+60);
  fill(255, 0, 0);
  textSize(12);
  text("Lose 10HP", width/2+200, height - height/3+60);
  if (!weapon) {
    text("Lose 20HP", width/2+200, height - height/3+30);
  }
  currentScreen = 4;
  image(screens[currentScreen], 0,0, 700, 700);
}*/

function ratLose() {
  console.log("ratLose function called");
  currentScreen = 3;
  image(screens[currentScreen], 0,0, 700, 700);
  textAlign(LEFT);
  //background(0); //set background to black
  fill(255); //set text colour to white
  textSize(20);
  text("You tried to fight without a weapon", width/4, height/4);
  text("You lost", width/4, height/4+30);
  text("Press 'r' to run away", width/4, height/4+60);
  fill(255, 0, 0);
  textSize(12);
  text("Lost 20HP", width/4+200, height/4+30);
}

function ratBite() {
  console.log("ratBite function called");
  currentScreen = 3;
  image(screens[currentScreen], 0,0, 700, 700);
  textAlign(LEFT);
  //background(0); //set background to black
  fill(255); //set text colour to white
  textSize(20);
  text("You tried running away", width/4, height/4);
  text("The rat bit your ankle", width/4, height/4+30);
  text("Press 'r' to run away", width/4, height/4+60);
  fill(255, 0, 0);
  textSize(12);
  text("Lost 10HP", width/4+200, height/4+30);
}
