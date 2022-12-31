let w,h,s,n,bubs,rocks,papers,scissors,button,graph;
let b = [];

function setup() {
    createCanvas(1400,720);
    textAlign(CENTER,CENTER);
    s = createSlider(100,700,280,10);
    s.position(800,100);
    w = h = s.value();
    n = createSlider(1,100,10,1);
    n.position(800,200);
    button = createButton("Battle!");
    button.position(840,260);
    button.mousePressed(reset);
    bubs = n.value();
    for(let i=0; i<bubs; i++){
        b.push(new Bubble());
    }
    
}
  
function draw() {
    background(255);
    fill(255);
    rect(0,0,w,h);
    rect(790,60,160,80);
    rect(790,160,160,80);
    fill(0);
    text("Arena Size",870,80);
    text("Number of Competitors",870,180);
    rocks = papers = scissors = 0;
    for(let i=0; i<b.length; i++){
        b[i].show();
        b[i].move();
        switch(b[i].state) {
            case 'R':
                rocks += 1;
                break;
            case 'P':
                papers += 1;
                break;
            case 'S':
                scissors += 1;
                break;
        }
    }
    for(let i=0; i<b.length; i++){
        for(let j=0; j<b.length; j++){
            if(p5.Vector.sub(b[i].pos, b[j].pos).mag() < b[i].rad){
                b[i].collide(b[j]);
            }
        }
    }
    text("Rocks: " + rocks, 40, h + 10);
    text("Papers: " + papers, 120, h + 10);
    text("Scissors: " + scissors, 200, h + 10);

    graph = new BarGraph(rocks,papers,scissors,bubs);
    graph.showBars();
}

function reset(){
    w = s.value();
    h = s.value();
    bubs = n.value();
    b = [];
    for(let i=0; i<bubs; i++){
        b.push(new Bubble());
    }
}