interface iGameState {
  gameState: "running" | "mainMenu" | "gameLost" | "gameWon" | "pauseMenu";
}
interface ObstacleArray {
  allObjects: Array<any>;
  powerUps: PowerUp[];
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
  private headsUpDisplay: HeadsUpDisplay;
  public gameWon: GameWon;
  /* private gameLost: GameLost;*/
  public powerUps: PowerUp[];
  public obstacles: Obstacle[];
  public allObjects: Array<any>;
  private submarine: Submarine;
  private controls: Control;
  public spawnRateMine: number;
  public spawnRateIceberg: number;
  public spawnRateShip: number;
  public spawnRatePowerUps: number;
  public spawnrateSunkenShip: number;
  //decrease nr of types for powerups.
  public sonarAttributes: SonarAttributes;
  public collisionListener: CollisionListener;
  public pauseMenu: PauseMenu;

  public constructor() {
    this.powerUps = [];
    this.obstacles = [];
    this.allObjects = [];

    this.gameState = "mainMenu";

    this.pauseMenu = new PauseMenu(this);
    this.mainMenu = new MainMenu(this);

    // SET THE SPAWN RATE FOR OBSTACLES
    this.spawnRateMine = 0.005;
    this.spawnRateIceberg = 0.02;
    this.spawnRateShip = 0.0005;
    this.spawnRatePowerUps = 0.0009;
    this.spawnrateSunkenShip = 0.00005;

    this.collisionListener = new CollisionListener(this);
    this.sonarAttributes = new SonarAttributes(this);
    this.submarine = new Submarine(this);

    this.controls = new Control();
    this.background = new Background();
    this.headsUpDisplay = new HeadsUpDisplay(this.submarine);

    this.gameWon = new GameWon(this.restartGame);
    // this.gameLost = new GameLost(this);
  }

  private restartGame() {
    // behöver resetta allting och skapa nya
    // this.gameController = new GameController();
    console.log("restart");
  }

  public update() {
    this.mainMenu.update();
    if (this.gameState === "running") {
      this.allObjects = this.obstacles.concat(this.powerUps);
      this.headsUpDisplay.update();
      document.getElementById("main-menu")!.style.display = "none";
      // document.getElementById("pause-menu")!.style.display = "none";

      this.background.update();

      // noCursor();

      this.controls.update();
      this.populate();
      this.collisionListener.update();
      this.pauseMenu.update();
      this.submarine.update();
      this.setSpawnRate();
    }

    // if (this.gameState === "pauseMenu") {
    //   document.getElementById("pause-menu")!.style.display = "absolute";
    // }

    if (this.headsUpDisplay.depth === 0) {
      this.gameState = "gameWon";
    }
    if (this.submarine.hullHealth <= 0) {
      this.gameState = "gameLost";
    }
  }

  public draw() {
    if (this.gameState === "running") {
      document.getElementById("main-menu")!.style.display = "none";

      this.background.draw();

      // noCursor();

      this.submarine.draw();

      for (let obstacle of this.obstacles) {
        obstacle.draw();
      }

      for (let i = 0; i < this.powerUps.length; i++) {
        this.powerUps[i].draw();
        if (this.powerUps[i].collision && this.powerUps[i].id === "supplyBox") {
          this.powerUps[i].y += 750;
        }
        if (this.powerUps[i].collision && this.powerUps[i].id === "range") {
          this.powerUps[i].y += 750;
        }
        if (this.powerUps[i].collision && this.powerUps[i].id === "pulse") {
          this.powerUps[i].y += 750;
        }
      }
    }
    this.headsUpDisplay.draw();
  }

  public populate() {
    if (random(1) < this.spawnRateIceberg) {
      this.obstacles.push(new Iceberg());
    }
    if (random(1) < this.spawnRateMine) {
      this.obstacles.push(new Mine());
    }
    if (random(1) < this.spawnrateSunkenShip) {
      this.obstacles.push(new SunkenShip());
    }
    if (random(1) < this.spawnRatePowerUps) {
      this.powerUps.push(new SupplyBox());
    }
    if (random(1) < this.spawnRatePowerUps) {
      this.powerUps.push(new RangePowerUp());
    }
    if (random(1) < this.spawnRatePowerUps) {
      this.powerUps.push(new PulsePowerUp());
    }
    for (const object of this.allObjects) {
      object.move();
      object.update();
      if (this.obstacles.length >= 100) {
        this.obstacles.splice(0, 1);
      }
      if (this.powerUps.length >= 100) {
        this.powerUps.splice(0, 1);
      }
    }
  }

  public setSpawnRate() {
    /* for(let ship of this.powerUps){
        if(ship.detected){
          this.spawnRatePowerUps = 0.05;
        } else {
          this.spawnRatePowerUps = this.spawnRatePowerUps;
        }
      } */
    if (this.headsUpDisplay.depth <= 750) {
      this.spawnRateIceberg = 0.03;
      this.spawnRateMine = 0.007;
    }
    if (this.headsUpDisplay.depth <= 500) {
      this.spawnRateIceberg = 0.05;
      this.spawnRateMine = 0.009;
      this.spawnRatePowerUps = 0.00099;
    }
    if (this.headsUpDisplay.depth <= 250) {
      this.spawnRateIceberg = 0.08;
      this.spawnRateMine = 0.015;
      this.spawnRatePowerUps = 0.002;
    }
    if (this.headsUpDisplay.depth <= 100) {
      this.spawnRateIceberg = 0.1;
      this.spawnRateMine = 0.02;
      this.spawnRatePowerUps = 0.004;
    }
    if (this.headsUpDisplay.depth <= 50) {
      this.spawnRateIceberg = 0;
      this.spawnRateMine = 0;
      this.spawnRatePowerUps = 0;
    }
  }
}
