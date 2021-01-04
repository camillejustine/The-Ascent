class SonarAttributes {
   
    private sonarRadius: number;
    private positionY: number;
    private positionX: number;
    private pulseLifespan: number;
    private control: Control;
    private pulses: Array<number>;

    public constructor() {
        this.control = new Control();
        this.positionY = 0;
        this.positionX = 0;
        this.sonarRadius = 0;
        this.pulseLifespan = 300;
        this.pulses = [];
    }
    
    public update() {
        this.control.update();
        this.positionX = this.control.getPositionX(); 
        this.positionY = this.control.getPositionY(); 
    }

    public draw() {
        push()
        strokeWeight(1);
        stroke('rgba(0,255,0,0.25)');
        noFill()
        circle(this.positionX, this.positionY, this.sonarRadius*2)
        pop()
    }

  /*   private setSonarRange(){

    }

    private sonarPulseInterval(){

    } */

}

