class GameWon {
    private div: p5.Element;
    private restartGameCallback: Function;

    public constructor(restartGameCallback: Function) {
        this.restartGameCallback = restartGameCallback;
        this.div = createElement('main-menu');

        const restartButton = createElement('button');
        restartButton.addClass('button');
        restartButton.html('Restart');
        restartButton.mousePressed(() => this.restartGame);

        const backToMainButton = createElement('button');
        backToMainButton.addClass('button');
        backToMainButton.html('Back To Main');
        backToMainButton.mousePressed(() => this.backToMain());

        this.div.child(restartButton);
        this.div.child(backToMainButton);
    }
    
    private restartGame() {
        console.log('restart');
        this.div.hide();
        this.restartGameCallback();
    }
    
    private backToMain() {
        console.log('backtomain');
        // this.backToMainCallback();
    }
}