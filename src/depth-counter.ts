                class DepthCounter {
  public timerValue: number;

  public constructor() {
    this.timerValue = 4000;
  }

  public update() {
    this.timerValue -= deltaTime / 100;
  }

  public draw() {
    if (this.timerValue <= 4000) {
      textSize(32);
      fill('rgba(0,255,0,0.25)');
      text(Math.floor(this.timerValue) + " METERS", (width / 2) - 80, height - 20);
    }
    
    if (this.timerValue <= 0) {
      text('GAME OVER', width / 2, height / 2 + 15);
    }
  }

  public timeIt() {
    if (this.timerValue > 0) {
      this.timerValue--;
    }

  }
}