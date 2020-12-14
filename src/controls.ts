class Control {
    
    private right: number;
    private left: number;
    private position: p5.Vector;
    private acceleration: p5.Vector;
    private mouseX: number;
    private mouseY: number;
    
    public constructor(){
        this.position = new p5.Vector(width/2, height/1.5);
        this.acceleration = new p5.Vector(0, -10);
        this.left = LEFT_ARROW;
        this.right = RIGHT_ARROW;
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        //can't read value of this.mouseY, do global key functions need to be declared?
    } 

    public keyPress() {
            if (keyIsDown(this.left)) {
                angle = angle - 1;
            } else if (keyIsDown(this.right)){
                angle = angle + 1;
            } 
        };

    public move() {
            this.keyPress()
            // Calculate the acceleration towards the mouse position
            this.acceleration = p5.Vector.sub(new p5.Vector(mouseX, mouseY), this.position);
            this.acceleration.setMag(1);
            // Update the position with the acceleration
            this.position.add(this.acceleration);
        };
    
    public draw() {
            angleMode(DEGREES)
            push();
            translate(this.position.x, this.position.y);
            rotate(angle);
            image(subImage,-25, -125, 50, 250);
            fill(200,50)
            rect( -25,-125, 50, 250)
            circle(0,0, 1000)
            pop();
        };

}

  // Translate to the object position
        /* if(gameTimer < 3){
            translate(width/2,height/1.5)
        } else (
            
        ) */

         // Translate to the object position
            /* if(gameTimer < 3){
                translate(width/2,height/1.5)
            } else (
            ) */


