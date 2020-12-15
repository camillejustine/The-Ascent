    class MainMenu {

        private startButton: HTMLElement;
        private aboutButton: HTMLElement;
        private isGameRunning: boolean;
        
        constructor() {
            this.isGameRunning = false;
            this.startButton = document.getElementById('button');
        }
        
        public update() {
            this.startButton.onclick = this.gameState;
        }
        
        public gameState() {
            this.isGameRunning = true;
            if(this.isGameRunning){
                gameFrame.draw();
                gameFrame.update();
            } else {
                this.update();
            }
        }
    }
    /* public constructor() {}
    
    private gameFrame() {}
    private about() {} */
}