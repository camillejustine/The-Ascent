class CollisionListener {
     private cx: number;
     private cy: number;
     public controlXY: Control;
     public obstacles: ObstacleArray;
     public pulse: SonarAttributes;
     private scr: number;
     public angle: number;
     private scrArray: Array<any>;
     public collision: boolean;
    
    constructor(obstacles: ObstacleArray){
        this.collision = false;
        this.controlXY = new Control();
        this.pulse = new SonarAttributes();
        this.obstacles = obstacles;
        this.angle = 0;
        this.cx = 0;
        this.cy = 0;
        this.scr = 30 * 2;
        this.scrArray = [];
     }

     public update() {
          this.pulse.update();
          this.controlXY.update();
          this.cx = this.controlXY.getPositionX();
          this.cy = this.controlXY.getPositionY();
          this.angle = this.controlXY.getAngle();
          this.subContactPoints();
          this.submarineCollisions();
          
          this.sonarDetection();  
        }

      public subContactPoints(){
        this.scrArray = [ 
          {   
            "cx": this.cx ,
            "cy": this.cy - 60,
            "cr": this.scr
          },
          {   
            "cx": this.cx ,
            "cy": this.cy - 30,
            "cr": this.scr
          },
          {  
            "cx": this.cx,
            "cy": this.cy,
            "cr": this.scr
          },
          {   
            "cx": this.cx ,
            "cy": this.cy + 30,
            "cr": this.scr
          },
          {   
            "cx": this.cx,
            "cy": this.cy + 60,
            "cr": this.scr
          }
        ];
      }

      public submarineCollisions(){
        for(let collisionPoint of this.scrArray){
          for (let i = 0; i < this.obstacles.obstacles.length; i++) {
            const distance = dist(
              collisionPoint.cx,
              collisionPoint.cy,
              this.obstacles.obstacles[i].x,
              this.obstacles.obstacles[i].y
            );
            if (distance < collisionPoint.cr/2) {
              //this.collision = true;    
            } else if (distance > collisionPoint.cr){
              //this.collision = false;
            } 
          }
        } 
      }

      public sonarDetection(){
        for(let radii of this.pulse.pulses){
          for(let i = 0; i < this.obstacles.obstacles.length; i++){
            this.collision = this.hit(
              this.cx,this.cy,radii.sonarRadius, 
              this.obstacles.obstacles[i].x,
              this.obstacles.obstacles[i].y,
              this.obstacles.obstacles[i].r/2
              ); 
              if (this.collision) {
                this.obstacles.obstacles[i].detected = true; 
            } 
          }
        }
      }

      public hit(cx: number, cy: number, cr: any, c2x: number, c2y: number, c2r: number){
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

    




/* let hit = subCollision(this.cx,this.cy,r, sx,sy,sw,sh);
public subCollision(cx: number, float cy, float radius, float rx, float ry, float rw, float rh) {

} */

     




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
