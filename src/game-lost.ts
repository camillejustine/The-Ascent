class Gamelost {
    private div: p5.Element;
    
    public constructor() {
        this.div = createElement('main-menu');
        // this.div.hide();

        const button = createElement('button');
        button.addClass('button');
        button.html('Click here');
        button.mousePressed(this.restartGame);


    }
    
    private restartGame() {
        this.div.hide();
    }
    // private backToMain() {}

    public showContent() {
        this.div.show();
    }
    
    public update() {}
    
    public draw() {}

    
}    
