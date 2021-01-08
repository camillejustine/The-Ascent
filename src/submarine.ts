class Submarine {
  public control: Control;
  public subPositionX: number;
  public subPositionY: number;
  public angle: number;
  public hullHealth: number;

  constructor() {
    this.control = new Control();
    this.subPositionX = 0;
    this.subPositionY = 0;
    this.angle = 0;
    this.hullHealth = 1.0;
  }

  public update() {
    this.control.update();
    this.subPositionX = this.control.getPositionX();
    this.subPositionY = this.control.getPositionY();
    this.angle = this.control.getAngle();
  }

  public draw() {
    this.update();
    angleMode(DEGREES);
    push();
    translate(this.subPositionX, this.subPositionY);
    rotate(this.angle);
    imageMode(CENTER);
    image(subImage, 0, 0, 35, 150);

    fill(200, 50);
    //make an array for the circles.
    circle(0, -60, 30);
    circle(0, -30, 30);
    circle(0, 0, 30);
    circle(0, 30, 30);
    circle(0, 60, 30);
    ellipseMode(CENTER);
    pop();
  }
  //get the subimage and assign it to x y from control.

  /* private sub = p5.Image | p5.Element;
    
    
    constructor(subImage: p5.Image | p5.Element){
      this.sub = subImage;
    }

    public show(){
        this.sub = image(subImage,-25, -125, 50, 250);
    } */
}
