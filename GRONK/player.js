class Player {
  constructor() {
    this.body = [];
    this.body.push({x: width/2, y: height/2});
    this.dir = 0;
  }

  draw() {
    fill (255, 128, 0);
    for (let b of this.body) {
      rect(b.x, b.y, width/GRID_SIZE, height/GRID_SIZE)
    }
  }

  update() {
    if (this.dir !== 0) {

      this.lastX = this.body[this.body.length-1].x;
      this.lastY = this.body[this.body.length-1].y;
      for (let i = this.body.length-1; i >= 1; i--) {
        this.body[i].x = this.body[i-1].x;
        this.body[i].y = this.body[i-1].y;
      }
    }

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

  ratEncounter() {
    if (this.body[0].x == rat.x && this.body[0].y == rat.y) {
      return true;
    }
  }

}