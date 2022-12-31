class Block {
    constructor(num) {
        this.hue = num * 12;
        this.sat = 0;
        this.pos = createVector(0, num * (h/20));
        this.vel = createVector(num+1,0).div(10);
        this.env = new p5.Env();
        this.env.setADSR(0.02, 0.02, 0.3, 0.5);
        this.env.setRange(0.8, 0);
        this.wave = new p5.Oscillator();
        this.wave.start(); 
        this.wave.setType('sine');
        this.wave.freq(50+num*50);
        this.wave.amp(this.env);
    }
    show() {
        fill(this.hue,this.sat,100);
        rect(this.pos.x, this.pos.y, 40,h/20);
    }
    move() {
        this.pos.add(this.vel);
        this.sat += 3;
    }
    bounce() {
        if(this.pos.x <= 0) {
            this.pos.x = 0;
            this.vel.x *= -1;
            this.sat = 0;
            this.env.play();
        }
        if(this.pos.x >= w - 40) {
            this.pos.x = w - 40;
            this.vel.x *= -1;
            this.sat = 0;
            this.env.play();
        }
    }
}