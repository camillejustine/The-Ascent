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
          for(let i = 0; i < this.allObjectsArray.allObjects.length; i++){
           for(let j = 0; j < circleArray.length; j++){
              let position = createVector(circleArray[j].x,circleArray[j].y);
              let center = createVector(this.cx,this.cy);
              let rotate = this.rotatePointAroundCenter(position, center,this.angle)
              circle(rotate.x, rotate.y, circleArray[j].r)
                let collision = this.detect(
                rotate.x, 
                rotate.y, 
                circleArray[j].r, 
                this.allObjectsArray.allObjects[i].x, 
                this.allObjectsArray.allObjects[i].y, 
                this.allObjectsArray.allObjects[i].r/2
                );
                if (collision) {
                  this.allObjectsArray.allObjects[i].collision = true;
                  this.allObjectsArray.allObjects[i].collided = true;
                } else {
                  this.allObjectsArray.allObjects[i].collision = false;
                } 
              }
            }
            /* for(let i = 0; i < this.allObjectsArray.allObjects.length; i++){

              let position = createVector(circleArray[1].x,circleArray[1].y);
              let center = createVector(this.cx,this.cy);
              let rotate = this.rotatePointAroundCenter(position, center,this.angle)

              circle(rotate.x, 
                rotate.y, 
                circleArray[1].r)
              let collision = this.detect(
                rotate.x, 
                rotate.y, 
                circleArray[1].r, 
                this.allObjectsArray.allObjects[i].x, 
                this.allObjectsArray.allObjects[i].y, 
                this.allObjectsArray.allObjects[i].r/2
                );
                if (collision) {
                  this.allObjectsArray.allObjects[i].collision = true;
                  this.allObjectsArray.allObjects[i].collided = true;
                } else {
                  this.allObjectsArray.allObjects[i].collision = false;
                } 
            }
            for(let i = 0; i < this.allObjectsArray.allObjects.length; i++){

              let position = createVector(circleArray[2].x,circleArray[2].y);
              let center = createVector(this.cx,this.cy);
              let rotate = this.rotatePointAroundCenter(position, center,this.angle)

              circle(rotate.x, 
                rotate.y, 
                circleArray[2].r)
                circle(rotate.x, 
                  rotate.y, 
                  circleArray[2].r)
              let collision = this.detect(
                rotate.x, 
                rotate.y, 
                circleArray[2].r, 
                this.allObjectsArray.allObjects[i].x, 
                this.allObjectsArray.allObjects[i].y, 
                this.allObjectsArray.allObjects[i].r/2
                );
                if (collision) {
                  this.allObjectsArray.allObjects[i].collision = true;
                  this.allObjectsArray.allObjects[i].collided = true;
                } else {
                  this.allObjectsArray.allObjects[i].collision = false;
                } 
            }
            for(let i = 0; i < this.allObjectsArray.allObjects.length; i++){

              let position = createVector(circleArray[3].x,circleArray[3].y);
              let center = createVector(this.cx,this.cy);
              let rotate = this.rotatePointAroundCenter(position, center,this.angle)

              circle(rotate.x, 
                rotate.y, 
                circleArray[3].r)
              let collision = this.detect(
                rotate.x, 
                rotate.y, 
                circleArray[3].r, 
                this.allObjectsArray.allObjects[i].x, 
                this.allObjectsArray.allObjects[i].y, 
                this.allObjectsArray.allObjects[i].r/2
                );
                if (collision) {
                  this.allObjectsArray.allObjects[i].collision = true;
                  this.allObjectsArray.allObjects[i].collided = true;
                } else {
                  this.allObjectsArray.allObjects[i].collision = false;
                } 
            }
           */  /*  for(let i = 0; i < this.allObjectsArray.allObjects.length; i++){

              let position = createVector(circleArray[4].x,circleArray[4].y);
              let center = createVector(this.cx,this.cy);
              let rotate = this.rotatePointAroundCenter(position, center,this.angle)

              circle(rotate.x, 
                rotate.y, 
                circleArray[4].r)
              let collision = this.detect(
                rotate.x, 
                rotate.y, 
                circleArray[4].r, 
                this.allObjectsArray.allObjects[i].x, 
                this.allObjectsArray.allObjects[i].y, 
                this.allObjectsArray.allObjects[i].r/2
                );
                if (collision) {
                  this.allObjectsArray.allObjects[i].collision = true;
                  this.allObjectsArray.allObjects[i].collided = true;
                } else {
                  this.allObjectsArray.allObjects[i].collision = false;
                } 
            }  */
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
              this.allObjectsArray.allObjects[i].r/2
              );
              if(detect) {
                this.allObjectsArray.allObjects[i].detected = true; 
              }
          } 
        }
      }

      public rotatePointAroundCenter(point: p5.Vector, center: p5.Vector, angle: number): p5.Vector {​​​​
        //angle in radions 
        /** Rotates a point around another center point, will return a new point */
        const angleToCenter = Math.atan2(point.y - center.y, point.x - center.x);
        const distToCenter = center.dist(point);
        return p5.Vector.fromAngle(angleToCenter + angle, distToCenter).add(center);
    }​​​​

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


    
  
}

    


     



