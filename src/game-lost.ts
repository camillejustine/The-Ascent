class GameLost {
  private div: p5.Element;
  private div2: p5.Element;
  public game: iGameState;

  public constructor(game: iGameState) {
    this.game = game;
    this.div = createDiv("gameLost");
    this.div.addClass("gameLost");
    this.div.html("A captain always goes down with his ship. Try again!");

    this.div2 = createDiv("");
    this.div2.addClass("buttonContainer");

    const backToMain = createElement("button");
    backToMain.addClass("backToMainButton");
    backToMain.html("Back To Main");
    backToMain.mousePressed(() => this.backToMain());

    this.div.child(this.div2);
    this.div2.child(backToMain);
    this.div.hide();
  }

  private backToMain() {
    if (this.game.gameState === "gameLost" && mouseIsPressed) {
      document.location.href = "";
    }
  }

  private gameLostShow() {
    if (this.game.gameState === "gameLost") {
      this.backToMain();
      this.div.show();
    }
  }

  private hideButton() {
    if (this.game.gameState === "running") {
      this.div.hide();
    }
  }

  public update() {
    this.hideButton();
    this.gameLostShow();
  }
}
