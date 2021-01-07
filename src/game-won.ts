class Gamewon {
    private div: p5.Element;

    public constructor() {
        this.div = createElement('main-menu');

        const button1 = createElement('button');
        button1.addClass('button');
        button1.html('Click here');
        button1.mousePressed(this.restartGame);

        const button2 = createElement('button');
        button2.addClass('button');
        button2.html('Click here');
        button2.mousePressed(this.backToMain);


    }

    //public update() {}
    
    private restartGame() {
        this.div.show()
    }
    
    private backToMain() {}

}