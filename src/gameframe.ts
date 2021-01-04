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

  private controls: Control;
  public obstacles: Obstacle[];
  private sonarAttributes: SonarAttributes

  //private setDepth: number;

  public isGameRunning: boolean;
  
  public constructor() {
    this.obstacles = [new Iceberg(), new Mine()];

    this.sonarAttributes = new SonarAttributes();

    this.obstacles = [
      new Iceberg(),
      new Mine()
    ]

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

      this.sonarAttributes.update();

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
      document.getElementById("main-menu")!.style.display = "none";

      this.background.draw();

      noCursor();

      this.sonarAttributes.draw();
     /*  for(const obstacle of this.obstacles){
        obstacle.draw();  
      }  */
      
      this.controls.draw();
    } 

  }
}
