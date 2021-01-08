abstract class Obstacle {
  [x: string]: any;
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
    this.rx = random(30, 80);
    this.ry = random(30, 80);
    this.r = random(50, 100);
    this.y = -100;
    this.x = random(10, 900);
    this.detected = false;
    this.collision = false;

    if (this.rx < this.r || this.rx > this.r) {
      this.rx = this.r;
    }
    if (this.ry < this.r || this.ry > this.r) {
      this.ry = this.r;
    }
  }
}

class Iceberg extends Obstacle {
  private iceberg: p5.Image | p5.Element;
  private iceberg: any;
  public id: string;


  constructor() {
    super();
    this.iceberg = icebergImage;
    this.id = "iceberg";
  }

  public update() {}

  public move() {
    this.y += 2;
  }

  public draw() {
    if (this.detected) {
      image(this.iceberg, this.x, this.y, this.rx, this.ry);
      imageMode(CENTER);
    }
  }
}

class Mine extends Obstacle {
  private mine: p5.Image | p5.Element;
  public r: number;
  public id: string;

  constructor() {
    super();
    this.mine = mineImage;
    this.r = 100;
    this.id = "mine";
  }

  public update() {}

  public move() {
    this.y += 2;
  }

  public draw() {
    if (this.detected) {
      image(this.mine, this.x, this.y, 100, 100);
      imageMode(CENTER);
    }
  }
}

class SunkenShip extends Obstacle {
  private sunkenShip: p5.Image | p5.Element;
  public r: number;

  constructor() {
    super();
    this.sunkenShip = sunkenShipImage;
    this.r = 100;
  }

  public update() {}

  public move() {
    this.y += 2;
  }

  public draw() {
    if (this.detected) {
      image(this.sunkenShip, this.x, this.y, 100, 100);
      imageMode(CENTER);
    }
  }
}
