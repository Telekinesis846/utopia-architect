function startGame() {
  let body = document.querySelector("body");
  let titleScreen = body.querySelector(".title-screen");
  let deletedTitleScreen = body.removeChild(titleScreen);
  loop();
}
