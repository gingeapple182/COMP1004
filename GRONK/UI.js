let grass = false;

// Function for drawing the map
function drawMap() {
  currentScreen = 2;
  image(screens[currentScreen], 0,0, 700, 700);
  if (!grass) {
    for (let i = 0; i < 100; i++) {
      let x = random(width);
      let y = random(height);
      let size = random(20, 50);
      let col = color(0, 200, 0);
      cubes.push({x, y, size, col});
    }
    grass = true;
  }
  //background(0, 120, 0); // Set the background color to green
  fill(0, 210, 0);
  //rect(5, 5, 690, 630);
  // Draw the cubes
  for (let cube of cubes) {
    fill(cube.col);
    //stroke(cube.col);
    noStroke();
    rect(cube.x, cube.y, cube.size, cube.size);
  }
  stroke(0);
}

function statusBarBack() {
  fill(128, 128, 128);
  rect(0, 630, 700, 70); //(location, location, size, size)
}

function healthBar() {
  fill(0);
  textAlign(CENTER);
  text('Health', 120, 655);
  fill(255);
  rect(20, 660, 200, 20);
  fill(255, 0, 0);
  rect(20, 660, player.health * 2, 20);
} //end healthBar()

function weaponBox() {
  fill(0);
  text('Weapon', 670, 655);
  fill(128, 128, 128);
  rect(660, 660, 20, 20);
}

function weaponEquipped() {
  fill(0);
  text('Weapon', 670, 655);
  fill(0, 190, 0);
  rect(660, 660, 20, 20);
}

function objective() {
  fill(0);
  text('Rats defeated: ' + ratsDefeated, 355, 670);
}

function drawText(input, x, y, maxWidth) {
  let lines = input.split('\n'); //split for new line 
  let lineHeight = 20; //line height

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    let words = lines[lineIndex].split(' '); //split lines into array of words
    let line = ''; 

    for (let i = 0; i < words.length; i++) {
      let testLine = line + words[i] + ' '; //add words into the line
      let testWidth = textWidth(testLine); //test if line is longer than contstraints
      if (testWidth > maxWidth && i > 0) {
        text(line, x, y); //print line
        line = words[i] + ' '; //start new line with word that went too long
        y += lineHeight; //increase line height
      } else {
        line = testLine;
      }
    }
    text(line, x, y); //print line
    y += lineHeight; //increase line height
  }
}