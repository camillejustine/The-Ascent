interface iGameState {
  gameState: "running" | "mainMenu" | "gameLost" | "gameWon" | "pauseMenu";
}
interface ObstacleArray {
  allObjects: Array<Obstacle | PowerUp>;
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
  private gameWon: GameWon;
  private gameLost: GameLost;
  private submarine: Submarine;
  private controls: Control;
  private spawnRateMine: number;
  private spawnRateIceberg: number;
  private spawnrateSunkenShip: number;
  private spawnRateRange: number;
  private spawnRatePulse: number;
  private spawnRateSupplyBox: number;
  private collisionListener: CollisionListener;
  private pauseMenu: PauseMenu;
  public powerUps: PowerUp[];
  public obstacles: Obstacle[];
  public allObjects: Array<Obstacle | PowerUp>;
  public sonarAttributes: SonarAttributes;

  public constructor() {
    this.powerUps = [];
    this.obstacles = [];
    this.allObjects = [];
    this.gameState = "mainMenu";
    this.pauseMenu = new PauseMenu(this);
    this.mainMenu = new MainMenu(this);

    // SET THE SPAWN RATE FOR OBSTACLES AND POWERUPS
    this.spawnRateMine = 0.0005;
    this.spawnRateIceberg = 0.009;
    this.spawnrateSunkenShip = 0.00007;
    this.spawnRatePulse = 0.0003;
    this.spawnRateRange = 0.0002;
    this.spawnRateSupplyBox = 0.0005;
    this.collisionListener = new CollisionListener(this);
    this.sonarAttributes = new SonarAttributes(this);
    this.submarine = new Submarine(this);
    this.controls = new Control();
    this.headsUpDisplay = new HeadsUpDisplay(this.submarine);
    this.background = new Background(this.headsUpDisplay);
    this.gameWon = new GameWon(this);
    this.gameLost = new GameLost(this);
  }

  public update() {
    this.mainMenu.update();
    if (this.gameState === "running") {
      this.allObjects = this.obstacles.concat(this.powerUps);
      this.headsUpDisplay.update();
      document.getElementById("main-menu")!.style.display = "none";
      this.background.update();
      noCursor();
      this.controls.update();
      this.populate();
      this.collisionListener.update();
      this.pauseMenu.update();
      this.submarine.update();
      this.setSpawnRate();
    }
    if (this.headsUpDisplay.depth <= 0) {
      this.gameState = "gameWon";
      this.gameWon.update();
    }
    if (this.submarine.hullHealth <= 0) {
      this.gameState = "gameLost";
      this.gameLost.update();
    }
  }

  public draw() {
    if (this.gameState === "running") {
      this.background.draw();
      noCursor();
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

  private populate() {
    if (random(1) < this.spawnRateIceberg) {
      this.obstacles.push(new Iceberg());
    }
    if (random(1) < this.spawnRateMine) {
      this.obstacles.push(new Mine());
    }
    if (random(1) < this.spawnrateSunkenShip) {
      this.obstacles.push(new SunkenShip());
      this.powerUps.push(new PulsePowerUp());
      this.powerUps.push(new RangePowerUp());
      this.powerUps.push(new SupplyBox());
    }
    if (random(1) < this.spawnRateSupplyBox) {
      this.powerUps.push(new SupplyBox());
    }
    if (random(1) < this.spawnRateRange) {
      this.powerUps.push(new RangePowerUp());
    }
    if (random(1) < this.spawnRatePulse) {
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

  // CHANGES SPAWNRATE BASED ON CURRENT DEPTH
  private setSpawnRate() {
    if (this.headsUpDisplay.depth <= 1600) {
      this.spawnRateIceberg = 0.01;
      this.spawnRateMine = 0.007;
      this.spawnRatePulse = 0.0004;
      this.spawnRateRange = 0.0003;
      this.spawnRateSupplyBox = 0.0005;
    }
    if (this.headsUpDisplay.depth <= 1200) {
      this.spawnRateIceberg = 0.04;
      this.spawnRateMine = 0.009;
      this.spawnRatePulse = 0.0006;
      this.spawnRateRange = 0.0004;
      this.spawnRateSupplyBox = 0.0008;
    }
    if (this.headsUpDisplay.depth <= 800) {
      this.spawnRateIceberg = 0.07;
      this.spawnRateMine = 0.015;
      this.spawnRatePulse = 0.0009;
      this.spawnRateRange = 0.0007;
      this.spawnRateSupplyBox = 0.0012;
    }
    if (this.headsUpDisplay.depth <= 400) {
      this.spawnRateIceberg = 0.1;
      this.spawnRateMine = 0.02;
      this.spawnRatePulse = 0.001;
      this.spawnRateRange = 0.0009;
      this.spawnRateSupplyBox = 0.0015;
    }
    if (this.headsUpDisplay.depth <= 50) {
      this.spawnRateIceberg = 0;
      this.spawnRateMine = 0;
      this.spawnRatePulse = 0;
      this.spawnRateRange = 0;
      this.spawnRateSupplyBox = 0;
    }
  }
}
