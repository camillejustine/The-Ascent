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
        if(this.rx < 100){
            this.r = 50;
        }
        this.r = 100;
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

    public draw() {

        image(this.iceberg, this.x, this.y, this.rx, this.ry)
        fill(200, 50)
        circle(this.x, this.y, this.r)
        //ellipseMode(CENTER);
        imageMode(CENTER);
    }

    public randomSpawn() {
        if (random(1) < 0.05) {
            this.iceArray.push(new Iceberg());
        }

        for (let i = 0; i < this.iceArray.length; i++) {
            this.iceArray[i].move()
            this.iceArray[i].draw()

            /* let g = random(0,this.iceArray.length - 1); */

            /* const validPosX = random(this.iceArray[i].x + this.iceArray[i].rx/2, this.iceArray[i].x - this.iceArray[i].rx/2)
            this.iceArray[i].x = validPosX; */
            //console.log(validPosX);
            /* this.iceArray[i].x = validPosX; */

            //console.log(this.iceArray.length)
            //console.log(this.iceArray[i].rx)

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
    }

    /*   public update(){
          this.move();
          this.randomSpawn();
      } */

    public move() {
        this.y += 2;
    }

    public draw() {
        image(this.mine, this.x, this.y, 100, 100)
        fill(200, 50)
        circle(this.x, this.y, this.r)
        //ellipseMode(CENTER);
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