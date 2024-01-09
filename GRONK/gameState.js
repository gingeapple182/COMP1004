function newGame() {
  background(0);
  fill(0, 204, 0);
  textSize(40);
  text("GRONK", width/4, height/4);
  fill(255);
  textSize(25);
  text("Press enter to start", width/4, height/2);
  textSize(15);
  text("Created by gingeapple182", width - width/3, height - height / 15);
}

function drawMap() {
  background(121, 118, 90);
  for (let x = 0; x < width; x += width/GRID_SIZE) {
    for (let y = 0; y < height; y += height/GRID_SIZE) {
      stroke(140, 118, 90);
      strokeWeight(1);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
}

function pauseScreen() {
  background(0); //set background to black
  fill(255); //set text colour to white
  textSize(32);
  text("Game Paused", width/2, height/2);
  textSize(25);
  text("Press 'p' to resume", width/2, height/2+40);
  text("Press 'q' to quit to main menu", width/2, height/2+70);
}

function youDied() {
  background(0);
  fill(255, 0, 0);
  textSize(40);
  text("You died", width/3, height/3);
  textSize(25);
  text("Press space to continue", width/3, height/3+30);
}

function gameOver() {
  background(0);
  fill(255, 0, 0);
  textSize(40);
  text("Game Over", width/3, height/3);
  textSize(25);
  text("Press space to restart", width/3, height/3+30);
  text("Press 'r' to go back to home", width/3, height/3+60);
}

