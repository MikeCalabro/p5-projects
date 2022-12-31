class BounceBall {
    constructor(y,yVel,col) {
      this.pos = createVector(10,y);
      this.vel = createVector(22,yVel).setMag(2);
      this.col = col;
    }
    show() {
      fill(this.col);
      noStroke();
      circle(this.pos.x,this.pos.y,20);
    }
    move() {
      this.pos.add(this.vel);
    }
    bounce() {
      if(this.pos.x <= 10 | this.pos.x >= 714) {
        this.vel.x *= -1;
      }
      if(this.pos.y <= 10 | this.pos.y >= 724) {
        this.vel.y *= -1;
      }
    }
  }