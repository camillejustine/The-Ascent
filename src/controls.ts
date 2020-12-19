

class Control implements SubPosition {

  private angle: number = 0;

  private rotateRight: number;
  private rotateLeft: number;
  public right: any;
  public left: any;
  public forward: any;
  public back: any;

  public subPositionX: number;
  public subPositionY: number;

  
  /* private position: p5.Vector;
    private acceleration: p5.Vector; */

  public constructor() {
    this.angle = this.angle;
    /* this.position = new p5.Vector(width/2, height/1.5);
        this.acceleration = new p5.Vector(0, -10); */
    this.left = LEFT_ARROW;
    this.right = RIGHT_ARROW;
    this.forward = UP_ARROW;
    this.back = DOWN_ARROW;
    this.rotateLeft = 90;
    this.rotateRight = 88;
    this.subPositionX = 960 / 2;
    this.subPositionY = 720 / 2;

  }

  public update () {
    this.keyPressed();
    this.move();
  }

  public keyPressed() {
    if (keyIsDown(this.rotateLeft)) {
      this.angle -= 1;
    } else if (keyIsDown(this.rotateRight)) {
      this.angle += 1;
    }


    if (keyIsDown(LEFT_ARROW)) {
      this.subPositionX -= 4;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.subPositionX += 4;
    }
    if (keyIsDown(UP_ARROW)) {
      this.subPositionY -= 4;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.subPositionY += 4;
    }
  }

  public move() {
    this.keyPressed();


           /* this.acceleration.setMag(3);
          
            this.position.add(this.acceleration);
             */


    if (this.subPositionX < 0) {
      this.subPositionX = 0;
    } else if (this.subPositionX > width) {
      this.subPositionX = 960;
    }
  }


  public draw() {
    angleMode(DEGREES);
    push();
    translate(this.subPositionX, this.subPositionY);
    rotate(this.angle);
    image(subImage, 0, 0, 20, 100);
    imageMode(CENTER);
    
    fill(200, 50);
    circle(0, -40, 20);
    circle(0, -20, 20);
    circle(0, 0, 20);
    circle(0, 20, 20);
    circle(0, 40, 20);
    circle(0, 0, 400);
    ellipseMode(CENTER)
    pop();

    console.log(this.subPositionX, this.subPositionY)
  }
}
