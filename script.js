const canvas = document.querySelector("canvas"); // Makes the canvas variable the canvas element
canvas.width = canvas.clientWidth; // Sets the canvas width to the client width and the canvas height to the client height
canvas.height = canvas.clientHeight;

const c = canvas.getContext("2d"); // Sets the variable c to being able to draw on the canvas

// Info about the grid
let grid = {
  width: 4,
  height: 4,
  squareSize: 150,
  pixels: {
    x: 50,
    y: null, // These are null because they are calculated later
    width: null,
    height: null,
    lineWidth: 7,
  },
};
let mouse = {
  x: null,
  y: null,
};
// Calculates the values with expressions
grid.pixels.y = 0.5 * canvas.height - (grid.squareSize * grid.height) / 2;
grid.pixels.width = grid.width * grid.squareSize;
grid.pixels.height = grid.height * grid.squareSize;

let gaming = false;

function drawTitleScreen(titleSize) {
  c.fillStyle = "rgb(0, 51, 0)";
  c.textAlign = "center";
  c.font = `${titleSize}px Lucida Console`;
  c.fillText(
    "Utopia Archiect",
    0.5 * canvas.width - titleSize / 2,
    titleSize + 30
  );
}

function drawGrid() {
  c.lineWidth = grid.pixels.lineWidth * 2;
  // Draws the outline of the grid and the background
  c.fillStyle = "yellowgreen";
  c.rect(grid.pixels.x, grid.pixels.y, grid.pixels.width, grid.pixels.height);
  c.stroke();
  c.fill();

  c.lineWidth = grid.pixels.lineWidth;

  // Draws the vertical lines of the grid
  for (let i = 1; i < grid.width; i++) {
    c.beginPath();
    c.moveTo(grid.pixels.x + i * grid.squareSize, grid.pixels.y);
    c.lineTo(
      grid.pixels.x + i * grid.squareSize,
      grid.pixels.y + grid.pixels.height
    );
    c.stroke();
  }
  for (let i = 1; i < grid.height; i++) {
    c.beginPath();
    c.moveTo(grid.pixels.x, grid.pixels.y + i * grid.squareSize);
    c.lineTo(
      grid.pixels.x + grid.pixels.height,
      grid.pixels.y + i * grid.squareSize
    );
    c.stroke();
  }
}

// Sets the mouse coordinates
window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("resize", function (event) {
  // Sets the canvas width to the client width and the canvas height to the client height, when the window is resized
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
});
drawGrid();

function loop() {
  requestAnimationFrame(loop);
  c.clearRect(0, 0, canvas.width, canvas.height);
  if (!gaming) {
    drawTitleScreen(75);
  } else {
    drawGrid();
  }
}
loop();
