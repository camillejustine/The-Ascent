class GameWon {
    private div: p5.Element;
    public game: iGameState;
  ;

    public constructor(game: iGameState) {
       this.game = game;
       this.div = createDiv('gameWon');
       this.div.addClass('gameWon'); 
       this.div.html('Yay! You are a winner!!');
       this.div.style('text-align:center');
       //this.div = createElement('main-menu');

        const backToMain = createElement('button');
        backToMain.addClass('backToMain');
        backToMain.html('Back To Main');
        backToMain.mousePressed(() => this.backToMain());

        this.div.child(backToMain);
        this.div.hide();
    }
    
    private backToMain() {
        document.location.href = '';
        //this.div.hide();
        
      }
    

}