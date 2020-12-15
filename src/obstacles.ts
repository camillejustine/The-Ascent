

class Obstacle {
    
    private iceberg: any;
    private r: number;
    private y: number;
    private x: number;
    

    constructor() {
        this.r = 100;
        this.y = -100;
        this.x = random([10], [780]);
        this.iceberg = iceberg;
    }

    public move () {
        this.y += 2;
    }

    public draw(){
        image(this.iceberg,this.x,this.y, this.r,this.r)
        fill(200,50)
        rect( this.x,this.y, this.r,this.r)
    }

    public randomSpawn() {
        if (random(1) < 0.01){
            iceBergs.push(new Obstacle());
        }
        for(let i of iceBergs){
            i.move()
            i.draw()
        }
    }
}