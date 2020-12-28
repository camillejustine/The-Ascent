

class CollisionListener{
     private cx: number;
     private cy: number;
     private cr: number;

    /*  private c2x: number;
     private c2y: number;
     private c2r: number;
 */
    /* public subPosition: SubPosition; */
    public icebergPos: IcebergPositions;
    
    
    constructor(/* subPosition: SubPosition, */ icebergPos: IcebergPositions){
         /* this.subPosition = subPosition; */
         this.icebergPos = icebergPos;
         
         this.cx = 50;
         this.cy = 50;
         this.cr = 250;

         this.c2x = 200;
         this.c2y = 200;
         this.c2r = 100;
         
     }
    
     public update() {
         console.log(this.icebergPos.icebergArray)
     }

     //send obstacle array here. assign each circle a value.

     public draw() {
         /* ellipse(this.c2x,this.c2y, this.c2r * 2, this.c2r * 2);  */
         this.cx = mouseX /* this.subPosition.subPositionX */;
         this.cy = mouseY /* this.subPosition.subPositionY */;
         push()
         strokeWeight(1);
         stroke('rgba(0,255,0,0.25)');
         noFill()
         circle(this.cx, this.cy, this.cr*2)
         pop()
         console.log(this.icebergPos.icebergArray)
         for(const iceberg of this.icebergPos.icebergArray){
             
            let hit = this.sonarDetect(this.cx,this.cy,this.cr, iceberg.x,iceberg.y,iceberg.r);
            if (hit) {
                console.log("HIT!")
                 /* fill(255,150,0); */ 
                }
            else { 
                console.log("Nooope")
                /* fill(0,150,255);  */
            }
           
        }
           
        }

    public sonarDetect(cx, cy, cr, c2x, c2y, c2r){
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


