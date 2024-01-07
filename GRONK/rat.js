class Rat {
  constructor() {
    this.spawn();
  }

  spawn() {
    let randX = random(width);
    let randY = random(height);
    this.x = randX - randX % (width / GRID_SIZE);
    this.y = randY - randY % (height / GRID_SIZE);
  }

  draw() {
    fill(128, 128, 128);
    rect(this.x, this.y, width/GRID_SIZE, height/GRID_SIZE);
  }

}