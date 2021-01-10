class SonarAttributes {
   
    private sonarRadius: number;
    private positionY: number;
    private positionX: number;
    private control: Control;
    public pulses: Array<any>;
    public pulseLifespan: number;
    public allObjectsArray: ObstacleArray;
    public pulseRate: number;
    private timer: number;
    private range: number;
    

    public constructor(allObjectsArray: ObstacleArray) {
        this.allObjectsArray = allObjectsArray;
        this.control = new Control();
        this.positionX = 0; 
        this.positionY = 0; 
        this.sonarRadius = 0;
        this.pulseLifespan = 100;
        this.pulses = [];
        this.pulseRate = 85;
        this.timer = 5;
        this.range = 2;
    }
    
    public update() {
        this.draw();
        this.sonarPulseFrequency()
        this.sonarRange();
        if(frameCount % this.pulseRate == 0){
            this.pulses.push(new SonarAttributes(this.allObjectsArray));
        }
    }

    public draw() {
        this.control.update();
        for(let i = 0; i < this.pulses.length; i++){
            this.pulses[i].positionX = this.control.getPositionX(); 
            this.pulses[i].positionY = this.control.getPositionY() - 60; 
            this.pulses[i].pulse();
            this.pulses[i].pulse();
            if(this.pulses[i].pulseLifespan <= 0){
                this.pulses.splice(i, 1);
            }
        }   
    }

    public pulse() {
        this.sonarRange();
        this.sonarRadius = this.sonarRadius + this.range;
        this.pulseLifespan--;
        strokeWeight(2);
        stroke('rgba(0,255,0,0.25)');
        noFill()
        circle(this.positionX, this.positionY, this.sonarRadius * 2)     
    }

    public sonarPulseFrequency(){
        console.log()
        for(let i = 0; i < this.allObjectsArray.allObjects.length; i++){
            if(this.allObjectsArray.allObjects[i].collision && this.allObjectsArray.allObjects[i].id === 'pulse'){
                //set active on powerups. 
                if(frameCount % 60 == 0 && this.timer > 0){
                    this.timer --;
                }   
                this.pulseRate = 20; 
                console.log(this.allObjectsArray.allObjects[i].collision)          
            }
        }
    }

    public sonarRange(){
        for(let i = 0; i < this.allObjectsArray.allObjects.length; i++){
            if(this.allObjectsArray.allObjects[i].collision && this.allObjectsArray.allObjects[i].id === 'range'){
                this.range = 10;
                console.log(this.range)
            }
        }
    } 
}


