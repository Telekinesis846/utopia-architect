function loop() {
  requestAnimationFrame(loop);
  c.clearRect(0, 0, canvas.width, canvas.height);
  // Input
  keysMove(`y += ${scroll.speed}`, ["w", "ArrowUp"]);
  keysMove(`x += ${scroll.speed}`, ["a", "ArrowLeft"]);
  keysMove(`y -= ${scroll.speed}`, ["s", "ArrowDown"]);
  keysMove(`x -= ${scroll.speed}`, ["d", "ArrowRight"]);

  drawGrid(scroll.x, scroll.y);

  // console.log(keys.key);
}
