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

  constructor() {
    this.rx = random(30, 80);
    this.ry = random(30, 80);
    this.r = random(50, 100);
    this.y = -100;
    this.x = random(10, 900);
    this.detected = false;

    if (this.rx < this.r || this.rx > this.r) {
      this.rx = this.r;
    }
    if (this.ry < this.r || this.ry > this.r) {
      this.ry = this.r;
    }
  }
}

class SupplyBox extends PowerUp {
  private supplyBox: p5.Image | p5.Element;

  constructor() {
    super();
    this.supplyBox = powerUpsImage;
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
