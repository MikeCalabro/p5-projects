class Bubble {
    constructor() {
        this.state = random(['R','P','S']);
        this.rad = 20;
        this.pos = createVector(random(w-20)+10,random(h-20)+10);
        this.vel = createVector(random(-1,1),random(-1,1)).setMag(random(1,3));
    }
    show() {
        switch(this.state){
            case 'R': 
                fill(150);
                break;
            case 'S': 
                fill(255,0,0);
                break;
            case 'P': 
                fill(255);
                break;
        }
        circle(this.pos.x,this.pos.y,this.rad);
        fill(0);
        text(this.state,this.pos.x,this.pos.y);
    }
    move() {
        this.pos.add(this.vel);
        if(this.pos.x < this.rad/2 | this.pos.x > w - (this.rad/2)){
            this.vel.x *= -1;
        }
        if(this.pos.y < this.rad/2 | this.pos.y > h - (this.rad/2)){
            this.vel.y *= -1;
        }
    }
    collide(enemy) {
        if(this.state == 'S' & enemy.state == 'R'){
            this.state = 'R';
        } else if(this.state == 'R' & enemy.state == 'P'){
            this.state = 'P';
        } else if(this.state == 'P' & enemy.state == 'S'){
            this.state = 'S';
        }
    }
}