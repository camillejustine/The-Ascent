class SonarAttributes {
   
    private sonarRadius: number;
    private positionY: number;
    private positionX: number;
    private pulseLifespan: number;
    private control: Control;
    private pulses: Array<any>;

    public constructor() {
        this.control = new Control();
        this.control.update();
        this.positionX = this.control.getPositionX(); 
        this.positionY = this.control.getPositionY(); 
        this.sonarRadius = 0;
        this.pulseLifespan = 80;
        this.pulses = [];
    }
    
    public update() {
       console.log(this.positionX)
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
        this.sonarRadius = this.sonarRadius + 3;
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


