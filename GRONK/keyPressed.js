function keyPressed() 
{
  if (key === 'p' || key === 'P') {
    if (gameState === "PLAY") {
      gameState = "PAUSE";
    } else if (gameState === "PAUSE") {
      gameState = "PLAY";
    }
  }
  if (key === 'f' || key === 'F'){
    if (gameState === "RAT_FIGHT") {
      player.health -= 20;
      gameState = "PLAY";
    }
  }
  if (key === 'r' || key === 'R') {
    if (gameState === "RAT_FIGHT") {
      gameState = "PLAY";
    } else if (gameState = "GAME_OVER") {
      gameState = "NEW_GAME";
    }
  }
  if (key === ' ') {
    if (gameState === "YOU_DIED") {
      gameState = "GAME_OVER";
    } else if (gameState === "GAME_OVER") {
      gameState = "PLAY";
      player.body[0] = {x: width/2, y: height/2};
      player.health = 100;
    }
  }
  if (key === 'Enter') {
    if (gameState === "NEW_GAME") {
      gameState = "PLAY";
    }
  }
} //end keyPressed()

