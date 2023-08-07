const body = document.querySelector("body");
const head = document.querySelector("head");

let inGame = false;

function startGame() {
  // delete the title screen
  let titleScreen = body.querySelector(".title-screen");
  let deletedTitleScreen = body.removeChild(titleScreen);

  // Add the canvas
  const newCanvas = document.createElement("canvas");
  body.appendChild(newCanvas);

  // const gameSetupScript = document.createElement("script");
  // gameSetupScript.type = "text/javascript";
  // gameSetupScript.src = "scrscriptscanvasgame setup.js";
  // gameSetupScript.defer = "defer";
  // head.appendChild(gameSetupScript);

  inGame = true;
}
