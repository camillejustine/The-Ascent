
class Control {
    private angle: number = 0;

    private rotateRight: number;
    private rotateLeft: number;
    private right: number;
    private left: number;
    private forward: number;
    private back: number;
    private subPositionX: number;
    private subPositionY: number;

    /* private position: p5.Vector;
    private acceleration: p5.Vector; */

    //private leftWall: number;
    //private rightWall: number;

    //private wallCollide: number;

    /* private mouseX: number;
    private mouseY: number; */
    
    public constructor(){
        this.angle = this.angle;
        /* this.position = new p5.Vector(width/2, height/1.5);
        this.acceleration = new p5.Vector(0, -10); */
        this.left = LEFT_ARROW;
        this.right = RIGHT_ARROW;
        this.forward = UP_ARROW;
        this.back = DOWN_ARROW;
        this.rotateLeft = 90;
        this.rotateRight = 88;
        this.subPositionX = width;
        this.subPositionY = height;
        //this.leftWall = 25;
        //this.rightWall = 600;
        //this.wallCollide = constrain(mouseX, this.leftWall, this.rightWall);
    } 

    public keyPressed() {
            if (keyIsDown(this.rotateLeft)) {
                this.angle -= 1;
            } else if (keyIsDown(this.rotateRight)){
                this.angle += 1;
            } 

            if (keyIsDown(LEFT_ARROW)) {
                this.subPositionX -= 1
            } else if(keyIsDown(RIGHT_ARROW)){
                this.subPositionX += 1
            } else if(keyIsDown(UP_ARROW)){
                this.subPositionY -= 1
            } else if(keyIsDown(DOWN_ARROW)){
                this.subPositionY += 1
            }
        };

    public move() {
           
            this.keyPressed()
            

           
            /* this.acceleration = p5.Vector.sub(new p5.Vector(mouseX,mouseY), this.position);
            this.acceleration.setMag(3);
          
            this.position.add(this.acceleration);

             */

            if(mouseX < 0){
                mouseX = 20;
            } else if (mouseX > width) {    
                mouseX = 780;
            }
        };
    
    public draw() {
            angleMode(DEGREES)
            push();
            translate(this.subPositionX, this.subPositionY);
            rotate(this.angle);
            image(subImage,-25, -125, 50, 250);
            fill(200,50)
            rect( -25,-125, 50, 250)
            circle(0,0, 1000)
            pop();
        };

}

 


