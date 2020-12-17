
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
        this.subPositionX = 960/2;
        this.subPositionY = 720/2;
    } 

    public keyPressed() {
            if (keyIsDown(this.rotateLeft)) {
                this.angle -= 1;
            } else if (keyIsDown(this.rotateRight)){
                this.angle += 1;
            } 

            if (keyIsDown(this.left)) {
                this.subPositionX -= 4
            } else if(keyIsDown(this.right)){
                this.subPositionX += 4
            } else if(keyIsDown(this.forward)){
                this.subPositionY -= 4
            } else if(keyIsDown(this.back)){
                this.subPositionY += 4
            }
        };

    public move() {
           
            this.keyPressed()
            
            /* this.acceleration = p5.Vector.sub(new p5.Vector(mouseX,mouseY), this.position);
            this.acceleration.setMag(3);
          
            this.position.add(this.acceleration);
             */

            if(this.subPositionX < 0){
                this.subPositionX = 0;
            } else if (this.subPositionX > width) {    
                this.subPositionX = 960;
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
            circle(0,0, 700)
            pop();
        };

}

 


