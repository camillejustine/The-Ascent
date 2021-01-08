class MainMenu {
  private startButton: any;
  //private aboutButton: any;
  public game: iGameState;

  constructor(game: iGameState) {
    this.game = game;
    this.startButton = document.getElementById("start-game")!;
  }

  public update() {
    this.startButton.onclick = () => {
      this.game.gameState = 'running';
      console.log("running");
      console.log("running");
    };
  }
  public draw() {}
}
