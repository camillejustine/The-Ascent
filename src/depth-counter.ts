class DepthCounter {
  public timerValue: number;

  public constructor() {
    this.timerValue = 4000;
  }

  public update() {
    this.timerValue -= deltaTime / 100;
  }

  public draw() {

    background(220);
    if (this.timerValue <= 60) {
      text(this.timerValue + "SECONDS", width / 2, height / 2);
    }
    console.log(this.timerValue)

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
