class PauseMenu {
        private pauseMenu: any;
        //private aboutButton: any;
        public game: iGameState;
      
        constructor(game: iGameState) {
          this.game = game;
          this.pauseMenu = createElement('div');
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

        public keyReleased() {
            
        }
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
        public draw() {}



