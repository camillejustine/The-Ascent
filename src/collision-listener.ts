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
     public timer: number;

     public r: number;
    public x: number;
    
    constructor(allObjectsArray: ObstacleArray){
        this.collision = false;
        this.controlXY = new Control();
        this.allObjectsArray = allObjectsArray;
        this.pulse = new SonarAttributes(this.allObjectsArray);
        this.cx = 0;
        this.cy = 0;
        this.angle = 0;
        this.rectH = 138;
        this.rectW = 23.5;
        this.timer = 5;
        this.r = 30;
        this.x = 0;
     }

     public update() {
          this.pulse.update();
          this.controlXY.update();
          this.cx = this.controlXY.getPositionX();
          this.cy = this.controlXY.getPositionY();
          this.angle = this.controlXY.getAngle();
          this.submarineCollisions();
          this.sonarDetection();
      }
      
      public submarineCollisions(){
        let circleArray = [
          {"x": this.cx, "y": this.cy - 60, "r": this.r},
          {"x": this.cx, "y": this.cy - 30, "r": this.r},
          {"x": this.cx, "y": this.cy , "r": this.r},
          {"x": this.cx, "y": this.cy + 30, "r": this.r},
          {"x": this.cx, "y": this.cy + 60, "r": this.r} 
        ]; 
        
        
        for(let i = 0; i < circleArray.length; i++){
          circle(circleArray[i].x,circleArray[i].y,circleArray[i].r)
          for(let i = 0; i < this.allObjectsArray.allObjects.length; i++){
              let collision = this.detect(
                circleArray[i].x, 
                circleArray[i].y, 
                circleArray[i].r, 
                this.allObjectsArray.allObjects[i].x, 
                this.allObjectsArray.allObjects[i].y, 
                this.allObjectsArray.allObjects[i].r
                );
                if (collision) {
                  this.allObjectsArray.allObjects[i].collision = true;
                  this.allObjectsArray.allObjects[i].collided = true;
                } else {
                  this.allObjectsArray.allObjects[i].collision = false;
                } 
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

    /* public subCollision(cx: number, cy: number, radius: number, rx: number, ry: number, rw: number, rh: number) {
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
    } */


     /* let collision = this.subCollision(
            this.allObjectsArray.allObjects[i].x,
            this.allObjectsArray.allObjects[i].y,
            this.allObjectsArray.allObjects[i].r/2, 
            this.cx,
            this.cy,
            this.rectW,
            this.rectH
          ); */


    /** Rotates a point around another center point, will return a new point */
  public rotatePointAroundCenter(point: p5.Vector, center: p5.Vector, angle: number): p5.Vector {​​​​
      //angle in radions 
      const angleToCenter = Math.atan2(point.y - center.y, point.x - center.x);
      const distToCenter = center.dist(point);
      return p5.Vector.fromAngle(angleToCenter + angle, distToCenter).add(center);
  }​​​​
}

    


     



