//---- GLOBAL VARIABLES ----//
// let game: Game;
let subImage: p5.Image | p5.Element;
let bg: p5.Image | p5.Element; 
let gameTimer: number = 0;
let angle: number = 0.0;
let m;
function gameTime() {
    gameTimer += 1;
}
setInterval(gameTime, 1000)
/* */
function Mover() {
    this.pos = new p5.Vector(width/2,height/1.5);
    this.acc = new p5.Vector(0, -10);

    this.move = () => {
        // Calculate the acceleration towards the mouse position
        this.acc = p5.Vector.sub(new p5.Vector(mouseX, mouseY), this.pos);
        this.acc.setMag(1);
        // Update the position with the acceleration
        this.pos.add(this.acc);
    };

    this.draw = () => {
        if (keyIsDown(LEFT_ARROW)) {
            angle = angle - 0.5;
        } else if (keyIsDown(RIGHT_ARROW)){
            angle = angle + 0.5;
        } 
        angleMode(DEGREES)
        console.log(angle)
        push();
        // Translate to the object position
        /* if(gameTimer < 3){
            translate(width/2,height/1.5)
        } else (
            
        ) */
        translate(this.pos.x, this.pos.y);
        // Rotate following the acceleration
        rotate(angle);
        image(subImage,-25, -125, 50, 250);
        fill(200,50)
        rect( -25,-125, 50, 250)
        pop();
    };
}

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
    
    createCanvas(800, windowHeight);
    frameRate(60);

    m = new Mover();
    
    //noCursor();
    // game = new Game();
}



/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    let ship = new Submarine();
    let control = new Control();
    background(bg);
    /* push()
    control.startController()
    ship.show();
    pop() */

    
    m.move();
    m.draw();
    // game.update();
    // game.draw();
}




//create circle with collision detector where if circle border overlaps 
//with object border, objects become visible. 