abstract class PowerUp {
  public id: string;
  public abstract move(): void;
  public abstract draw(): void;
  public abstract update(): void;
  public rx: number;
  public ry: number;
  public r: number;
  public y: number;
  public x: number;
  public detected: boolean;
  public collision: boolean;
  public powerUpActive: boolean;
  public collided: boolean;
  public timer: number
  

  constructor() {
    this.id = "";
    this.rx = 70;
    this.ry = 70;
    this.r = 55;
    this.y = -100;
    this.x = random(10, 900);
    this.detected = false;
    this.collision = false;
    this.powerUpActive = false;
    this.collided = false;
    this.timer = 5;
  }
}

class SupplyBox extends PowerUp {
  public id: string;

  constructor() {
    super();
    this.id = "supplyBox";
  }

  public update() {}

  public move() {
    this.y += 2;
  }

  public draw() {
    if (this.detected) {
      image(supplyBox, this.x, this.y, this.rx, this.ry);
      imageMode(CENTER);
    }
  }
}

class PulsePowerUp extends PowerUp {
  public id: string;

  constructor() {
    super();
    this.id = "pulse";
  }

  public update() {}

  public move() {
    this.y += 2;
  }

  public draw() {
    if (this.detected) {
      image(pulsePowerUp, this.x, this.y, this.rx, this.ry);
      imageMode(CENTER);
    }
  }
}

class RangePowerUp extends PowerUp {
  public id: string;

  constructor() {
    super();
    this.id = "range";
  }

  public update() {
    if (this.powerUpActive) {
      this.timer -= deltaTime / 1000;
      if (this.timer <= 0) {
        this.powerUpActive = false;
      }
    }
  }

  public move() {
    this.y += 2;
  }

  public draw() {
    if (this.detected) {
      image(rangePowerUp, this.x, this.y, this.rx, this.ry);
      imageMode(CENTER);
    }
  }
}
