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
    push();
    if (this.depth <= 4000) {
      textSize(32);
      fill("rgba(0,255,0,0.25)");
      text(Math.floor(this.depth) + " METERS", width / 2 - 60, height - 20);
    }

    if (this.depth <= 0) {
      text("GAME OVER", width / 2, height / 2 + 15);
    }
    pop();

    push();
    textSize(32);
    fill("rgba(0,255,0,0.25)");
    text(
      Math.floor(this.hullHealth.hullHealth) + "% HULL HEALTH",
      width / 2 - 80,
      height - 50
    );
    pop();
  }

  public timeIt() {
    if (this.depth > 0) {
      this.depth--;
    }
  }
}

// class HeadsUpDisplay {

//     public constructor() {}

//     public update(){
//         push()
//         fill(225)
//         text("FPS: " + Math.floor(frameRate()), width - 120, 30);
//         pop()
//     }
//     /*

//     public draw(){}

//     public update(){}

//     private updateHudElements(){} */
// }
