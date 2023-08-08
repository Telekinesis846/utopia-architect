//! CONSTANTS
const canvas = document.querySelector("canvas"); // Makes the canvas variable the canvas element
const c = canvas.getContext("2d"); // Sets the variable c to being able to draw on the canvas

//! CANVAS WIDTH AND HEIGHT
canvas.width = canvas.clientWidth; // Sets the canvas width to the client width and the canvas height to the client height
canvas.height = canvas.clientHeight;

//! VARIABLES
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
  data: [
    /*
    * This is an example of the grid
    [{}, {}, {}],
    [{}, {}, {}],
    [{}, {}, {}],
    */
  ],
};

// Calculates the values with expressions
grid.pixels.y = 0.5 * canvas.height - (grid.squareSize * grid.height) / 2;
grid.pixels.width = grid.width * grid.squareSize;
grid.pixels.height = grid.height * grid.squareSize;

let mouse = {
  x: undefined,
  y: undefined,
  type: undefined,
};
let keys = {
  isDown: false,
  all: {},
};

let scroll = {
  x: 0,
  y: 0,
  speed: 10,
};

//! FUNCTIONS
function drawTitleScreen(title, titleSize) {
  c.fillStyle = "rgb(0, 51, 0)";
  c.textAlign = "center";
  c.font = `${titleSize}px Lucida Console`;
  c.fillText(title, 0.5 * canvas.width - titleSize / 2, titleSize + 30);
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

function keysMove(action, keyInput) {
  // * ex MoveKeys("x += 5", "w")
  if (keys["all"][keyInput]) {
    eval(`scroll.${action}`);
  }
}

function hoveringOver(startX, startY, endX, endY, type) {
  if (type == "4pos") {
    if (
      mouse.x >= startX &&
      mouse.y >= startY &&
      mouse.x <= endX &&
      mouse.y <= endY
    ) {
      return true;
    } else {
      return false;
    }
  } else if (type == "2pos") {
    if (
      //! In this the variables are named wrongly because the 2pos type is being used, which uses the same structure as c.rect()
      mouse.x >= startX &&
      mouse.y >= startY &&
      mouse.x <= endX + startX &&
      mouse.y <= endY + startY
    ) {
      return true;
    } else {
      return false;
    }
  }
}

function createButton(xPos, yPos, width, height, mouseType, clickFunction) {
  c.rect(xPos, yPos, width, height);
  if (
    hoveringOver(xPos, yPos, width, height, "2pos") &&
    mouse.type === mouseType
  ) {
    eval(clickFunction);
  }
}

//! CLASSES
class Tile {
  constructor(
    xPos,
    yPos,
    sheet,
    textureX,
    textureY,
    TextureWidth,
    TextureHeight
  ) {
    this.xPos = xPos;
    this.yPos = yPos;

    this.sheet = sheet;

    this.textureX = textureX;
    this.textureY = textureY;

    this.width = TextureWidth;
    this.height = TextureHeight;

    this.image = document.createElement("img");
    this.image.src = this.sheet;
  }
  createSheet() {
    let images = document.querySelectorAll("img");
    let imagesContainer = document.querySelector("div #images");

    for (const image of images) {
      if (image.src !== this.sheet) {
        let sheetImage = document.createElement("img");
        sheetImage.src = this.sheet;

        imagesContainer.appendChild(sheetImage);
      }
    }
  }
  render() {
    c.drawImage(this.image, this.xPos, this.yPos);
  }
}

//! EVENT LISTENERS
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
window.addEventListener("keydown", function (event) {
  keys["all"][event.key] = true;
  keys.isDown = true;
});

window.addEventListener("keyup", function (event) {
  keys["all"][event.key] = false;
  keys.isDown = false;
});

window.addEventListener("mousedown", function (event) {
  event.preventDefault();
  if (event.button == 0) {
    mouse.type = "left";
  }
  if (event.button == 1) {
    mouse.type = "middle";
  }
  if (event.type == 2) {
    mouse.type = "right";
  }
  // console.log(mouse.type);
});
window.addEventListener("mouseup", function (event) {
  mouse.type = "up";
});

testTile = new Tile(
  10,
  10,
  "images/buttons/fullscreen/enter.svg",
  0,
  0,
  20,
  20
);
testTile.createSheet();
