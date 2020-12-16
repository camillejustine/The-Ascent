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
     */
  private collisionListener: ColissionListener;
  private controls: Control;


  //private setDepth: number;
  public isGameRunning: boolean;

  public constructor() {
    this.collisionListener = new CollisionListener();
    this.mainMenu = new MainMenu(this);
    this.controls = new Control();
    this.isGameRunning = false;
    this.background = new Background();
  }

  public update() {
    this.mainMenu.update();
  }

  public draw() {
    if (this.isGameRunning) {
      document.getElementById("main-menu")!.style.display = "none";

      this.background.update();
      this.background.draw();

      noCursor();

      let obstacles: Obstacle[] = [
        new Iceberg()
      ]

      for(const obstacle of obstacles){
        console.log(obstacle)
        obstacle.draw();
        obstacle.randomSpawn();
      }
      
      this.controls.draw();
      this.controls.move();

      this.collisionListener.draw() 

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
