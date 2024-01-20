//GAME STATES FOR HYPERTEXT INTERACTIVITY

function ratFight() {
  textAlign(LEFT);
  background(0); //set background to black
  fill(255); //set text colour to white
  textSize(20);
  text("You have encountered a wild rat", width/4, height/4);
  text("Press 'f' to fight", width/4, height/4+30);
  text("Press 'r' to run away", width/4, height/4+60);
  fill(255, 0, 0);
  textSize(12);
  text("Lose 10HP", width/4+200, height/4+60);
  if (weapon === false) {
    text("Lose 20HP", width/4+200, height/4+30);
  }
}

function ratLose() {
  textAlign(LEFT);
  background(0); //set background to black
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
  textAlign(LEFT);
  background(0); //set background to black
  fill(255); //set text colour to white
  textSize(20);
  text("You tried running away", width/4, height/4);
  text("The rat bit your ankle", width/4, height/4+30);
  text("Press 'r' to run away", width/4, height/4+60);
  fill(255, 0, 0);
  textSize(12);
  text("Lost 10HP", width/4+200, height/4+30);
}
