interface SonarDetected {
    collission: boolean;//FIGURE OUT HOW TO IMPLEMENT BOOLEAN IN OBSTACLES FIRST THING
  }

class CollisionListener implements SonarDetected{
     private cx: number;
     private cy: number;
     private cr: number;
     public collission: boolean;
     public controlXY: Control;
     public obstacleArray: Obstacle[];

    /* public subPosition: SubPosition; */
    /* public obstacleArray: ObstacleArray; */
    
    constructor(/* subPosition: SubPosition, */ /* obstacleArray: ObstacleArray */){
         this.controlXY = new Control();
         /* this.obstacleArray = obstacleArray; */
         this.obstacleArray = [
             new Iceberg(),
             new Mine()
         ];

         this.collission = false;
         this.cx = 50;
         this.cy = 50;
         this.cr = 250;     
     }
    
     public update() {
         for(let i of this.obstacleArray){
             i.randomSpawn();
        }
        
     }

     public draw() {
         this.controlXY.keyPressed();
         console.log(this.controlXY.subPositionX, this.controlXY.subPositionY);
         this.cx = this.controlXY.getPositionX();
         this.cy = this.controlXY.getPositionY();
         push()
         strokeWeight(1);
         stroke('rgba(0,255,0,0.25)');
         noFill()
         circle(this.cx, this.cy, this.cr*2)
         pop()
         
         for(const obstacle of this.obstacleArray){
            console.log(obstacle)
            fill(200, 50)
            circle(obstacle.x,obstacle.y,obstacle.r)
            ellipseMode(CENTER);
            this.collission = this.hit(this.cx,this.cy,this.cr, obstacle.x,obstacle.y,obstacle.r/2);
            if (this.collission) {
                console.log("HIT!")
                }
            else { 
                console.log("NOPE")
            }
           
        }
           
        }

    public hit(cx, cy, cr, c2x, c2y, c2r){
        // get distance between the circle's centers
        // use the Pythagorean Theorem to compute the distance
        let distX = cx - c2x;
        let distY = cy - c2y;
        let distance = sqrt( (distX*distX) + (distY*distY) );

        // if the distance is less than the sum of the circle's
        // radii, the circles are touching!
        if (distance <= cr+c2r) {
            return true;
        }
        return false;
    }
}

    //assign r variables to submarine circle and then call collision listener functions. 
    /* public constructor() {}
    
    public update() {}


//         let d = dist(cx, cy, testX, testY);

//         if (d <= rad) {
//             return true;
//         }
//         return false;
//     }
//     /* public constructor() {}

//     public update() {}

//     private setShipStatus() {}

//     private setObstacleIntegrity() {}

//     private shipStatusDamaged() {}

//     private grantPowerUp() {}

//     private checkCollisions(submarine, obstacles, powerups) {}

//     private applyCollisionsEffects() {} */


