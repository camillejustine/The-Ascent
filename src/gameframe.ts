interface iGameState {
  isGameRunning: boolean;
}
class GameFrame implements iGameState {
  private mainMenu: MainMenu;
  private background: Background;
  private controls: Control;
  private obstacles: Obstacle[];
  public isGameRunning: boolean;

  public constructor() {
    this.obstacles = [new Iceberg(), new Mine()];

    //this.collisionListener = new CollisionListener();

    this.mainMenu = new MainMenu(this);
    this.controls = new Control();
    this.isGameRunning = false;
    this.background = new Background();
  }

  public update() {
    console.log(this.obstacles.length);
    this.mainMenu.update();

    if (this.isGameRunning) {
      document.getElementById("main-menu")!.style.display = "none";

      this.background.update();

      noCursor();

      for (const obstacle of this.obstacles) {
        obstacle.move();
        obstacle.randomSpawn(this.obstacles);
      }
      this.controls.update();
    }
  }

  public draw() {
    noCursor();

    if (this.isGameRunning) {
      document.getElementById("main-menu")!.style.display = "none";

      this.background.draw();

      this.controls.draw();

      if (this.obstacles.length < 2) {
        this.obstacles = [new Iceberg(), new Mine()];
      }
      for (let i = 0; i < this.obstacles.length; i++) {
        const distance = dist(
          this.controls.getPositionX(),
          this.controls.getPositionY(),
          this.obstacles[i].x,
          this.obstacles[i].y
        );
        if (distance < 250) {
          this.obstacles[i].draw();
        }
      }

      //this.collisionListener.draw()
    }
  }
}
