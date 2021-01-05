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
  private sonarAttributes: SonarAttributes;

  //private setDepth: number;

  public isGameRunning: boolean;
  
  public constructor() {
    
    this.sonarAttributes = new SonarAttributes();
    
    this.obstacles = [];

    this.mainMenu = new MainMenu(this);
    this.controls = new Control();
    this.isGameRunning = false;
    this.background = new Background();
    
  }

  public update() {

    this.mainMenu.update();

    if (this.isGameRunning) {
      document.getElementById("main-menu")!.style.display = "none";

      this.background.update();

      noCursor();

      this.sonarAttributes.update();

      if(random(1) < 0.01){
          this.obstacles.push(new Iceberg());
          this.obstacles.push(new Mine());
      }
      for(const obstacle of this.obstacles){
        obstacle.move(); 
        obstacle.draw(); 
        console.log(this.obstacles)
          if(this.obstacles.length > 20){
            this.obstacles.splice(obstacle, 1);
        }
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

      //this.sonarAttributes.pulse();
      /* for(const obstacle of this.obstacles){
        obstacle.draw();  
      }  */
      
      this.controls.draw();
    } 

  }
}
