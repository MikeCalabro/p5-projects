let w,h;

let blocks = [];

function setup() {
    w = h = 400;
    createCanvas(w,h);
    colorMode(HSB);
    for(let i=0;i<20;i++){
        blocks.push(new Block(i));
    }
    go = false;
}

function draw() {
    background(0);
    fill(0);
    stroke(255);
    strokeWeight(2);
    rect(0,0,w,h);
    for(let i=0;i<20;i++){
        line(0,i*(h/20),w,i*(h/20));
    }
    for(let i=0;i<blocks.length;i++){
        blocks[i].show();
        blocks[i].move();
        blocks[i].bounce();
    }
}