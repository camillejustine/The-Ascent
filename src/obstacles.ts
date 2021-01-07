

abstract class Obstacle{
    public abstract move(): void;
    public abstract draw(): void;
    public abstract update(): void;
    public rx: number;
    public ry: number;
    public r: number;
    public y: number;
    public x: number;
    public detected: boolean;

    constructor() {
        this.rx = random(50, 150);
        this.ry = random(50, 120);
        this.r = random(50, 150);
        this.y = -100;
        this.x = random(10, 900);
        this.detected = false;

        if (this.rx < this.r || this.rx > this.r) {
            this.rx = this.r;
        } if (this.ry < this.r || this.ry > this.r) {
            this.ry = this.r;
        }
    }
}

class Iceberg extends Obstacle {
    private iceberg: any;

    constructor() {
        super();
        this.iceberg = icebergImage;
    }

    public update() {
        
    }

    public move() {
        this.y += 2;
    }

    public draw() {
        if(this.detected){
        image(this.iceberg, this.x, this.y, this.rx, this.ry)
        imageMode(CENTER);
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

    public update() {
    
    }

    public move() {
        this.y += 2;
    }

    public draw() {
        if(this.detected){
        image(this.mine, this.x, this.y, 100, 100)
        imageMode(CENTER);
        }
    }
}

