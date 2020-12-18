class DepthCounter {
public abstract timeIt(): void;
public abstract textAlign(): void;
public timerValue: any;

public constructor() {
  this.timerValue = 60;
}

public update() {
  textAlign(CENTER);
}

public draw() {
  setInterval(this.timeIt, 1000);
  
  background(220);
   if (this.timerValue <= 60) {
    text(this.timerValue + "SECONDS", width / 2, height / 2);
  }
  console.log(this.timerValue)
 
  if (this.timerValue == 0) {
    text('GAME OVER', width / 2, height / 2 + 15);
  }
}

public timeIt() {
  if (this.timerValue > 0) {
    this.timerValue--;
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
