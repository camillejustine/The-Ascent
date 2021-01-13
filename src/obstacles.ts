abstract class Obstacle {
  [x: string]: any;
  public abstract move(): void;
  public abstract draw(): void;
  public abstract update(): void;
  public rx: number;
  public ry: number;
  public r: number;
  public y: number;
  public detected: boolean;
  public collision: boolean;
  public collided: boolean;

  constructor() {
    this.rx = random(30, 80);
    this.ry = random(30, 80);
    this.r = random(30, 80);
    this.y = -100;
    this.x = random(10, 950);
    this.detected = false;
    this.collision = false;
    this.collided = false;

    if (this.rx < this.r || this.rx > this.r) {
      this.rx = this.r;
    }
    if (this.ry < this.r || this.ry > this.r) {
      this.ry = this.r;
    }
  }
}

class Iceberg extends Obstacle {
  public id: string;

  constructor() {
    super();
    this.id = "iceberg";
  }

  public update() {}

  public move() {
    this.y += 2;
  }

  public draw() {
    if (this.detected) {
      image(icebergImage, this.x, this.y, this.rx, this.ry);
      imageMode(CENTER);
    }
    if (this.collided) {
      image(icebergCrack, this.x, this.y, this.rx, this.ry);
      imageMode(CENTER);
    }
  }
}

class Mine extends Obstacle {
  public r: number;
  public id: string;

  constructor() {
    super();
    this.r = 70;
    this.id = "mine";
  }

  public update() {}

  public move() {
    this.y += 2;
  }

  public draw() {
    if (this.detected) {
      image(mineImage, this.x, this.y, 70, 70);
      imageMode(CENTER);
    }
    if (this.collision) {
      image(explosion, this.x, this.y, 300, 300);
      imageMode(CENTER);
    }
  }
}

class SunkenShip extends Obstacle {
  public r: number;
  public id: string;

  constructor() {
    super();
    this.r = 150;
    this.id = "sunkenShip";
  }

  public update() {}

  public move() {
    this.y += 2;
  }

  public draw() {
    if (this.detected) {
      image(sunkenShipImage, this.x, this.y, 150, 150);
      imageMode(CENTER);
    }
  }
}
