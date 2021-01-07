class CollisionListener {
     private cx: number;
     private cy: number;
     public controlXY: Control;
     public obstacles: ObstacleArray;
     public pulse: SonarAttributes;
     private scr: number;
     private angle: number;
     private scrArray: Array<any>;
    
    constructor(obstacles: ObstacleArray){
        this.controlXY = new Control();
        this.pulse = new SonarAttributes();
        this.obstacles = obstacles;
        this.angle = 0;
        this.cx = 0;
        this.cy = 0;
        this.scr = 30;
        this.scrArray = [];
     }

     public update() {
        this.pulse.update();
        this.controlXY.update();
        this.cx = this.controlXY.getPositionX();
        this.cy = this.controlXY.getPositionY();
        this.angle = this.controlXY.getAngle();
        this.setSubCollision();
        for(let contact of this.scrArray){
          contact.cy 
        }
        push()
        
        fill(200, 50);
        strokeWeight(0);
        translate(this.cx, this.cy);
          rotate(this.angle);
        circle(0, -60, this.scr);
        circle(0, -30, this.scr);
        circle(0, 0, this.scr);
        circle(0, 30, this.scr);
        circle(0, 60, this.scr);
        pop()
       
        
        console.log(this.scrArray)

        for(let radii of this.pulse.pulses){
          for (let i = 0; i < this.obstacles.obstacles.length; i++) {
            const distance = dist(
              this.cx,
              this.cy,
              this.obstacles.obstacles[i].x,
              this.obstacles.obstacles[i].y
            );
            if (distance < radii.sonarRadius) {
              this.obstacles.obstacles[i].detected = true;       
        } 
      }
    }  
  }
  public setSubCollision(){
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
}


/* let hit = subCollision(this.cx,this.cy,r, sx,sy,sw,sh);
public subCollision(cx: number, float cy, float radius, float rx, float ry, float rw, float rh) {

} */

      /* for(const obstacle of this.obstacleArray.obstacleArray){
           fill(200, 50)
           circle(obstacle.x,obstacle.y,obstacle.r)
           ellipseMode(CENTER);
           this.collission = this.hit(this.cx,this.cy,this.cr, obstacle.x,obstacle.y,obstacle.r/2); 
           console.log(this.collission)
       } */

   /*  public hit(cx, cy, cr, c2x, c2y, c2r){
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
