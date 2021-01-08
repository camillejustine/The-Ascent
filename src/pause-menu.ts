class PauseMenu {
        private div: p5.Element;
        private restartGameCallback: Function;

        public pauseMenu: any;
        //private aboutButton: any;
        public game: iGameState;
      
        public constructor(game: iGameState, restartGameCallBack: Function) {
          this.game = game;

          this.restartGameCallback = restartGameCallBack;
          this.div = createElement('div');

          //this.pauseMenu = createElement('div');

          const resumeGame = createElement('button');
          resumeGame.addClass('resumeGameButton');
          resumeGame.html('Resume');
          resumeGame.mousePressed(() => this.resumeGame)
        
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


        // public setup() {
        //     createCanvas(100, 100);
        //     background(295);
        //     this.pauseButton = createButton('click me');
        //     this.pauseButton.position(19, 19);
        //     this.pauseButton.mousePressed(changeBG);
        // }

        // public mousePressed() {
        //     if (mouseIsPressed ;
        // }

        public unpause() {
          if (keyCode === DOWN_ARROW) {
            this.game.gameState = 'running'; 
            console.log('test')
          }
        }
        /* public keyReleased() {
          if (keyCode === 32) {
              this.game.gameState = 'running';
          } */

}

