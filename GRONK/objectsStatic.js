let grass = false;

// Function for drawing the map
function drawMap() {
  
if (!grass) {
    for (let i = 0; i < 100; i++) {
      let x = random(width);
      let y = random(height);
      let size = random(20, 50);
      let col = color(0, 200, 0);
      cubes.push({x, y, size, col});
    }
    grass = true;
  }
  background(0, 210, 0); // Set the background color to green
  
  // Draw the cubes
  for (let cube of cubes) {
    fill(cube.col);
    //stroke(cube.col);
    noStroke();
    rect(cube.x, cube.y, cube.size, cube.size);
  }
  stroke(0);
}