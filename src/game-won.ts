class GameWon {
    private div: p5.Element;
    private restartGameCallback: Function;

    public constructor(restartGameCallback: Function) {
        this.restartGameCallback = restartGameCallback;
        this.div = createElement('main-menu');

        const button1 = createElement('button');
        button1.addClass('button');
        button1.html('Restart');
        button1.mousePressed(() => this.restartGame);

        const button2 = createElement('button');
        button2.addClass('button');
        button2.html('Back To Main');
        button2.mousePressed(() => this.backToMain());

        this.div.child(button1);
        this.div.child(button2);
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