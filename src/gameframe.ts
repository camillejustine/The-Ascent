class GameFrame {
  /*  private mainMenu: MainMenu;
   private pauseMenu: PauseMenu;

   private gameWon: GameWon;
   private gameLost: GameLost;

   private controls: Controls; 
   private obstacles: Obstacle[];
   private powerUps: PowerUp[];
   private submarine: Submarine;
   
   private background: Background;

   private headsUpDisplay: HeadsUpDisplay;
   private collisionListener: ColissionListener;
 */
   private canvasWidth: number;
   private canvasHeight: number;
   /* private setDepth: number;
   public isGameRunning: boolean; */




   public constructor() {
      this.canvasWidth = 800;
      this.canvasHeight = windowHeight;
      //this.mainMenu = new MainMenu();

   }

   public update() {}
    
   public draw() {
      createCanvas(this.canvasWidth, this.canvasHeight)
      background("#001318");
      console.log('test')
   } 



   private populateObstacles() {}

   private initializePlayer() {}

   private initializePausMenu() {}

   private upwardScroll() {}

   private initilaziePowerUps() {}

   private spawnPowerUp() {}

   private spawnObstacle() {}

}