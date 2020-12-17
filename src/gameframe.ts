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

  //private collisionListener: CollisionListener;
  private controls: Control;
  private obstacles: Obstacle[];
  

  //private setDepth: number;
  public isGameRunning: boolean;

  public constructor() {


    

    this.obstacles = [
      new Iceberg(),
      new Mine()
    ]
    
    this.obstacles; Obstacle; 

    //this.collisionListener = new CollisionListener();

    this.mainMenu = new MainMenu(this);
    this.controls = new Control();
    this.isGameRunning = false;
    this.background = new Background();
  }

  public update() {
    this.mainMenu.update();

    if (this.isGameRunning) {
      document.getElementById("main-menu")!.style.display = "none";
      let obstacles: Obstacle[] = [new Iceberg()];

      this.background.update();
      

      noCursor();


      for(const obstacle of this.obstacles){
        obstacle.move(); 
        obstacle.randomSpawn(); 
      } 
      
      this.controls.draw();
      

      // this.collisionListener.draw()
    } 
  }

  public draw() {
    if (this.isGameRunning) {
      document.getElementById("main-menu")!.style.display = "none";
      let obstacles: Obstacle[] = [new Iceberg()];

      this.background.draw();

      noCursor();


      for(const obstacle of this.obstacles){
        
        obstacle.draw();  
      } 
      
      this.controls.draw();
      

      // this.collisionListener.draw()
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
