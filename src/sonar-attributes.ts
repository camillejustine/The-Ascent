class SonarAttributes {
   
    private sonarRadius: number;
    private positionY: number;
    private positionX: number;
    private control: Control;
    public pulses: Array<any>;
    public pulseLifespan: number;
    

    public constructor() {
        this.control = new Control();
        this.positionX = 0; 
        this.positionY = 0; 
        this.sonarRadius = 0;
        this.pulseLifespan = 80;
        this.pulses = [];
    }
    
    public update() {
        this.draw();
        if(frameCount % 80 == 0){
            this.pulses.push(new SonarAttributes());
        }
    }

    public draw() {
        this.control.update();
        for(let i = 0; i < this.pulses.length; i++){
            this.pulses[i].positionX = this.control.getPositionX(); 
            this.pulses[i].positionY = this.control.getPositionY(); 
            this.pulses[i].pulse();
            //this.pulses[i].pulse();
            if(this.pulses[i].pulseLifespan <= 0){
                this.pulses.splice(i, 1);
            }
        }   
    }

    public pulse() {
        this.sonarRadius = this.sonarRadius + 2;
        this.pulseLifespan--;
        strokeWeight(2);
        stroke('rgba(0,255,0,0.25)');
        noFill()
        circle(this.positionX, this.positionY, this.sonarRadius * 2)     
    }

    /*   private setSonarRange(){

    }

    private sonarPulseInterval(){

    } */

}


