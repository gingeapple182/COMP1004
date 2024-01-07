class Rat {
  constructor() {
    this.spawn();
  }
//allow rat to respawn after encounter
  spawn() {
    let randX = random(width);
    let randY = random(height);
    this.x = randX - randX % (width / GRID_SIZE);
    this.y = randY - randY % (height / GRID_SIZE);
  }
//rat looks
  draw() {
    fill(128, 128, 128);
    rect(this.x, this.y, width/GRID_SIZE, height/GRID_SIZE);
  }

}