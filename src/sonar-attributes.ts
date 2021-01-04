class SonarAttributes {
   
    private sonarRadius: number;
    private positionY: number;
    private positionX: number;
    private control: Control;
    private pulses: Array<any>;
    private pulseLifespan: number;

    public constructor() {
        this.control = new Control();
        this.positionX = 0; 
        this.positionY = 0; 
        this.sonarRadius = 0;
        this.pulseLifespan = 100;
        this.pulses = [];
    }
    
    public update() {
        this.draw();
        if(frameCount % 100 == 0){
            this.pulses.push(new SonarAttributes())
        }
        
    }

    public draw() {
        for(let i = 0; i < this.pulses.length; i++){
            this.pulses[i].pulse();
            if(this.pulses[i].pulseLifespan <= 0){
                this.pulses.splice(i, 1);
            }
        }   
    }

    public pulse(){
        this.control.update();
        this.positionX = this.control.getPositionX(); 
        this.positionY = this.control.getPositionY(); 
        this.sonarRadius = this.sonarRadius + 2;
        this.pulseLifespan--;
       //why is x and y reseting with each ping? 
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


