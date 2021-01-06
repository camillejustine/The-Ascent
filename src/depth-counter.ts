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


    // private game: boolean;
    // private depth: number;

    // public constructor(depth: number, game: boolean) {
    // this.depth = 1000;
    // this.game = true;

//     public constructor(public counter = 90) {

//         let intervalId = setInterval(() => {
//             this.counter = this.counter - 1;
//             console.log(this.counter)
//             if(this.counter === 0) clearInterval(intervalId)
//         }, 1000)
//     }
// 
