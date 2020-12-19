interface SubPosition {
    subPositionX: number;
    subPositionY: number;
  }
  
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
         this.r = 40;

         this.sx = 200;
         this.sy = 200;
         this.sw = 200;
         this.sh = 200;

     }
    
    

     public update() {
         console.log(this.subPosition.subPositionX)
     }

     public draw() {
         this.cx = mouseX;
         this.cy = mouseY;
         let hit = this.hit(this.cx,this.cy,this.r, this.sx,this.sy,this.sw,this.sh);
         fill(0, 255, 100);
         circle(this.cx, this.cy, this.r*2)
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


