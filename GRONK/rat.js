class Rat {
  constructor() {
    this.spawn();
  }
//allow rat to respawn after encounter
  spawn() {
    let randX = random(width);
    let randY = random(height);
    this.x = randX - randX % (width / GRID_SIZE) + width/(2*GRID_SIZE);
    this.y = randY - randY % (height / GRID_SIZE) + height/(2*GRID_SIZE);
  }
//rat looks
  draw() {
    fill(128, 128, 128);
    rect(this.x - width/(2*GRID_SIZE), this.y - height/(2*GRID_SIZE), width/GRID_SIZE, height/GRID_SIZE);
  }

}

class Sword {
  constructor() {
    this.x = 660;
    this.y = 20;
    this.visible = true;
  }
  draw() {
    if (this.visible) {
      fill(255, 255, 102);
      rect(this.x, this.y, 20, 20);
    }
  }
}