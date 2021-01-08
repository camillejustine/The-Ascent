class PauseMenu {
        private div: p5.Element;
        private restartGameCallback: iGameState;

        public pauseMenu: any;
        public backToMain: any;
        //private aboutButton: any;
        
        public constructor(restartGameCallback: iGameState) {
            this.restartGameCallback = restartGameCallback;
            this.div = createElement('main-menu');
    
            const resumeButton = createElement('button');
            resumeButton.addClass('button');
            resumeButton.html('Restart');
            resumeButton.mousePressed(() => this.resumeGame);
    
            const backToMain = createElement('button');
            backToMain.addClass('button');
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


        // public unpause() {
        //   if (keyCode === DOWN_ARROW) {
        //     this.game.gameState = 'running'; 
        //     console.log('test')
        //   }
        // }
        /* public keyReleased() {
          if (keyCode === 32) {
              this.game.gameState = 'running';
          } */

}

