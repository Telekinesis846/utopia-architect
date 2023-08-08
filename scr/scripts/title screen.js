const body = document.querySelector("body");
const head = document.querySelector("head");

let inGame = false;
let game = {
  level: {},
};

const fullScreenButton = document.querySelector(".full-screen-button");
const fullScreenImage = document.querySelector(".full-screen-button > img");

function toggleFullscreen() {
  if (window.innerHeight !== screen.height) {
    document.documentElement.requestFullscreen();
    if (inGame === false) {
      fullScreenImage.src = "images/buttons/fullscreen/exit.svg";
    }
    return;
  }
  if (inGame === false) {
    fullScreenImage.src = "images/buttons/fullscreen/enter.svg";
  }
  document.exitFullscreen();
}

fullScreenButton.addEventListener("click", toggleFullscreen);

function startGame() {
  // delete the title screen
  let titleScreen = body.querySelector(".title-screen");
  let deletedTitleScreen = body.removeChild(titleScreen);

  game.level.number = 0;

  inGame = true;
  loop();
}

function viewLevels() {
  console.log("%cLevels Viewed!", "color: lime; font-size: 2rem;");
}
