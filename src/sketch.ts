//---- GLOBAL VARIABLES ----//
let gameFrame: GameFrame;
let subImage: p5.Image | p5.Element;
let icebergImage: p5.Image | p5.Element;
let mineImage: p5.Image | p5.Element;
let sunkenShipImage: p5.Image | p5.Element;
let supplyBox: p5.Image | p5.Element;
let rangePowerUp: p5.Image | p5.Element;
let pulsePowerUp: p5.Image | p5.Element;
let explosion: p5.Image | p5.Element;
let icebergCrack: p5.Image | p5.Element;

function preload() {
  subImage = loadImage("./assets/images/sub.png");
  icebergImage = loadImage("./assets/images/iceberg4.png");
  mineImage = loadImage("./assets/images/mine.png");
  sunkenShipImage = loadImage("assets/images/sunken-ship.png");
  supplyBox = loadImage("./assets/images/power-up.png");
  rangePowerUp = loadImage("./assets/images/range.png");
  pulsePowerUp = loadImage("./assets/images/pulse.png");
  explosion = loadImage("./assets/images/mineboom.gif");
  icebergCrack = loadImage("./assets/images/icebergC.png");
}

function setup() {
  reset();
}

function reset() {
  gameFrame = new GameFrame();
  createCanvas(960, 720);
  frameRate(60);
}


function draw() {
  gameFrame.draw();
  gameFrame.update();
}

