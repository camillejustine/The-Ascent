class GameWon {
    private div: p5.Element;
    private div2: p5.Element;
    public game: iGameState;
    
    public constructor(game: iGameState) {
        this.game = game;
        this.div = createDiv('gameWon');
        this.div.addClass('gameWon'); 
        this.div.html('Hurray! You did not die!');
  
        this.div2 = createDiv('');
        this.div2.addClass('buttonContainer');

        const backToMain = createElement('button');
        backToMain.addClass('backToMainButton');
        backToMain.html('Back To Main');
        backToMain.mousePressed(() => this.backToMain());

        this.div.child(this.div2);
        this.div2.child(backToMain)
        this.div.hide();
    }
  
    public backToMain() {
      if (this.game.gameState === "gameWon" && mouseIsPressed) {
        document.location.href = "";
      }
  }

  public gameWonShow() {
    if (this.game.gameState === "gameWon") {
      this.backToMain();
      this.div.show();
    }
}


  public hideButton() {
    if (this.game.gameState === "running") {
      this.div.hide();
    }
  }
  
    public update() {
     this.hideButton();
     this.gameWonShow();
     
    }

}
