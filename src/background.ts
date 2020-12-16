class Background {
  color: string;
  particles: Particle[];

  public constructor() {
    this.color = "#001318";
    this.particles = [];
  }

  public update() {
    if (this.particles.length < 50) {
      for (let i = 0; i < 100; i++) {
        let p: Particle = new Particle();
        this.particles.push(p);
        console.log(this.particles.length);
      }
    }
  }

  // private gradient() {}

  public draw() {
    background(this.color);

    for (const particle of this.particles) {
      particle.draw();
      particle.update();
    }
  }
}
