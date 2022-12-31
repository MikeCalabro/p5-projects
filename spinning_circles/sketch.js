let b = [];
let speeds = [];
for(let i=1; i<=20; i++) {
    if(360 % i == 0){
        speeds.unshift(i/5);
    }
}

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    colorMode(HSB);
    for(let i=0; i<speeds.length; i++) {
        b.push(new Ball(15 + i*15, speeds[i]));
    }
}

function draw() {
    background(0);
    noFill();
    stroke(255);
    circle(200,200,390);
    line(200,200,200,5);
    for(let i=0; i<b.length; i++) {
        b[i].show();
        b[i].move();
    }
}