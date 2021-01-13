class SonarAttributes {
  private positionY: number;
  private positionX: number;
  private control: Control;
  private pulseLifespan: number;
  private pulseRate: number;
  private range: number;
  public sonarRadius: number;
  public pulses: Array<SonarAttributes>;
  public allObjectsArray: ObstacleArray;

  public constructor(allObjectsArray: ObstacleArray) {
    this.allObjectsArray = allObjectsArray;
    this.control = new Control();
    this.positionX = 0;
    this.positionY = 0;
    this.sonarRadius = 0;
    this.pulseLifespan = 100;
    this.pulses = [];
    this.pulseRate = 85;
    this.range = 2;
  }

  public update() {
    this.draw();
    this.sonarPulseFrequency();
    this.sonarRange();
    if (frameCount % this.pulseRate == 0) {
      this.pulses.push(new SonarAttributes(this.allObjectsArray));
    }
  }

  public draw() {
    this.control.update();
    for (let i = 0; i < this.pulses.length; i++) {
      this.pulses[i].positionX = this.control.getPositionX();
      this.pulses[i].positionY = this.control.getPositionY();
      this.pulses[i].pulse();
      this.pulses[i].pulse();
      if (this.pulses[i].pulseLifespan <= 0) {
        this.pulses.splice(i, 1);
      }
    }
  }

  private pulse() {
    this.sonarRange();
    this.sonarRadius = this.sonarRadius + this.range;
    this.pulseLifespan--;
    push()
    strokeWeight(2);
    stroke("rgba(0,255,0,0.25)");
    noFill();
    circle(this.positionX, this.positionY, this.sonarRadius * 2);
    pop()
  }

  private sonarPulseFrequency() {
    for (let i = 0; i < this.allObjectsArray.allObjects.length; i++) {
      if (
        this.allObjectsArray.allObjects[i].collision &&
        this.allObjectsArray.allObjects[i].id === "pulse"
      ) {
        this.pulseRate = 20;
        setTimeout(() => {
          this.pulseRate = 85;
        }, 5000);
      }
    }
  }

  private sonarRange() {
    for (let i = 0; i < this.allObjectsArray.allObjects.length; i++) {
      if (
        this.allObjectsArray.allObjects[i].collision &&
        this.allObjectsArray.allObjects[i].id === "range"
      ) {
        this.allObjectsArray.allObjects[i].powerUpActive = true;
      }
      if (this.allObjectsArray.allObjects[i].powerUpActive) {
        this.range = 3.5;
      }
    }
  }
}
