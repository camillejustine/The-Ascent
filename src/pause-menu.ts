class PauseMenu {
  private div: p5.Element;
  public game: iGameState;
  
  public constructor(game: iGameState) {
      this.game = game;
      this.div = createDiv('pauseMenu');
      this.div.addClass('pauseMenu'); 
      this.div.html('You are doing great, keep it up!');
      this.div.style('text-align:center');

      const resumeButton = createElement('button');
      resumeButton.addClass('resumeButton');
      resumeButton.html('Resume');
      resumeButton.mouseClicked(() => this.resume());

      const backToMain = createElement('button');
      backToMain.addClass('backToMain');
      backToMain.html('Back To Main');
      backToMain.mousePressed(() => this.backToMain());

      this.div.child(resumeButton);
      this.div.child(backToMain);
      this.div.hide();
  }

  private hideButton() {
    if (this.game.gameState === 'running') {
      this.div.hide();
    }
  }

  private resume() {
    this.game.gameState = 'running';
  }

  private backToMain() {
    if (this.game.gameState === 'pauseMenu') {
    this.game.gameState = 'running';
    
    // this doesnt work
    // this.game.gameState = 'backtoMain';
  }
}

  public update() {
    console.log(this.game.gameState)
   this.keyPressed();
   this.hideButton();
  }

  public keyPressed() {
  
      if (keyCode === 32 && keyIsPressed) {
        this.div.show();
        this.game.gameState = 'pauseMenu';
      } 
    }
  }
