abstract class Obstacle {
    public abstract move(): void;
    public abstract draw(): void;
    public abstract randomSpawn(): void;
    public rx: number;
    public ry: number;
    public r: number;
    public y: number;
    public x: number;

    constructor() {
        this.rx = random(50,150);
        this.ry = random(50,120);
        this.r = random(50,150);
        this.y = -100;
        this.x = random(10, 900);
        if(this.rx < this.r || this.rx > this.r){
            this.rx = this.r; 
        } if (this.ry < this.r || this.ry > this.r){
            this.ry = this.r;
        }
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

    public draw() {
         fill(255, 204, 0)
        //circle(this.x, this.y, this.r)
        ellipseMode(CENTER);
        image(this.iceberg, this.x, this.y, this.rx, this.ry)
        imageMode(CENTER);
    }

    public randomSpawn() {
        if (random(1) < 0.05) {
            this.iceArray.push(new Iceberg());
        }
        
        let overlapping = false;
        for (let i = 0; i < this.iceArray.length ; i++) {
                this.iceArray[i].move()
                this.iceArray[i].draw()
            /* let last = this.iceArray[this.iceArray.length - 1];
            
            

            let d = dist(this.iceArray[i].x, this.iceArray[i].y, this.iceArray[i + 1].x, this.iceArray[i + 1].y) 
            if(d < this.iceArray[i].r + this.iceArray[i+1].r){
                
                overlapping = true;
            }

            if(!overlapping) {
                
            } */
            
            
            /* this.iceArray[i].x = validPosX;  */
            //console.log(validPosX)
            //console.log(this.iceArray[length])
            /* let validPosX = random(this.iceArray[i].x + this.iceArray[i].r, this.iceArray[i].x - this.iceArray[i].r) */
            /* let g = random(0,this.iceArray.length - 1); */
            
            
            
            

        }
        

    }
}


class Mine extends Obstacle {

    private mine: any;
    private mineArray: Array<any>;
    private r: number

    constructor() {
        super();
        this.mineArray = [];
        this.mine = mine;
        this.r = 100;
    }

    /*   public update(){
          this.move();
          this.randomSpawn();
      } */

    public move() {
        this.y += 2;
    }

    public draw() {
        
        fill(200, 50)
        //circle(this.x, this.y, this.r)
        image(this.mine, this.x, this.y, 100, 100)
        ellipseMode(CENTER);
        imageMode(CENTER);
    }

    public randomSpawn() {
        if (random(1) < 0.01) {
            this.mineArray.push(new Mine());
        }
        for (let i of this.mineArray) {
            i.move()
            i.draw()
        }
    }
}