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
    y: undefined, // These are undefined because they are calculated later
    width: undefined,
    height: undefined,
    lineWidth: 7,
  },
};
let mouse = {
  x: undefined,
  y: undefined,
  move: [],
};

// Calculates the values with expressions
grid.pixels.y = 0.5 * canvas.height - (grid.squareSize * grid.height) / 2;
grid.pixels.width = grid.width * grid.squareSize;
grid.pixels.height = grid.height * grid.squareSize;

// Initialises variables
let inGame = false;
let scrollX = 0;
let scrollY = 0;

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

function drawGrid(xPos, yPos) {
  c.lineWidth = grid.pixels.lineWidth * 2;
  // Draws the outline of the grid and the background
  c.fillStyle = "yellowgreen";
  c.rect(xPos, yPos, grid.pixels.width, grid.pixels.height);
  c.stroke();
  c.fill();

  c.lineWidth = grid.pixels.lineWidth;

  // Draws the vertical lines of the grid
  for (let i = 1; i < grid.width; i++) {
    c.beginPath();
    c.moveTo(xPos + i * grid.squareSize, yPos);
    c.lineTo(xPos + i * grid.squareSize, yPos + grid.pixels.height);
    c.stroke();
  }
  for (let i = 1; i < grid.height; i++) {
    c.beginPath();
    c.moveTo(xPos, yPos + i * grid.squareSize);
    c.lineTo(xPos + grid.pixels.height, yPos + i * grid.squareSize);
    c.stroke();
  }
}

// Sets the mouse coordinates
window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  // mouse.move.x.push([mouse.x, mouse.y])
});

window.addEventListener("resize", function (event) {
  // Sets the canvas width to the client width and the canvas height to the client height, when the window is resized
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
});

// Moves the camera on key press
window.addEventListener("keypress", function (event) {
  if (event.key === "w") {
    scrollY += 50;
  }
  if (event.key === "a") {
    scrollX -= 50;
  }
  if (event.key === "s") {
    scrollY -= 50;
  }
  if (event.key === "d") {
    scrollX += 50;
  }
});

window.addEventListener("mousedown", function (event) {
  scrollX = mouse.x;
  scrollY = mouse.y;
});
function loop() {
  requestAnimationFrame(loop);
  c.clearRect(0, 0, canvas.width, canvas.height);
  if (!inGame) {
    drawTitleScreen(75);
  } else {
    drawGrid(scrollX, scrollY);
  }
}
loop();
