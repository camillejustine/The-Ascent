interface iGameState {
  isGameRunning: boolean;
}
class GameFrame implements iGameState {
  private mainMenu: MainMenu;
  private background: Background;
  //private pauseMenu: PauseMenu;

  /* private gameWon: GameWon;
   private gameLost: GameLost;

  
  
   private powerUps: PowerUp[];
   private submarine: Submarine;
   

   private headsUpDisplay: HeadsUpDisplay;
   private collisionListener: ColissionListener;  */
  private controls: Control;
  private obstacles: Obstacle;

  //private setDepth: number;
  public isGameRunning: boolean;

  public constructor() {
    this.mainMenu = new MainMenu(this);
    this.obstacles = new Obstacle();
    this.controls = new Control();
    this.isGameRunning = false;
    this.background = new Background();
  }

  public update() {}

  public draw() {
    this.mainMenu.update();
    if (this.isGameRunning) {
      document.getElementById("main-menu")!.style.display = "none";

      this.background.update();
      this.background.draw();

      noCursor();

      this.obstacles.draw();
      this.obstacles.move();
      this.obstacles.randomSpawn();

      this.controls.draw();
      this.controls.move();

    } else {
      this.mainMenu.update();
    }
  }

  /* private populateObstacles() {}

   private initializePlayer() {}

   private initializePausMenu() {}

   private upwardScroll() {}

   private initilaziePowerUps() {}

   private spawnPowerUp() {}

   private spawnObstacle() {}
 */
}

//page loads html DOM star button.
