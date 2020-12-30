
 abstract class Obstacle{
    public abstract move(): void;
    public abstract draw(): void;
    public abstract randomSpawn(): void;
    public rx: number;
    public ry: number;
    public r: number;
    public y: number;
    public x: number;
    public obstacleArray: Array<object>;
    public rotate: number;
    public sonarDetected: SonarDetected;
    
    constructor(sonarDetected: SonarDetected) {
        this.sonarDetected = sonarDetected;
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

interface IcebergPositions {
    icebergArray: Array<object>;
}
class Iceberg extends Obstacle{

    private iceberg: any;
    public collisionListener: CollisionListener;
    public icebergArray: Array<object>;
    

    constructor() {
        super();
        this.iceberg = icebergImage;
        this.icebergArray = []
        this.collisionListener = new CollisionListener(this); 
    }

      public update(){
         /*  this.move();
          this.randomSpawn();  */
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
            this.icebergArray.push(new Iceberg());
        }
        
        for (let i of this.icebergArray) {
                i.move()
            if(true){
                i.draw()
            }
        }              
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
          this.move();
          this.randomSpawn();
      }

    public move() {
        this.y += 2;
    }

    public draw() {
        fill(200, 50)
        circle(this.x, this.y, this.r)
        image(this.mine, this.x, this.y, 100, 100)
        ellipseMode(CENTER);
        imageMode(CENTER);
    }

    public randomSpawn() {
        if (random(1) < 0.001) {
            this.obstacleArray.push(new Mine());
        }
        for (let i of this.obstacleArray) {
            i.move()
            i.draw()
        }
    }
}