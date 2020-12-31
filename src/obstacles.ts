interface collissionDetection {
    obstacleArray: Array<any>;
}
 abstract class Obstacle implements collissionDetection{
    public abstract move(): void;
    public abstract draw(): void;
    public abstract randomSpawn(): void;
    public abstract update(): void;
    public rx: number;
    public ry: number;
    public r: number;
    public y: number;
    public x: number;
    public obstacleArray: Array<any>;
    public rotate: number;
    public collissionListener: CollisionListener;
    //public sonarDetected: SonarDetected;
    
    constructor(/* sonarDetected: SonarDetected */) {
        //this.sonarDetected = sonarDetected;
        this.collissionListener = new CollisionListener(this);
        this.obstacleArray = [];
        this.rx = random(50,150);
        this.ry = random(50,120);
        this.r = random(50,150);
        this.y = -100;
        this.x = random(10, 900);
        this.rotate = random(0,360)
        
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
        this.collissionListener.update();      
    }
    
    public move() {
        this.y += 2;
    }

    public draw() {
        image(this.iceberg, this.x, this.y, this.rx, this.ry) 
        imageMode(CENTER);
    }

    public randomSpawn() {
          
        if (random(1) < 0.01) {
            this.obstacleArray.push(new Iceberg());
        }
        for (let i of this.obstacleArray) {
                i.move()
            if(this.collissionListener.collission === true){
                i.draw()
            } 
        } 
        //return this.obstacleArray
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
        this.collissionListener.update(); 
    }

    public move() {
        this.y += 2;
    }

    public draw() { 
        image(this.mine, this.x, this.y, 100, 100)
        imageMode(CENTER);
    }

    public randomSpawn() {
        if (random(1) < 0.001) {
            this.obstacleArray.push(new Mine());
        }
        for (let i of this.obstacleArray) {
            i.move()
            if(this.collissionListener.collission === true){
              i.draw()
          } 
        }
    }
}