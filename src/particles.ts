class Particle {
  private x: number;
  private y: number;
  private vy: number;
  private alpha: number;
  private size: number;
  private color: number;

  public constructor() {
    this.x = random(0, width);
    this.y = random(-10, height);
    this.vy = random(-0.1, 1);
    this.alpha = random(0, 10000);
    this.size = random(1, 3);
    this.color = random(200, 255);
  }

  public update() {
    this.y += this.vy;
    if (this.vy > 0.5) {
      this.alpha = random(50, 150);
    }
    this.alpha = this.alpha;

    if (this.y > height) {
      this.y = -10;
      this.x = random(0, width);
    }
  }

  public draw() {
    stroke(255, 255, this.color, this.alpha);
    strokeWeight(this.size);
    line(this.x, this.y, this.x, this.y);
  }
}
