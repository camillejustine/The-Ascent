
interface objecetDetected {
    objectDetected: boolean;
}
 abstract class Obstacle implements objecetDetected{
    public abstract move(): void;
    public abstract draw(): void;
    public abstract update(): void;
    public rx: number;
    public ry: number;
    public r: number;
    public y: number;
    public x: number;
    public rotate: number;
    public collisionlistener: CollisionListener;
    public objectDetected: boolean;
    //put boolean for true false here instead which is changed by collisionlistener. 
    //remove for loops and array from here.
    //send array to colissionlistner from gameframe 
        
    constructor() {
        this.collisionlistener = new CollisionListener(this);
        this.rx = random(50,150);
        this.ry = random(50,120);
        this.r = random(50,150);
        this.y = -100;
        this.x = random(10, 900);
        this.rotate = random(0,360)
        this.objectDetected = false;
        
        if(this.rx < this.r || this.rx > this.r){
            this.rx = this.r; 
        } if (this.ry < this.r || this.ry > this.r){
            this.ry = this.r;
        }
    }
}

class Iceberg extends Obstacle{
    private iceberg: any;

    constructor() {
        super();
        this.iceberg = icebergImage;
    }

    public update(){
         this.collisionlistener.update();
    }
    
    public move() {
        this.y += 2;
    }

    public draw() {
        image(this.iceberg, this.x, this.y, this.rx, this.ry) 
        imageMode(CENTER);
    }   
}

class Mine extends Obstacle {
    private mine: any;
    public r: number

    constructor() {
        super();
        this.mine = mine;
        this.r = 100;
    }

    public update(){
        this.collisionlistener.update();
    }

    public move() {
        this.y += 2;
    }

    public draw() { 
        image(this.mine, this.x, this.y, 100, 100)
        imageMode(CENTER);
    }
}

