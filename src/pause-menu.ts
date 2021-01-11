class PauseMenu {
  private div: p5.Element;
  private div2: p5.Element;
  public game: iGameState;

  public constructor(game: iGameState) {
    
      this.game = game;
      this.div = createDiv('pauseMenu');
      this.div.addClass('pauseMenu'); 
      this.div.html('You are doing great, keep it up!');

      this.div2 = createDiv('');
      this.div2.addClass('buttonContainer');

      const resumeButton = createElement('button');
      resumeButton.addClass('resumeButton');
      resumeButton.html('Resume');
      resumeButton.style('text-align:center');
      resumeButton.mouseClicked(() => this.resume());

      const backToMain = createElement('button');
      backToMain.addClass('backToMain');
      backToMain.html('Back To Main');
      backToMain.mousePressed(() => this.backToMain());

      this.div.child(this.div2);
      this.div2.child(resumeButton);
      this.div2.child(backToMain);
      this.div.hide();
  
  }

  private hideButton() {
    if (this.game.gameState === "running") {
      this.div.hide();
    }
  }

  private resume() {
    this.game.gameState = "running";
  }

  private backToMain() {
  
  document.location.href = "";
  console.log(this.game.gameState)
}
  public update() {
    this.keyPressed();
    this.hideButton();
  }

  public keyPressed() {
    if (keyCode === 32 && keyIsPressed) {
      this.div.show();
      this.game.gameState = "pauseMenu";
    }
  }
}
