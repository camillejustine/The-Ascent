class Submarine {
  public control: Control;
  public subPositionX: number;
  public subPositionY: number;
  public angle: number;
  public hullHealth: number;
  public obstacle: ObstacleArray;
  public allObjectsArray: Array<any>;
  private deletedArray: Array<any>;
  
  constructor(obstacle: ObstacleArray){
    this.obstacle = obstacle;
    this.control = new Control();
    this.subPositionX = 0;
    this.subPositionY = 0;
    this.angle = 0;
    this.hullHealth = 100;
    this.allObjectsArray = [];
    this.deletedArray = [];
  }

  public update() {
    this.angle = this.control.getAngle();
    this.collisionHullDamage();
    this.pickUpHullFix();
    this.allObjectsArray = this.obstacle.obstacles.concat(this.obstacle.powerUps)
    //console.log(this.hullHealth)
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
    for(let i = 0; i < this.allObjectsArray.length; i++){
        if(this.allObjectsArray[i].collision && this.allObjectsArray[i].id === 'iceberg'){
          this.hullHealth = this.hullHealth - 0.25;
        }if(this.allObjectsArray[i].collision && this.allObjectsArray[i].id === 'mine'){
          this.hullHealth = 0;
      } 
    } 
  }

  public pickUpHullFix(){
    for(let i = 0; i < this.allObjectsArray.length; i++){
      if(this.allObjectsArray[i].collision && this.allObjectsArray[i].id === 'supplyBox'){
        this.hullHealth += 0.25;
        if(this.hullHealth >= 100){
          this.hullHealth = 100;
        }
        this.deletedArray.push(this.allObjectsArray[i])
      }
    }
  }
}
