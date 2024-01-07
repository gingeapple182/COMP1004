const GRID_SIZE = 20;

let player;

function setup() {
  createCanvas(700, 700);
  player = new Player();
}

function draw() {
  background(121, 118, 90);
  for (let x = 0; x < width; x += width/GRID_SIZE) {
    for (let y = 0; y < height; y += height/GRID_SIZE) {
      stroke(140, 118, 90);
      strokeWeight(1);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
  player.update();
  player.draw();
  
}

