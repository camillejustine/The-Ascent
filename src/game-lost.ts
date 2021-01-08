class GameLost {
    private div: p5.Element;
    private restartGameCallback: iGameState;

    public constructor(restartGameCallback: iGameState) {
        this.restartGameCallback = restartGameCallback;
        this.div = createElement('main-menu');

        const restartButton = createElement('button');
        restartButton.addClass('button');
        restartButton.html('Restart');
        restartButton.mousePressed(() => this.resumeGame);

        const backToMain = createElement('button');
        backToMain.addClass('button');
        backToMain.html('Back To Main');
        backToMain.mousePressed(() => this.backToMain());

        this.div.child(restartButton);
        this.div.child(backToMain);
    }
    
    private resumeGame() {
        console.log('restart');
        this.div.hide();
        this.restartGameCallback();
    }
    
    private backToMain() {
        console.log('backtomain');
        // this.backToMainCallback();
    }
}
