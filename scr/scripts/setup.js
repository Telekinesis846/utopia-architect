function startGame() {
  let body = document.querySelector("body");
  let titleScreen = body.querySelector(".title-screen");
  body.removeChild(titleScreen);
  loop();
}
