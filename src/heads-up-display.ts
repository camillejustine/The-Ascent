interface Depth {
  depth: number;
}

class HeadsUpDisplay implements Depth {
  public depth: number;
  public hullHealth: HullHealth;
  public background: Background;

  public constructor(hullHealth: HullHealth) {
    this.background = new Background(this);
    this.depth = 2000;
    this.hullHealth = hullHealth;
  }

  public update() {
    this.depth -= deltaTime / 100;
  }

  public draw() {
    push();
    textSize(32);
    fill("rgba(0,255,0,0.25)");
    noStroke();
    text(
      "HULL HEALTH: " + Math.floor(this.hullHealth.hullHealth) + "%",
      width / 2 + 100,
      height - 10
    );
    text(
      "DEPTH: " + Math.floor(this.depth) + " METERS",
      width / 2 - 400,
      height - 10
    );
    pop();
  }

  public timeIt() {
    if (this.depth > 0) {
      this.depth--;
    }
  }
}
