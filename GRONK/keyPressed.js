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
      if (weapon === false) {
        player.health -= 20;
      } 
      gameState = "PLAY";
    }
  }
  if (key === 'q' || key === 'Q') {
    if (gameState === "PAUSE") {
      gameState = "START_MENU";
    }
  }
  if (key === 'r' || key === 'R') {
    if (gameState === "RAT_FIGHT") {
      gameState = "PLAY";
      player.health -= 10;
    } else if (gameState = "GAME_OVER") {
      gameState = "START_MENU";
    }
  }
  if (key === ' ') {
    if (gameState === "YOU_DIED") {
      gameState = "GAME_OVER";
    } else if (gameState === "GAME_OVER") {
      newGame();
    }
  }
  if (key === 'Enter') {
    if (gameState === "START_MENU") {
      newGame();
    }
  }
} //end keyPressed()



