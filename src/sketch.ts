//---- GLOBAL VARIABLES ----//
// let game: Game;
let subImage: p5.Image | p5.Element;
let bg: p5.Image | p5.Element; 
let sub: Sub; 
let angle = 0;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    subImage = loadImage('./assets/images/sub.png');
    bg = loadImage('./assets/images/Background.png')
    // sound = (window as any).loadSound('../assets/mySound.wav');
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(800, 12000);
    frameRate(60);
    noCursor();
    
    // game = new Game();
}

function keyPressed(){
    console.log(angle)
    if (keyIsDown(LEFT_ARROW)) {
        angle = angle - 1;
    } else if (keyIsDown(RIGHT_ARROW)){
        angle = angle + 1;
    } 
}

/* function mouseMoved(event) {
    console.log(event);
} */

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
 
    background(bg);
    angleMode(DEGREES)
    push()
    translate(mouseX, mouseY)
    keyPressed()
    rotate(angle);
    image(subImage,-25, -125, 50, 250);
    pop()

    // game.update();
    // game.draw();
}




  