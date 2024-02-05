//GAME STATES FOR HYPERTEXT INTERACTIVITY

function ratFight() {
  console.log("ratFight function called");
  textAlign(CENTER);
  background(0); //set background to black
  fill(255);
  textSize(40);
  text('ENCOUNTER', width/2, height/10);
  textAlign(LEFT);
  textBox = 'You have encountered a wild rat, it seems just as scared of you as you are of it, you can choose to attack it to scare it off, or try to get away.';
  textSize(20);
  textAlign(LEFT);
  drawText(textBox, width/9, height/5, 250); // Use the drawText function here
  text("Press 'f' to fight", width/2, height - height/3+30);
  text("Press 'r' to run away", width/2, height - height/3+60);
  fill(255, 0, 0);
  textSize(12);
  text("Lose 10HP", width/2+200, height - height/3+60);
  if (weapon === false) {
    text("Lose 20HP", width/2+200, height - height/3+30);
  }
}

function ratLose() {
  console.log("ratLose function called");
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
  console.log("ratBite function called");
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
