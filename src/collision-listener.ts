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
     //public submarine: Submarine;
     public rectH: number;
     public rectW: number;
    
    constructor(obstacles: ObstacleArray){
        this.collision = false;
        this.controlXY = new Control();
        this.pulse = new SonarAttributes();
        //this.submarine = new Submarine();
        this.obstacles = obstacles;
        this.angle = 0;
        this.cx = 0;
        this.cy = 0;
        this.scr = 30 * 2;
        this.scrArray = [];
        this.rectH = 138;
        this.rectW = 23.5;
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

          translate(this.cx, this.cy);
          stroke('rgba(0,255,0,0.25)');
          noFill()
          rect(-12.5,-70, 23.5, 138)
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
          for (let i = 0; i < this.obstacles.obstacles.length; i++) {
            let collision = this.subCollision(
              this.obstacles.obstacles[i].x,
              this.obstacles.obstacles[i].y,
              this.obstacles.obstacles[i].r, 
              this.cx,
              this.cy,
              this.rectH,
              this.rectW
              );
            if (collision) {
              this.obstacles.obstacles[i].collision = true;  
            } else {
              this.obstacles.obstacles[i].collision = false;
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

    
    public subCollision(cx, cy, radius, rx, ry, rw, rh) {
      let testX = cx;
      let testY = cy;

      // which edge is closest?
      if (cx < rx)         testX = rx;      // test left edge
      else if (cx > rx+rw) testX = rx+rw;   // right edge
      if (cy < ry)         testY = ry;      // top edge
      else if (cy > ry+rh) testY = ry+rh;   // bottom edge

      // get distance from closest edges
      let distX = cx-testX;
      let distY = cy-testY;
      let distance = sqrt( (distX*distX) + (distY*distY) );

      // if the distance is less than the radius, collision!
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
