
class Player {
  constructor() {
    this.body = [];
    this.body.push({x: width/2, y: height/2});
    this.dir = 0;
    this.health = 100;
  }
//player looks
  draw() {
    //fill (255, 128, 0);
    
    for (let b of this.body) {
      //rect(b.x-width/(2*GRID_SIZE), b.y-height/(2*GRID_SIZE), width/GRID_SIZE, height/GRID_SIZE)
      image(playerImage, b.x-width/(2*GRID_SIZE), b.y-height/(2*GRID_SIZE), width/GRID_SIZE * 1.5, height/GRID_SIZE * 1.5);
    }
  } //end draw()

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
    this.body[0].x = constrain(this.body[0].x, 10, width - GRID_SIZE + 10);
    this.body[0].y = constrain(this.body[0].y, 10, height - GRID_SIZE - 60 + 10);
  } //end move()

//detect collision with rat
  ratEncounter(rat) {
    let d = dist(this.body[0].x, this.body[0].y, rat.x, rat.y);
    if (d < GRID_SIZE) {
      //this.defeatRat(rat);
      return true;
    } else {
      return false;
    }
  } //end ratEncounter()

  defeatRat(rat) {
    rat.defeated = true;
    rat.visible = false;
  }

  swordGet() {
    let d = dist(this.body[0].x, this.body[0].y, sword.x, sword.y);
    if (d < GRID_SIZE) {
      return true;
    } else {
      return false;
    }
  } //end swordGet()

}