class HeadsUpDisplay {
  public depth: number;
  public hullHealth: HullHealth;

  public constructor(hullHealth: HullHealth) {
    this.depth = 1000;
    this.hullHealth = hullHealth;
  }

  public update() {
    this.depth -= deltaTime / 100;
  }

  public draw() {
    
    if (this.depth <= 4000) {
      push()
      textSize(32);
      fill("rgba(0,255,0,0.25)");
      text("DEPTH: " + Math.floor(this.depth) + " METERS", width / 2 - 400, height - 10);
      pop()
    }
    
    if (this.depth <= 0) {
      text("GAME OVER", width / 2, height / 2 + 15);
    }
    push()
    textSize(32);
    fill("rgba(0,255,0,0.25)");
    text(
      "HULL HEALTH: " + Math.floor(this.hullHealth.hullHealth) + "%",
      width / 2 + 100,
      height - 10
    );
    pop()
  }

  public timeIt() {
    if (this.depth > 0) {
      this.depth--;
    }
  }
}

