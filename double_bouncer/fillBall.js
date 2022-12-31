class FillBall {
    constructor(x,y) {
      this.lit = false;
      this.pos = createVector(x,y);
      this.fill_col = 'black'
    }
    show() {
      noStroke();
      fill(this.fill_col);
      circle(this.pos.x, this.pos.y, 20);
    }
    light(ball) {
      if(p5.Vector.sub(ball.pos, this.pos).mag() < 2) {
        this.fill_col = ball.col;
      }
    }
  }