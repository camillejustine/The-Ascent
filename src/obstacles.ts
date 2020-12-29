abstract class Obstacle {
  public abstract move(): void;
  public abstract draw(): void;
  public abstract randomSpawn(obstacles: any): void;
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

  public randomSpawn(obstacles: any) {
    if (random() < 0.01 && obstacles.length < 5) {
      obstacles.push(new Iceberg());
    }

    for (let i = 0; i < obstacles.length; i++) {
      if (obstacles[0].y > height + 50) {
        obstacles.shift();
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

  public randomSpawn(obstacles: any) {
    if (random() < 0.01 && obstacles.length < 5) {
      obstacles.push(new Mine());
    }

    for (let i = 0; i < obstacles.length; i++) {
      if (obstacles[0].y > height + 50) {
        obstacles.shift();
      }
    }
  }
}
