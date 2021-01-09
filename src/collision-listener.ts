class CollisionListener {
     private cx: number;
     private cy: number;
     public controlXY: Control;
     public allObjectsArray: ObstacleArray;
     public pulse: SonarAttributes;
     public angle: number;
     public collision: boolean;
     public rectH: number;
     public rectW: number;
     //public allObjectsArray: Array<any>;
    
    constructor(allObjectsArray: ObstacleArray){
        this.collision = false;
        this.controlXY = new Control();
        this.allObjectsArray = allObjectsArray;
        this.pulse = new SonarAttributes(this.allObjectsArray);
        this.angle = 0;
        this.cx = 0;
        this.cy = 0;
        this.rectH = 138;
        this.rectW = 23.5;
        //this.allObjectsArray = [];

     }

     public update() {
          this.pulse.update();
          this.controlXY.update();
          this.cx = this.controlXY.getPositionX() -12.5;
          this.cy = this.controlXY.getPositionY() -70;
          this.angle = this.controlXY.getAngle();
          this.submarineCollisions();
          this.sonarDetection();
          //this.allObjectsArray = this.obstacles.obstacles.concat(this.obstacles.powerUps) 
      }
      
      public submarineCollisions(){
        for(let i = 0; i < this.allObjectsArray.allObjects.length; i++){
          let collision = this.subCollision(
            this.allObjectsArray.allObjects[i].x,
            this.allObjectsArray.allObjects[i].y,
            this.allObjectsArray.allObjects[i].r/2, 
            this.cx,
            this.cy,
            this.rectW,
            this.rectH
          );
            if (collision) {
            this.allObjectsArray.allObjects[i].collision = true;  
            } else {
            this.allObjectsArray.allObjects[i].collision = false;
          } 
        }
      }

      public sonarDetection(){
        for(let radii of this.pulse.pulses){
          for(let i = 0; i < this.allObjectsArray.allObjects.length; i++){
            let detect = this.detect(
              this.cx, 
              this.cy, 
              radii.sonarRadius, 
              this.allObjectsArray.allObjects[i].x, 
              this.allObjectsArray.allObjects[i].y, 
              this.allObjectsArray.allObjects[i].r
              );
              if(detect) {
                this.allObjectsArray.allObjects[i].detected = true; 
              }
          } 
        }
      }

      public detect(cx: number, cy: number, cr: any, c2x: number, c2y: number, c2r: number){
        let distX = cx - c2x;
        let distY = cy - c2y;
        let distance = sqrt( (distX*distX) + (distY*distY) );

        if (distance <= cr+c2r) {
            return true;
        }
        return false;
    }

    public subCollision(cx: number, cy: number, radius: number, rx: number, ry: number, rw: number, rh: number) {
      let testX = cx;
      let testY = cy;
      
      if (cx < rx)         testX = rx;      
      else if (cx > rx+rw) testX = rx+rw;   
      if (cy < ry)         testY = ry;      
      else if (cy > ry+rh) testY = ry+rh;   

      let distX = cx-testX;
      let distY = cy-testY;
      let distance = sqrt( (distX*distX) + (distY*distY) );

      if (distance <= radius) {
        return true;
      }
      return false;
    }
}

    

/* const distance = dist(
  collisionPoint.cx,
  collisionPoint.cy,
  this.obstacles.obstacles[i].x,
  this.obstacles.obstacles[i].y
);
 */



     




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
