//interfaces for all obstacles and powerups. 
  
class CollisionListener{
     private cx: number;
     private cy: number;
     private r: number;

     private sx: number;
     private sy: number;
     private sw: number;
     private sh: number;

    public subPosition: SubPosition;
    
    constructor(subPosition: SubPosition){
         this.subPosition = subPosition;
    
         this.cx = 50;
         this.cy = 50;
         this.r = 250;

         this.sx = 200;
         this.sy = 200;
         this.sw = 200;
         this.sh = 200;

     }
    
    

     public update() {
         console.log(this.subPosition.subPositionX, this.subPosition.subPositionY)
     }

     //send obstacle array here. assign each circle a value.

     public draw() {
         this.cx = this.subPosition.subPositionX;
         this.cy = this.subPosition.subPositionY;
         let hit = this.hit(this.cx,this.cy,this.r, this.sx,this.sy,this.sw,this.sh);
         push()
         strokeWeight(1);
         stroke('rgba(0,255,0,0.25)');
         noFill()
         circle(this.cx, this.cy, this.r*2)
         pop()
         if (hit) {
             fill(255,150,0);
        }
        else {
             fill(0,150,255);
        }
           rect(this.sx,this.sy, this.sw,this.sh);
        }


        public hit(cx, cy, rad, rx, ry, rw, rh){

        let testX = this.cx;
        let testY = this.cy;
        
        if (cx < rx){
            testX = rx; // test left edge
        }      
        else if (cx > rx+rw) {
            testX = rx+rw; // right edge
        }   
        if(cy < ry){
            testY = ry; // top edge
        }      
        else if (cy > ry+rh) {
            testY = ry+rh; // bottom edge
        }   
  
        let d = dist(cx, cy, testX, testY);
  
        if (d <= rad) {
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


