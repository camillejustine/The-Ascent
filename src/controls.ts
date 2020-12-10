class Controls {
    private mouse: MouseEvent;
    private orient: KeyboardEvent;
    private pause: KeyboardEvent;

    constructor(mouse: MouseEvent, orient: KeyboardEvent, pause: KeyboardEvent){
        
    }

    public orientShip(){
        console.log(angle)
        if (keyCode === LEFT_ARROW) {
            angle = angle - 1;
        } else if (keyCode === RIGHT_ARROW){
            angle = angle + 1;
        } 
    }
    

    public draw() {
        angleMode(DEGREES)
        push()
        translate(mouseX, mouseY)
        mouseMoved()
        keyPressed()
        rotate(angle);
        image(subImage,-25, -125, 50, 250);
        pop()
    }

    public pauseGame() {

    }
}

const person = new Controls('1234434', 'David', 31);



