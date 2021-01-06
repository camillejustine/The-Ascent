class HeadsUpDisplay {

    public constructor() {}

    public update(){
        push()
        fill(225)
        text("FPS: " + Math.floor(frameRate()), width / 2, height / 2);
        pop()
    }
    /* 

    public draw(){}

    public update(){}



    private updateHudElements(){} */
}




