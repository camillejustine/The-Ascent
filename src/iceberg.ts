abstract class Obstacle {
    public abstract draw(): number;
    public abstract randomSpawn(): number; 
}
class Iceberg extends Obstacle {
    private iceberg: any;
    private r: number;
    private y: number;
    private x: number;
    private iceArray: Array<any>;

    constructor() {
        super();
        this.iceArray = [];
        this.r = 100;
        this.y = -100;
        this.x = random(10, 900);
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
            this.iceArray.push(new Iceberg());
        }
        for(let i of this.iceArray){
            i.move()
            i.draw()
        }
    }
}