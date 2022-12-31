let fillBalls = [];
let b,b2;

function setup() {
  createCanvas(724, 734);
  for(let i=0; i<17; i++) {
    for(let j=0; j<22; j++) {
      fillBalls.push(new FillBall(10 + i*44, 10 + j*34))
    }
  }
  b = new BounceBall(724,-17,'red');
  b2 = new BounceBall(10,17,'blue');
}

function draw() {
  background(0);
  for(let i=0; i<fillBalls.length; i++) {
    fillBalls[i].light(b);
    fillBalls[i].light(b2);
    fillBalls[i].show();
  }
  b.show();
  b.move();
  b.bounce();
  b2.show();
  b2.move();
  b2.bounce();
}