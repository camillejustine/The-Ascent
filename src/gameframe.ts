
interface iGameState {
  isGameRunning: boolean;
}
class GameFrame implements iGameState {
  private mainMenu: MainMenu;
  //private pauseMenu: PauseMenu;

   /* private gameWon: GameWon;
   private gameLost: GameLost;

  
  
   private powerUps: PowerUp[];
   private submarine: Submarine;
   
   private background: Background;

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
  }

  public update() {
    
  }

  public draw() {
    this.mainMenu.update()
    if(this.isGameRunning){
      document.getElementById("main-menu")!.style.display = "none";
      background("#001318");
      noCursor();
    
      this.obstacles.draw()
      this.obstacles.move()
      this.obstacles.randomSpawn()

      this.controls.draw();
      this.controls.move();
      //this.controls.keyPressed();

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
