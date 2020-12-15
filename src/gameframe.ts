class GameFrame implements InterfaceGameState {
  private mainMenu: MainMenu;
  /* private pauseMenu: PauseMenu;

   private gameWon: GameWon;
   private gameLost: GameLost;

   private controls: Controls; 
   private obstacles: Obstacle[];
   private powerUps: PowerUp[];
   private submarine: Submarine;
   
   private background: Background;

   private headsUpDisplay: HeadsUpDisplay;
   private collisionListener: ColissionListener; */

  private canvasWidth: number;
  private canvasHeight: number;
  //private setDepth: number;
  //public isGameRunning: boolean;

  public constructor() {
    this.mainMenu = new MainMenu(this);
    this.canvasWidth = 960;
    this.canvasHeight = 720;
    //this.isGameRunning = false;
  }

  public update() {}

  public draw() {
    this.mainMenu.update();
    createCanvas(this.canvasWidth, this.canvasHeight);
    background("#001318");
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
