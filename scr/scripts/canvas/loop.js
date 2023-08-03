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
    drawTitleScreen("Utopia Architect", 75);
  } else {
    drawGrid(scroll.x, scroll.y);
  }
  c.fillStyle = "rgb(255, 0, 0)";
  createButton(
    0.5 * canvas.width - 100 / 2,
    0.5 * canvas.height - 100 / 2,
    100,
    100,
    "left",
    `console.log("CLICK")`
  );
  c.fill();

  // console.log(keys.key);
}
loop();
