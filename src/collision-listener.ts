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
          {"x1": this.cx, "y1": this.cy - 60, "r": this.r},
          {"x2": this.cx, "y2": this.cy - 30, "r": this.r},
          {"x3": this.cx, "y3": this.cy , "r": this.r},
          {"x4": this.cx, "y4": this.cy + 30, "r": this.r},
          {"x5": this.cx, "y5": this.cy + 60, "r": this.r} 
        ]; 
          for(let i = 0; i < this.allObjectsArray.allObjects.length; i++){
           for(let j = 0; j < circleArray.length; j++){
              let position1 = createVector(circleArray[0].x1,circleArray[0].y1);
              let position2 = createVector(circleArray[1].x2,circleArray[1].y2);
              let position3 = createVector(circleArray[2].x3,circleArray[2].y3);
              let position4 = createVector(circleArray[3].x4,circleArray[3].y4);
              let position5 = createVector(circleArray[4].x5,circleArray[4].y5);
              let center = createVector(this.cx,this.cy);
              let rotate1 = this.rotatePointAroundCenter(position1, center,this.angle)
              let rotate2 = this.rotatePointAroundCenter(position2, center,this.angle)
              let rotate3 = this.rotatePointAroundCenter(position3, center,this.angle)
              let rotate4 = this.rotatePointAroundCenter(position4, center,this.angle)
              let rotate5 = this.rotatePointAroundCenter(position5, center,this.angle)  
              circle(rotate1.x, rotate1.y, circleArray[j].r)
              circle(rotate2.x, rotate2.y, circleArray[j].r)
              circle(rotate3.x, rotate3.y, circleArray[j].r)
              circle(rotate4.x, rotate4.y, circleArray[j].r)
              circle(rotate5.x, rotate5.y, circleArray[j].r)
                let collision1 = this.detect(
                  rotate1.x, 
                  rotate1.y, 
                  circleArray[j].r, 
                  this.allObjectsArray.allObjects[i].x, 
                  this.allObjectsArray.allObjects[i].y, 
                  this.allObjectsArray.allObjects[i].r/2
                  );
                let collision2 = this.detect(
                  rotate2.x, 
                  rotate2.y, 
                  circleArray[j].r, 
                  this.allObjectsArray.allObjects[i].x, 
                  this.allObjectsArray.allObjects[i].y, 
                  this.allObjectsArray.allObjects[i].r/2
                  );
                let collision3 = this.detect(
                  rotate3.x, 
                  rotate3.y, 
                  circleArray[j].r, 
                  this.allObjectsArray.allObjects[i].x, 
                  this.allObjectsArray.allObjects[i].y, 
                  this.allObjectsArray.allObjects[i].r/2
                  );
                let collision4 = this.detect(
                  rotate4.x, 
                  rotate4.y, 
                  circleArray[j].r, 
                  this.allObjectsArray.allObjects[i].x, 
                  this.allObjectsArray.allObjects[i].y, 
                  this.allObjectsArray.allObjects[i].r/2
                  );
                let collision5 = this.detect(
                  rotate5.x, 
                  rotate5.y, 
                  circleArray[j].r, 
                  this.allObjectsArray.allObjects[i].x, 
                  this.allObjectsArray.allObjects[i].y, 
                  this.allObjectsArray.allObjects[i].r/2
                  );
                if (collision1 || collision2 || collision3 || collision4 || collision5) {
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
              this.allObjectsArray.allObjects[i].r/2
              );
              if(detect) {
                this.allObjectsArray.allObjects[i].detected = true; 
              }
          } 
        }
      }

      public rotatePointAroundCenter(point: p5.Vector, center: p5.Vector, angle: number): p5.Vector {​​​​
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

    


     



