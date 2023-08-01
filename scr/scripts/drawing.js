//! GAME CODE
function loop() {
  requestAnimationFrame(loop);
  c.clearRect(0, 0, canvas.width, canvas.height);
  // Input
  keysMove(`y += ${scroll.speed}`, ["w", "ArrowUp"]);
  keysMove(`x += ${scroll.speed}`, ["a", "ArrowLeft"]);
  keysMove(`y -= ${scroll.speed}`, ["s", "ArrowDown"]);
  keysMove(`x -= ${scroll.speed}`, ["d", "ArrowRight"]);

  // Drawing
  if (!inGame) {
    drawTitleScreen(75);
  } else {
    drawGrid(scroll.x, scroll.y);
  }
  c.fillStyle = "rgb(255, 0, 0)";
  createButton(100, 100, 100, 100, "left", `console.log("CLICK")`);
  c.fill();
  // console.log(keys.key);
}
loop();
