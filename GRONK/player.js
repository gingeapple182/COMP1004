class Player {
  constructor() {
    this.body = [];
    this.body.push({x: width/2, y: height/2});
    this.dir = 0;
    this.health = 100;
  }
//player looks
  draw() {
    fill (255, 128, 0);
    for (let b of this.body) {
      rect(b.x-width/(2*GRID_SIZE), b.y-height/(2*GRID_SIZE), width/GRID_SIZE, height/GRID_SIZE)
    }
  }

  move() {
//player movement when arrow keys held down
    if (keyIsDown(RIGHT_ARROW)) {
      this.body[0].x += 2;  
    } else if (keyIsDown(DOWN_ARROW)) {
      this.body[0].y += 2;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.body[0].x -= 2;
    } else if (keyIsDown(UP_ARROW)) {
      this.body[0].y -= 2;
    }
  } //end move

  healthBar() {
    fill(255, 0, 0);
    rect(20, 20, this.health * 2, 20);
  }

//detect collision with rat
  ratEncounter() {
    let d = dist(this.body[0].x, this.body[0].y, rat.x, rat.y);
    if (d < GRID_SIZE) {
      return true;
    } else {
      return false;
    }
  }

}