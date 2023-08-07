const body = document.querySelector("body");
const head = document.querySelector("head");

let inGame = false;

const fullScreenButton = document.querySelector(".full-screen-button");

fullScreenButton.addEventListener("click", () => {
  if (window.innerHeight !== screen.height) {
    document.documentElement.requestFullscreen();
    fullScreenButton.textContent = "Exit Fullscreen";
    return;
  }
  fullScreenButton.textContent = "Enter Fullscreen";
  document.exitFullscreen();
});

function startGame() {
  // delete the title screen
  let titleScreen = body.querySelector(".title-screen");
  let deletedTitleScreen = body.removeChild(titleScreen);

  // // Add the canvas
  // const newCanvas = document.createElement("canvas");
  // body.appendChild(newCanvas);

  // const gameSetupScript = document.createElement("script");
  // gameSetupScript.type = "text/javascript";
  // gameSetupScript.src = "scrscriptscanvasgame setup.js";
  // gameSetupScript.defer = "defer";
  // head.appendChild(gameSetupScript);

  inGame = true;
  loop();
}
