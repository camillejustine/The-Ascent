class Control {
    
    private right: number;
    private left: number;
    private mouseX: number;
    private mouseY: number;

    public constructor(){
        this.left = LEFT_ARROW;
        this.right = RIGHT_ARROW;
        this.mouseX = mouseX;
        this.mouseY = mouseY;
    } 

    public keyPress() {
        if (keyIsDown(this.left)) {
            angle = angle - 1;
        } else if (keyIsDown(this.right)){
            angle = angle + 1;
        } 
    }
    public startController(){
        this.keyPress()
        angleMode(DEGREES)
        if(gameTimer < 3){
            translate(width/2,height/1.5)
        } else (
            translate(this.mouseX, this.mouseY)
        )
        rotate(angle);
    }
    //if mouse is on left pixels of width/2 turn left
    //if mouse is on right of pixels width turn right
}





