function loop() {
  requestAnimationFrame(loop);
  c.clearRect(0, 0, canvas.width, canvas.height);
  // Input
  keysMove(`y += ${scroll.speed}`, "w");
  keysMove(`x += ${scroll.speed}`, "a");
  keysMove(`y -= ${scroll.speed}`, "s");
  keysMove(`x -= ${scroll.speed}`, "d");

  drawGrid(scroll.x, scroll.y);

  // console.log(keys.key);
}
