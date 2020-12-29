abstract class Obstacle {
  public abstract move(): void;
  public abstract draw(): void;
  public abstract randomSpawn(): void;
  public rx: number;
  public ry: number;
  public r: number;
  public y: number;
  public x: number;

  constructor() {
    this.rx = 100;
    this.ry = 80;
    this.r = 50;
    this.y = -100;
    this.x = random(10, 900);
  }
}
class Iceberg extends Obstacle {
  private iceberg: p5.Image | p5.Element;
  private iceArray: Array<Iceberg>;

  constructor() {
    super();
    this.iceArray = [];

    this.iceberg = iceberg;
  }

  public move() {
    this.y += 2;
  }

  public draw() {
    image(this.iceberg, this.x, this.y, this.rx, this.ry);
    fill(200, 50);
    circle(this.x, this.y, this.r * 2);
    imageMode(CENTER);
  }

  public randomSpawn() {
    if (random() < 0.01) {
      this.iceArray.push(new Iceberg());
    }

    for (let i = 0; i < this.iceArray.length; i++) {
      this.iceArray[i].move();
      this.iceArray[i].draw();
      if (this.iceArray[0].y > height + 50) {
        this.iceArray.shift();
      }
    }
  }
}

class Mine extends Obstacle {
  private mine: p5.Image | p5.Element;
  private mineArray: Array<Mine>;

  constructor() {
    super();
    this.mineArray = [];
    this.mine = mine;
  }

  public move() {
    this.y += 2;
  }

  public draw() {
    image(this.mine, this.x, this.y, this.rx, this.ry);
    fill(200, 50);
    circle(this.x, this.y, this.r);
    imageMode(CENTER);
  }

  public randomSpawn() {
    if (random() < 0.01) {
      this.mineArray.push(new Mine());
    }

    for (let i = 0; i < this.mineArray.length; i++) {
      this.mineArray[i].move();
      this.mineArray[i].draw();
      if (this.mineArray[0].y > height + 50) {
        this.mineArray.shift();
      }
    }
  }
}
