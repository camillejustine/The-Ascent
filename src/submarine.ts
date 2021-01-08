class Submarine {
  public control: Control;
  public subPositionX: number;
  public subPositionY: number;
  public angle: number;
  public hullHealth: number;
  public obstacle: ObstacleArray;
  
  constructor(obstacle: ObstacleArray){
    this.obstacle = obstacle;
    this.control = new Control();
    this.subPositionX = 0;
    this.subPositionY = 0;
    this.angle = 0;
    this.hullHealth = 100;
  }

  public update() {
    this.angle = this.control.getAngle();
    this.collisionHullDamage();
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
      for(let i = 0; i < this.obstacle.obstacles.length; i++){
        if(this.obstacle.obstacles[i].collision && this.obstacle.obstacles[i].id === 'iceberg'){
          this.hullHealth = this.hullHealth - 0.25;
        }if(this.obstacle.obstacles[i].collision && this.obstacle.obstacles[i].id === 'mine'){
          this.hullHealth = 0;
        }
      }
    } 
  }
  
  /* private sub = p5.Image | p5.Element;
    
    
    constructor(subImage: p5.Image | p5.Element){
      this.sub = subImage;
    }

    public show(){
        this.sub = image(subImage,-25, -125, 50, 250);
    } */
}
