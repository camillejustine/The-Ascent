class Control {
  private angle: number = 0;
  public radians: number;
  private rotateRight: number;
  private rotateLeft: number;
  public right: number;
  public left: number;
  public forward: number;
  public back: number;

  public subPositionX: number;
  public subPositionY: number;

  public constructor() {
    this.angle = this.angle;
    this.radians = radians(this.angle)
    this.left = LEFT_ARROW;
    this.right = RIGHT_ARROW;
    this.forward = UP_ARROW;
    this.back = DOWN_ARROW;

    this.rotateLeft = 90;
    this.rotateRight = 88;
    this.subPositionX = 960 / 2;
    this.subPositionY = 720 / 2;
  }

  public getPositionX() {
    return this.subPositionX;
  }

  public getPositionY() {
    return this.subPositionY;
  }

  public getAngle() {
    return this.angle;
  }

  public update() {
    this.keyPressed();
    this.move();
  }

  // ROTATION SETTINGS
  public keyPressed() {
    if (keyIsDown(this.rotateLeft)) {
      if (this.angle >= -0.90) {
        this.angle -= 0.005;
      }
    } else {
      if (this.angle <= 0) {
        this.angle += 0.005;
      }
    }

    if (keyIsDown(this.rotateRight)) {
      if (this.angle <= 0.90) {
        this.angle += 0.005;
      }
    } else {
      if (this.angle >= 0) {
        this.angle -= 0.005;
      }
    }

    // SUBMARINE MOVEMENT SPEED
    if (keyIsDown(LEFT_ARROW)) {
      this.subPositionX -= 0.7;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.subPositionX += 0.7;
    }
    if (keyIsDown(UP_ARROW)) {
      this.subPositionY -= 0.7;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.subPositionY += 1.2;
    }
  }

  public move() {
    this.keyPressed();
    if (this.subPositionX < 0) {
      this.subPositionX = 0;
    } else if (this.subPositionX > width) {
      this.subPositionX = 960;
    } else if (this.subPositionY > height){
      this.subPositionY = height;
    }
  }
}
