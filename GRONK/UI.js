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