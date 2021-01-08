interface iGameState {
  gameState: "running" | "mainMenu" | "gameLost" | "gameWon" | "pauseMenu";
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
  public powerUps: PowerUp[];
  private submarine: Submarine;
  private controls: Control;
  private headsUpDisplay: HeadsUpDisplay;
  public obstacles: Obstacle[];

  public spawnRateMine: number;
  public spawnRateIceberg: number;
  public spawnRateShip: number;

  public spawnRateHullFix: number;
  public spawnRateSIncrease: number;
  public spawnRatePI: number;


  public gameState:
    | "running"
    | "mainMenu"
    | "gameLost"
    | "gameWon"
    | "pauseMenu";

  public sonarAttributes: SonarAttributes;

  //private setDepth: number;

  public collisionListener: CollisionListener;
  public pauseMenu: PauseMenu;

  public constructor() {
    this.powerUps = [];
    this.obstacles = [];

    this.gameState = "mainMenu";

    this.spawnRateMine = 0.005;
    this.spawnRateIceberg = 0.02;
    this.spawnRateShip = 0.0005;
    this.spawnRateHullFix = 0.0005;
    this.spawnRateSIncrease = 0.0005;
    this.spawnRatePI= 0.0005;

    this.pauseMenu = new PauseMenu(this);
    this.collisionListener = new CollisionListener(this);
    this.submarine = new Submarine(this);
    this.mainMenu = new MainMenu(this);
    
    this.controls = new Control();
    this.background = new Background();
    this.depthCounter = new DepthCounter();
    this.sonarAttributes = new SonarAttributes();
    this.headsUpDisplay = new HeadsUpDisplay();
  }

  public update() {
    this.mainMenu.update();
    if (this.gameState === "running") {
      this.depthCounter.update();
      document.getElementById("main-menu")!.style.display = "none";
      document.getElementById("div")!.style.display = "none";

      this.background.update();

      noCursor();

      this.controls.update();
      this.populateObstacle();
      this.populatePowerUp();
      this.collisionListener.update();
      this.headsUpDisplay.update();
      this.pauseMenu.keyPressed();
      this.submarine.update()
      console.log(this.submarine.hullHealth)
    }

    if (this.gameState === "pauseMenu") {
      document.getElementById("div")!.style.display = "flex";
      this.pauseMenu.unpause();
    }
  }

  public draw() {
    noCursor();
    if (this.gameState === "running") {
      document.getElementById("main-menu")!.style.display = "none";

      this.background.draw();

      noCursor();

      this.submarine.draw();

      for (const obstacle of this.obstacles) {
        obstacle.draw();
      }

      for (const powerUp of this.powerUps) {
        powerUp.draw();
      }

      this.depthCounter.draw();
    }
  }


  public populateObstacle() {
    if (random(1) < this.spawnRateIceberg) {
      this.obstacles.push(new Iceberg());
    }
    if (random(1) < this.spawnRateMine) {
      this.obstacles.push(new Mine());
    }
    if (random(1) < 0.0005) {
      this.obstacles.push(new SunkenShip());
    }
    for (const obstacle of this.obstacles) {
      obstacle.move();
      obstacle.update();
      if (this.obstacles.length > 30) {
        this.obstacles.splice(0, 1);
      }
    }
  }

    public populatePowerUp() {
      if (random(1) < 0.1) {
        this.powerUps.push(new SupplyBox());
      }
      for (const powerUp of this.powerUps) {
        powerUp.move();
        powerUp.update();
        if (this.powerUps.length > 30) {
          this.powerUps.splice(0, 1);
        }
      }
    }

    public setSpawnRate(){
      if(this.depthCounter.depth <= 750){
        this.spawnRateIceberg = 0.03;
        this.spawnRateMine = 0.007;
      } if (this.depthCounter.depth <= 500){
        this.spawnRateIceberg = 0.05;
        this.spawnRateMine = 0.009;
      } if (this.depthCounter.depth <= 250){
        this.spawnRateIceberg = 0.08;
        this.spawnRateMine = 0.015;
      } if (this.depthCounter.depth <= 100){
        this.spawnRateIceberg = 0.1;
        this.spawnRateMine = 0.02;
      } if (this.depthCounter.depth <= 50){
        this.spawnRateIceberg = 0;
        this.spawnRateMine = 0;
      } 
  }
}
