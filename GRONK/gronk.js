const GRID_SIZE = 20;

//declare characters
let player;
let rat;
let encounter = "";

//create canvas + characters
function setup() {
  createCanvas(700, 700);
  player = new Player();
  rat = new Rat();

}

//draw in background(grid)
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
//player interactions
  player.update();
  if (player.ratEncounter()) {
    encounter = "oh no its a rat!";
    rat.spawn();
  } else {
    encounter = "";
  }
  fill (0);
  textSize(32);
  text(encounter, 10, 50);
  player.draw();
  rat.draw();
}


