interface iGameState {
  gameState: "running" | "mainMenu" | "gameLost" | "gameWon" | "pauseMenu";
}
interface ObstacleArray {
  allObjects: Array<any>;
}
class GameFrame implements iGameState, ObstacleArray {
  public gameState:
    | "running"
    | "mainMenu"
    | "gameLost"
    | "gameWon"
    | "pauseMenu";

  private mainMenu: MainMenu;
  private background: Background;
  private depthCounter: DepthCounter;
  public gameWon: GameWon;
  /* private gameLost: GameLost;*/
  public powerUps: PowerUp[];
  public obstacles: Obstacle[];
  public allObjects: Array<any>
  private submarine: Submarine;
  private controls: Control;
  private headsUpDisplay: HeadsUpDisplay;
  public spawnRateMine: number;
  public spawnRateIceberg: number;
  public spawnRateShip: number;
  public spawnRateHullFix: number;
  public spawnRateSIncrease: number;
  public spawnRatePI: number;
  //decrease nr of types for powerups. 
  public sonarAttributes: SonarAttributes;
  public collisionListener: CollisionListener;
  public pauseMenu: PauseMenu;

  public constructor() {
    this.powerUps = [];
    this.obstacles = [];
    this.allObjects = [];
    
    this.gameState = "mainMenu";

    this.spawnRateMine = 0.005;
    this.spawnRateIceberg = 0.02;
    this.spawnRateShip = 0.0005;
    this.spawnRateHullFix = 0.0001;
    this.spawnRateSIncrease = 0.005;
    this.spawnRatePI= 0.0001;

    this.pauseMenu = new PauseMenu(this);
    this.collisionListener = new CollisionListener(this);
    this.sonarAttributes = new SonarAttributes();
    this.submarine = new Submarine(this);
    this.mainMenu = new MainMenu(this);
    
    this.controls = new Control();
    this.background = new Background();
    this.depthCounter = new DepthCounter();
    
    this.headsUpDisplay = new HeadsUpDisplay();
    this.gameWon = new GameWon(this.restartGame);
  }
  
  private restartGame() {
    // behöver resetta allting och skapa nya
    // this.gameController = new GameController();
    console.log('restart');
  }


  public update() {
    this.mainMenu.update();
    if (this.gameState === "running") {
      this.allObjects = this.obstacles.concat(this.powerUps)
      this.depthCounter.update();
      document.getElementById("main-menu")!.style.display = "none";
      document.getElementById("div")!.style.display = "none";

      this.background.update();

      noCursor();

      this.controls.update();
      this.populate();
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

      for(let obstacle of this.obstacles){
        obstacle.draw();
      }

      for(let i = 0; i < this.powerUps.length; i++){
        this.powerUps[i].draw();
          if(this.powerUps[i].collision && this.powerUps[i].id === 'supplyBox'){
            this.powerUps.splice(i,1)
          } if(this.powerUps[i].collision && this.powerUps[i].id === 'range'){
            this.powerUps.splice(i,1)
          } if(this.powerUps[i].collision && this.powerUps[i].id === 'pulse'){
            this.powerUps.splice(i,1)
          }
        }
      }
      this.depthCounter.draw();
    }
  


  public populate() {
    console.log(this.powerUps)
    if (random(1) < this.spawnRateIceberg) {
      this.obstacles.push(new Iceberg());
    }
    if (random(1) < this.spawnRateMine) {
      this.obstacles.push(new Mine());
    }
    if (random(1) < 0.00005) {
      this.obstacles.push(new SunkenShip());
    }
    if (random(1) < this.spawnRateSIncrease) {
        this.powerUps.push(new SupplyBox());
    } 
    if (random(1) < this.spawnRateSIncrease) {
      this.powerUps.push(new RangePowerUp());
    } 
    if (random(1) < this.spawnRateSIncrease) {
      this.powerUps.push(new PulsePowerUp());
    }
    for (const object of this.allObjects) {
      object.move();
      object.update();
      if (this.obstacles.length >= 50) {
        this.obstacles.splice(0, 1);
      } if(this.powerUps.length >= 30){
        this.powerUps.splice(0, 1);
        //crashes randomly
      }  
    }
  }

    public setSpawnRate(){
      /* for(let ship of this.powerUps){
        if(ship.detected){
          this.spawnRateHullFix = 0.05
          this.spawnRatePI = 0.05
          this.spawnRateSIncrease = 0.05
        } 
      } */
      /* if(this.depthCounter.depth <= 750){
        this.spawnRateIceberg = 0.03;
        this.spawnRateMine = 0.007;
      } if (this.depthCounter.depth <= 500){
        this.spawnRateIceberg = 0.05;
        this.spawnRateMine = 0.009;
        this.spawnRatePI = 0.005;
        this.spawnRateSIncrease = 0.005;
        this.spawnRateHullFix = 0.005;
      } if (this.depthCounter.depth <= 250){
        this.spawnRateIceberg = 0.08;
        this.spawnRateMine = 0.015;
      } if (this.depthCounter.depth <= 100){
        this.spawnRateIceberg = 0.1;
        this.spawnRateMine = 0.02;
      } if (this.depthCounter.depth <= 50){
        this.spawnRateIceberg = 0;
        this.spawnRateMine = 0;
      }  */
  }
}
