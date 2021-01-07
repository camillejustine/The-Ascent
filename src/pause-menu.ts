class PauseMenu {
        private pauseButton: any;
        //private aboutButton: any;
        public game: iGameState;
      
        constructor(game: iGameState) {
          this.game = game;
          this.pauseButton = document.getElementById("start-game")!;
          this.pauseMenu = createElement('div');
        }
      
        public update() {
          this.pauseButton.onclick = () => {
            this.game.gameState = 'running';
          };
          
        }

        public keyPressed() {
            if (keyCode === SPACE) {
              fill(255)
            } else if (keyCode === SPACE) {
              fill(0)
            }
            return false; // prevent default
          }

        public draw() {}


 }
      



