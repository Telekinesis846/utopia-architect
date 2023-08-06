let body = document.querySelector("body");

function startGame() {
  // delete the title screen
  let titleScreen = body.querySelector(".title-screen");
  let deletedTitleScreen = body.removeChild(titleScreen);

  // Add the canvas
  const newCanvas = document.createElement("canvas");
  body.appendChild(newCanvas);
  gameSetup();
  loop();
}
