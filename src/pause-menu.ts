class PauseMenu {
  private div: p5.Element;

  public pauseMenu: any;
  public backToMain: any;
  public resumeGame: any;
  public game: any;
  //private aboutButton: any;
  
  public constructor() {
      this.div = createElement('pauseMenu');

      const resumeButton = createElement('button');
      resumeButton.addClass('resumeButton');
      resumeButton.html('Resume');
      resumeButton.mousePressed(() => this.resumeGame());

      const backToMain = createElement('button');
      backToMain.addClass('backToMainButton');
      backToMain.html('Back To Main');
      backToMain.mousePressed(() => this.backToMain());

      this.div.child(resumeButton);
      this.div.child(backToMain);
  }

  

  public update() {
   this.keyPressed();
  }

  public keyPressed() {
      if (keyCode === 32) {
        this.game.gameState = 'pauseMenu';
      } 
      return false;   
    }
  }