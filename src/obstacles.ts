abstract class Obstacle {
    public abstract move(): void; 
    public abstract draw(): void;
    public abstract randomSpawn(): void;
    public rx: number;
    public ry: number;
    public y: number;
    public x: number;
    
    constructor(){
        this.rx = 100;
        this.ry = 100;
        this.y = -100;
        this.x = random(10, 900);
    }
}
class Iceberg extends Obstacle {

    private iceberg: any;
    private iceArray: Array<any>;

    constructor() {
        super();
        this.iceArray = [];
        
        this.iceberg = iceberg;
    }

  /*   public update(){
        this.move();
        this.randomSpawn();
    } */

    public move() {
        this.y += 2;
    }

    public draw(){
        image(this.iceberg,this.x,this.y, this.rx,this.ry)
        fill(200,50)
        rect( this.x,this.y, this.rx,this.ry)
    }

    public randomSpawn() {
        if (random(1) < 0.01){
            this.iceArray.push(new Iceberg());
        }
        for(let i of this.iceArray){
            if(i.x + i.rx >= i.rx && i.x <= i.rx + i.x){
                i.move()
                i.draw()
            } else {

            }  
        }
    }
}

class Mine extends Obstacle {
    
    private mine: any;
    private mineArray: Array<any>;

    constructor() {
        super();
        this.mineArray = [];
        this.mine = mine;
    }

  /*   public update(){
        this.move();
        this.randomSpawn();
    } */

    public move() {
        this.y += 2;
    }

    public draw(){
        image(this.mine,this.x,this.y, this.rx,this.ry)
        fill(200,50)
        rect( this.x,this.y, this.rx,this.ry)
    }

    public randomSpawn() {
        if (random(1) < 0.001){
            this.mineArray.push(new Mine());
        }
        for(let i of this.mineArray){
            i.move()
            i.draw()
        }
    }
}