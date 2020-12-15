let particles: Particle[] = [];

class Particle {
  x: number;
  y: number;
  vy: number;
  alpha: number;
  size: number;
  color: number;

  public constructor() {
    this.x = random(0, width);
    this.y = random(-10, height);
    this.vy = random(-0.1, 1);
    this.alpha = random(0, 10000);
    this.size = random(1, 6);
    this.color = random(170, 220);
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
    background("#001318");
    noStroke();
    fill(0, 0, this.color, this.alpha);
    ellipse(this.x, this.y, this.size);
  }
}
