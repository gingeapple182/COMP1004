function statusBarBack() {
  fill(128, 128, 128);
  rect(0, 640, 700, 60); //(location, location, size, size)
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
  let words = input.split(' ');
  let line = '';
  let lineHeight = 20; // Line height

  for (let i = 0; i < words.length; i++) {
    let testLine = line + words[i] + ' ';
    let testWidth = textWidth(testLine);
    if (testWidth > maxWidth && i > 0) {
      text(line, x, y);
      line = words[i] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  text(line, x, y);
}