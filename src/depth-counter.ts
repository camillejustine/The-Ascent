class DepthCounter {
text: String;
timerValue: Number;


public constructor() {

var timerValue = 60;

function update() {
  createCanvas(400, 100);
  textAlign(CENTER);
  setInterval(timeIt, 1000);
}

function draw() {
  background(220);
   if (timerValue <= 60) {
    text(timerValue + "SECONDS", width / 2, height / 2);
  }
 
  if (timerValue == 0) {
    text('GAME OVER', width / 2, height / 2 + 15);
  }
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
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
// }

