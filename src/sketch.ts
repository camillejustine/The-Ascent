//---- GLOBAL VARIABLES ----//
let gameFrame: GameFrame;
let subImage: p5.Image | p5.Element;
let bg: p5.Image | p5.Element; 
let iceberg: p5.Image | p5.Element;



/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {

    subImage = loadImage('./assets/images/sub.png');
    bg = loadImage('./assets/images/Background.png')
    iceberg = loadImage('./assets/images/iceberg.png')
    // sound = (window as any).loadSound('../assets/mySound.wav');

}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
  gameFrame = new GameFrame();
  frameRate(60);
  cursor(CROSS);

  
    // game = new Game();

}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    gameFrame.update();
    gameFrame.draw();
}





//create circle with collision detector where if circle border overlaps 
//with object border, objects become visible. 


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(800, windowHeight);
}

