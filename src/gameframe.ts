interface iGameState {
  gameState: 'running' | 'mainMenu' | 'gameLost' | 'gameWon' | 'pauseMenu';
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
  public obstacles: Obstacle[];
  public gameState: 'running' | 'mainMenu' | 'gameLost' | 'gameWon' | 'pauseMenu';
  
  public constructor() {
    this.obstacles = [new Iceberg(), new Mine()];
    this.mainMenu = new MainMenu(this);
    this.controls = new Control();
    this.gameState = 'mainMenu';
    this.background = new Background();
    this.depthCounter = new DepthCounter();
  }
  

  public update() {
    
    this.mainMenu.update();

    if (this.gameState === 'running') {
      this.depthCounter.update();
      document.getElementById("mainMenu")!.style.display = "none";

      this.background.update();

      noCursor();


      for(const obstacle of this.obstacles){
        obstacle.move(); 
        obstacle.randomSpawn(); 
        obstacle.update(); 
      } 
      this.controls.update();
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

     /*  for(const obstacle of this.obstacles){
        obstacle.draw();  
      } 
   
      // this.collisionListener.draw()
      }  */
      
      this.controls.draw();
      this.depthCounter.draw();
    } 

  }
}
