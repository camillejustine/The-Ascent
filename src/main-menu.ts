class MainMenu {
  private startButton: HTMLElement;
  public game: iGameState;

  constructor(game: iGameState) {
    this.game = game;
    this.startButton = document.getElementById("start-game")!;
  }

  public update() {
    this.startButton.onclick = () => {
      this.game.gameState = 'running';
    };
  }
}


 
