class Submarine {
  public control: Control;
  public subPositionX: number;
  public subPositionY: number;
  public angle: number;
  public hullHealth: number;
  public allObjectsArray: ObstacleArray;
  
  
  
  constructor(allObjectsArray: ObstacleArray){
    this.allObjectsArray = allObjectsArray;
    this.control = new Control();
    this.subPositionX = 0;
    this.subPositionY = 0;
    this.angle = 0;
    this.hullHealth = 100;
  }

  public update() {
    this.angle = this.control.getAngle();
    this.collisionHullDamage();
    this.pickUpHullFix();
  }

  public draw() {
    this.update()
    this.control.update();
    this.subPositionX = this.control.getPositionX();
    this.subPositionY = this.control.getPositionY();
    angleMode(DEGREES);
    push();
    translate(this.subPositionX, this.subPositionY);
    rotate(this.angle);
    imageMode(CENTER);
    image(subImage, 0, 0, 35, 150);
    pop(); 
  }
  
  public collisionHullDamage(){
    for(let i = 0; i < this.allObjectsArray.allObjects.length; i++){
        if(this.allObjectsArray.allObjects[i].collision && this.allObjectsArray.allObjects[i].id === 'iceberg'){
          this.hullHealth = this.hullHealth - 0.25;
        }if(this.allObjectsArray.allObjects[i].collision && this.allObjectsArray.allObjects[i].id === 'mine'){
          this.hullHealth = 0;
      } 
    } 
  }

  public pickUpHullFix(){
    for(let i = 0; i < this.allObjectsArray.allObjects.length; i++){
      if(this.allObjectsArray.allObjects[i].collision && this.allObjectsArray.allObjects[i].id === 'supplyBox'){
        this.hullHealth += 8.35;
        if(this.hullHealth >= 100){
          this.hullHealth = 100;
        }
        //this.allObjectsArray.allObjects.splice(i,1)
      }
    }
  }
}
