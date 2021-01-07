
interface iGameState {
  gameState: 'running' | 'mainMenu' | 'gameLost' | 'gameWon' | 'pauseMenu';
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

  public gameState: 'running' | 'mainMenu' | 'gameLost' | 'gameWon' | 'pauseMenu';
  


  public sonarAttributes: SonarAttributes;

  //private setDepth: number;

  
  public collisionListener: CollisionListener;

  public constructor() {
    this.collisionListener = new CollisionListener(this);
    this.sonarAttributes = new SonarAttributes();
    this.mainMenu = new MainMenu(this);
    this.controls = new Control();
    this.gameState = 'mainMenu';
    this.background = new Background();
    this.depthCounter = new DepthCounter();
    this.submarine = new Submarine();
    this.headsUpDisplay = new HeadsUpDisplay();
    this.obstacles = [];
  }
  

  public update() {
    this.mainMenu.update();
    if (this.gameState === 'running') {
      this.depthCounter.update();
      document.getElementById("mainMenu")!.style.display = "none";

      this.background.update();

      noCursor();

      //this.sonarAttributes.update();
      this.controls.update();
      this.populate();
      this.collisionListener.update();


      
      this.headsUpDisplay.update();

    } 

    if (this.gameState === 'pauseMenu') {
      

    }
  }

  public draw() {
 
    noCursor();
    if (this.gameState === 'running') {

      
      document.getElementById("mainMenu")!.style.display = "none";
      
      this.background.draw();
      
      noCursor();

      this.submarine.draw();
      
      for (const obstacle of this.obstacles) {
         //obstacle.draw();
      }
      
      this.depthCounter.draw();
    }
  }

  public populate() {
    if (random(1) < 0.01) {
      this.obstacles.push(new Iceberg());
      this.obstacles.push(new Mine());
    }
    for (const obstacle of this.obstacles) {
      obstacle.move();
      obstacle.update();
      if (this.obstacles.length > 30) {
        this.obstacles.splice(obstacle, 1);
      }
    } 
  }
}
