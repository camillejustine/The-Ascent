class GameLost {
    private div: p5.Element;
    public game: iGameState;
    
    public constructor(game: iGameState) {
        this.game = game;
        this.div = createDiv('gameLost');
        this.div.addClass('gameLost'); 
        this.div.html('Sorry dude, you lost...');
        this.div.style('text-align:center');
  
        const restartButton = createElement('button');
        restartButton.html('Restart');
        restartButton.mouseClicked(() => this.restart());
        restartButton.addClass('resumeButton');
  
        const backToMain = createElement('button');
        backToMain.addClass('backToMainButton');
        backToMain.html('Back To Main');
        backToMain.mousePressed(() => this.backToMain());
  
        this.div.child(restartButton);
        this.div.child(backToMain);
        this.div.hide();
    }
  
    private hideButton() {
      if (this.game.gameState === 'running') {
        this.div.hide();
      }
    }
  
    private restart() {
      this.game.gameState = 'running';
    }
  
    private backToMain() {
      if (this.game.gameState === 'gameLost') {
      this.game.gameState = 'running';
      
      // this doesnt work
      // this.game.gameState = 'backtoMain';
    }
  }
  
    public update() {
      console.log(this.game.gameState)
     this.hideButton();
    }

}
