class DepthCounter {
  public depth: number;

  public constructor() {
    this.depth = 1000;
  }

  public update() {
    this.depth -= deltaTime / 100;
  }

  public draw() {
    if (this.depth <= 4000) {
      textSize(32);
      fill('rgba(0,255,0,0.25)');
      text(Math.floor(this.depth) + " METERS", (width / 2) - 80, height - 20);
    }
    
    if (this.depth <= 0) {
      text('GAME OVER', width / 2, height / 2 + 15);
    }
  }

  public timeIt() {
    if (this.depth > 0) {
      this.depth--;
    }

  }
}