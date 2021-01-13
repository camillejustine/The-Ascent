class Background {
  private particles: Particle[];
  public depth: Depth;
  public numberGradient: number;
  public startColor: p5.Color;
  public endColor: p5.Color;

  public constructor(depth: Depth) {
    this.particles = [];
    this.depth = depth;
    this.numberGradient = 0;
    this.startColor = color(0, 19, 24);
    this.endColor = color(51, 139, 167);
  }

  public update() {
    if (this.particles.length < 50) {
      for (let i = 0; i < 100; i++) {
        let p: Particle = new Particle();
        this.particles.push(p);
      }
    }
  }

  public draw() {
    colorMode(RGB);
    if (this.depth.depth > 0) {
      this.numberGradient += 0.0001;
    }
    let interA: p5.Color = lerpColor(
      this.startColor,
      this.endColor,
      this.numberGradient
    );

    background(interA);

    for (const particle of this.particles) {
      particle.draw();
      particle.update();
    }
  }


}
