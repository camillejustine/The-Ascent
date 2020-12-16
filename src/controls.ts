
class Control {
    private angle: number = 0;

    private right: number;
    private left: number;
    private forward: number;
    private back: number;

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
        //this.leftWall = 25;
        //this.rightWall = 600;
        //this.wallCollide = constrain(mouseX, this.leftWall, this.rightWall);
    } 

    public keyPressed() {
            if (keyCode === 90) {
                this.angle -= 1;
            } else if (keyCode === 88){
                this.angle += 1;
            } 
            if(keyPressed(LEFT_ARROW)){

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
            translate(width/2, height/2);
            rotate(this.angle);
            image(subImage,-25, -125, 50, 250);
            fill(200,50)
            rect( -25,-125, 50, 250)
            circle(0,0, 1000)
            pop();
        };

}

 


