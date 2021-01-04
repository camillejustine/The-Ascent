class SonarAttributes {
   
    private sonarRadius: number;
    private positionY: number;
    private positionX: number;
    private pulseLifespan: number;
    private control: Control;
    private pulses: Array<any>;

    public constructor() {
        this.control = new Control();
        this.positionY = 0;
        this.positionX = 0;
        this.sonarRadius = 0;
        this.pulseLifespan = 300;
        this.pulses = [];
    }
    
    public update() {
        if(frameCount % 120 == 0){
            this.pulses.push(new SonarAttributes())
            
        }
    }

    public draw() {
        for(let i = 0; i < this.pulses.length; i++){
            this.pulses[i].pulse();
        }   
    }

    public pulse(){
        this.control.update();
        this.positionX = this.control.getPositionX(); 
        this.positionY = this.control.getPositionY(); 
        this.sonarRadius = 200;
        push()
        strokeWeight(1);
        stroke('rgba(0,255,0,0.25)');
        noFill()
        circle(this.positionX, this.positionY, this.sonarRadius * 2)
        pop()
    }

    /*   private setSonarRange(){

    }

    private sonarPulseInterval(){

    } */

}


