class Player {
  constructor() {
    this.body = [];
    this.body.push({x: width/2, y: height/2});
    this.dir = 0;
  }
//player looks
  draw() {
    fill (255, 128, 0);
    for (let b of this.body) {
      rect(b.x, b.y, width/GRID_SIZE, height/GRID_SIZE)
    }
  }

  update() {
//player movement when arrow keys held down
    if (keyIsDown(RIGHT_ARROW)) {
      this.body[0].x += 1;  
    } else if (keyIsDown(DOWN_ARROW)) {
      this.body[0].y += 1;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.body[0].x -= 1;
    } else if (keyIsDown(UP_ARROW)) {
      this.body[0].y -= 1;
    }
  }
//healthPoints()

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