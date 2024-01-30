class Rat {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.spawn();
    this.visible = true;
    this.defeated = false;
  }
//allow rat to respawn after encounter
  spawn() {
    console.log('Rat spawned!');
    let randX, randY;
    do {
      randX = random(width);
      randY = random(height - 70);
    } while (dist(randX, randY, this.x, this.y) < GRID_SIZE);
    this.x = randX - randX % (width / GRID_SIZE) + width/(2*GRID_SIZE);
    this.y = randY - randY % (height / GRID_SIZE) + height/(2*GRID_SIZE);
  }
//rat looks
  draw() {
    if (this.visible) {
      fill(128, 128, 128);
      rect(this.x - width/(2*GRID_SIZE), this.y - height/(2*GRID_SIZE), width/GRID_SIZE, height/GRID_SIZE);
      //image(knifeImage, this.x - width/(2*GRID_SIZE), this.y - height/(2*GRID_SIZE), width/GRID_SIZE, height/GRID_SIZE);

    }
  }
}

class Sword {
  constructor() {
    this.x = 660;
    this.y = 20;
    this.visible = true;
  }
  spawn() {
    this.x = 660; // reset x position
    this.y = 20; // reset y position
    this.visible = true; // make the sword visible
  }
  draw() {
    if (this.visible) {
      //fill(0, 240, 0);
      //noStroke();
      image(knifeImage, this.x, this.y, 20, 20);
    }
    //stroke(0);
  }
}