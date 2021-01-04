interface iGameState {
  isGameRunning: boolean;
}
class GameFrame implements iGameState {
  private mainMenu: MainMenu;
  private background: Background;
  private depthCounter: DepthCounter;
  //private pauseMenu: PauseMenu;

  /* private gameWon: GameWon;
   private gameLost: GameLost;

   private powerUps: PowerUp[];
   private submarine: Submarine;
  
   private headsUpDisplay: HeadsUpDisplay;
     */

  private controls: Control;
  // private timeValue: DepthCounter;
  public obstacles: Obstacle[];


  //private setDepth: number;

  public isGameRunning: boolean;
  
  public constructor() {
    this.obstacles = [new Iceberg(), new Mine()];
    this.obstacles = [
      new Iceberg(),
      new Mine()
    ]

    this.mainMenu = new MainMenu(this);
    this.controls = new Control();
    this.isGameRunning = false;
    this.background = new Background();
    this.depthCounter = new DepthCounter();
  }
  

  public update() {
    console.log(this.obstacles.length);
    this.mainMenu.update();

    if (this.isGameRunning) {
      this.depthCounter.update();
      document.getElementById("main-menu")!.style.display = "none";

      this.background.update();

      noCursor();


      for(const obstacle of this.obstacles){
        obstacle.move(); 
        obstacle.randomSpawn(); 
        obstacle.update(); 
      } 
      this.controls.update();
    } 
  }

  public draw() {
    

    noCursor();

    if (this.isGameRunning) {
      this.depthCounter.draw();
      document.getElementById("main-menu")!.style.display = "none";

      this.background.draw();

      noCursor();

     /*  for(const obstacle of this.obstacles){
        obstacle.draw();  
      } 
   
      // this.collisionListener.draw()
      }  */
      
      this.controls.draw();
    } 

  }
}
