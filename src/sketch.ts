//---- GLOBAL VARIABLES ----//
// let game: Game;
let subImage: p5.Image | p5.Element;
let bg: p5.Image | p5.Element; 
let iceberg: p5.Image | p5.Element;
let gameTimer: number = 0;
let angle: number = 0;
let ship: any;
let control: any;
let ice: any;
let iceBergs: Array<p5.Image> = [];

/* function gameTime() {
    gameTimer += 1;
}
setInterval(gameTime, 1000) */

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
    createCanvas(800, windowHeight);
    frameRate(60);
    cursor(CROSS);
    ice = new Obstacle();
    control = new Control();
    
    // game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    if (random(1) < 0.02){
        iceBergs.push(new Obstacle());
    }
    background(bg);
    control.move();
    control.draw();
    ice.draw()
    
    for(let i of iceBergs){
        i.move()
        i.draw()
    }
    // game.update();
    // game.draw();
}




//create circle with collision detector where if circle border overlaps 
//with object border, objects become visible. 