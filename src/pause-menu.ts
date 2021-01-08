class PauseMenu {
  private pauseMenu: any;
  //private aboutButton: any;
  public game: iGameState;

  constructor(game: iGameState) {
    this.game = game;
    this.pauseMenu = createElement("div");
  }

  public update() {
    this.keyPressed();
    //this.keyReleased();
  }

  public keyPressed() {
    if (keyCode === 32 && this.game.gameState == "running") {
      this.game.gameState = "pauseMenu";
    } else if (keyCode === 32 && this.game.gameState === "pauseMenu") {
      this.game.gameState = "running";
    }
  }

  public unpause() {
    if (keyCode === 32 && this.game.gameState == "pauseMenu") {
      this.game.gameState = "running";
    }
  }
  /* public keyReleased() {
          if (keyCode === 32) {
              this.game.gameState = 'running';
          } */
  public draw() {}
}
