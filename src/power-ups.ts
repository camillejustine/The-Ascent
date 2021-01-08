abstract class PowerUp {
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

  constructor() {
    this.rx = 100;
    this.ry = 100;
    this.r = 100;
    this.y = -100;
    this.x = random(10, 900);
    this.detected = false;
    this.collision = false;
  }
}

class SupplyBox extends PowerUp {
  private supplyBox: p5.Image | p5.Element;
  public id: string;

  constructor() {
    super();
    this.supplyBox = powerUpsImage;
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
