
interface iGameState {
  isGameRunning: boolean;
}
interface ObstacleArray {
  obstacles: Obstacle[];
}
class GameFrame implements iGameState, ObstacleArray {
  private mainMenu: MainMenu;
  private background: Background;
  private depthCounter: DepthCounter;
  //private pauseMenu: PauseMenu;

  /* private gameWon: GameWon;
   private gameLost: GameLost;

   private powerUps: PowerUp[];
   
  
   
     */
  private submarine: Submarine;
  private controls: Control;
  private headsUpDisplay: HeadsUpDisplay;
  public obstacles: Obstacle[];

  private sonarAttributes: SonarAttributes;

  //private setDepth: number;

  public isGameRunning: boolean;
  public collisionListener: CollisionListener;

  public constructor() {
    this.collisionListener = new CollisionListener(this);
    this.sonarAttributes = new SonarAttributes();
    this.mainMenu = new MainMenu(this);
    this.controls = new Control();
    this.background = new Background();
    this.depthCounter = new DepthCounter();
    this.submarine = new Submarine();
    this.headsUpDisplay = new HeadsUpDisplay();
    this.obstacles = [];
    this.isGameRunning = false;
  }
  

  public update() {
    this.mainMenu.update();
    this.slowPopulateRate();
    //so colission listener can see obstacle array.
    if (this.isGameRunning) {
      this.depthCounter.update();
      document.getElementById("main-menu")!.style.display = "none";

      this.background.update();

      noCursor();

      this.sonarAttributes.update();
      this.controls.update();
      //this.populate();
      //this.collisionListener.update();


      for (const obstacle of this.obstacles) {
        obstacle.move();
        obstacle.update();
        if (this.obstacles.length > 30) {
          this.obstacles.splice(obstacle, 1);
        }
      } 
      this.headsUpDisplay.update();
    }
  }

  public draw() {
 
    noCursor();
    if (this.isGameRunning) {
      
      document.getElementById("main-menu")!.style.display = "none";
      
      this.background.draw();
      
      noCursor();

      this.submarine.draw();
      
      for (const obstacle of this.obstacles) {
         //obstacle.draw();
      }
      
      this.depthCounter.draw();
    }
  }

  public slowPopulateRate() {
    this.populate();
  }

  public populate() {
    if (random(1) < 0.01) {
      this.obstacles.push(new Iceberg());
      this.obstacles.push(new Mine());
    }
  }
}
