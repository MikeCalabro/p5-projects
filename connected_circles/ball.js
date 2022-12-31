class Ball {
    constructor(l,s) {
        this.l = l;
        this.s = s;
        this.a = 0;
        this.x = 200 + 195*sin(this.a);
        this.y = 200 + -195*cos(this.a);
        this.sat = 0;
    } 
    show() {
        if(Math.abs(200-this.x) < 1 & this.y < 200) {
            this.sat = 0;
        }
        fill(200+this.l/2,this.sat,100);
        stroke(60);
        circle(this.x,this.y,10);
    }
    move() {
        this.sat += 2;
        this.a += this.s;
        this.x = 200 + 195*sin(this.a);
        this.y = 200 + -195*cos(this.a);
    }
}