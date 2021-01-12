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
    this.id = '';
    this.rx = 100;
    this.ry = 100;
    this.r = 100;
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
  private supplyBox: p5.Image | p5.Element;
  public id: string;

  constructor() {
    super();
    this.supplyBox = supplyBox;
    this.id = 'supplyBox';
  }

  public update() {}

  public move() {
    this.y += 2;
  }

  public draw() {
    if (this.detected) {
      image(this.supplyBox, this.x, this.y, this.rx, this.ry);
      imageMode(CENTER);
    }
  }
}

class PulsePowerUp extends PowerUp {
  private pulsePowerUp: p5.Image | p5.Element;
  public id: string;

  constructor() {
    super();
    this.pulsePowerUp = pulsePowerUp;
    this.id = 'pulse';
  }

  public update() {

  }

  public move() {
    this.y += 2;
  }

  public draw() {
    if (this.detected) {
      image(this.pulsePowerUp, this.x, this.y, this.rx, this.ry);
      imageMode(CENTER);
    }
  }
}

class RangePowerUp extends PowerUp {
  private rangePowerUp: p5.Image | p5.Element;
  public id: string;

  constructor() {
    super();
    this.rangePowerUp = rangePowerUp;
    this.id = 'range';
  }

  public update() {
    if(this.powerUpActive){
      this.timer -= deltaTime/1000;
      if(this.timer <= 0){
        this.powerUpActive = false;
      }
    }
  }

  public move() {
    this.y += 2;
  }

  public draw() {
    if (this.detected) {
      image(this.rangePowerUp, this.x, this.y, this.rx, this.ry);
      imageMode(CENTER);
    }
  }
}