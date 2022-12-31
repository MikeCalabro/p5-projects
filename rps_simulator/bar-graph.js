class BarGraph{
    constructor(rock,paper,scissor,comps) {
        this.r = 200*rock/comps;
        this.p = 200*paper/comps;
        this.s = 200*scissor/comps;
        this.rNum = rock;
        this.pNum = paper;
        this.sNum = scissor;
    }
    showBars() {
        fill(100);
        rect(1100,280-this.r,90,this.r);
        fill(255);
        rect(1200,280-this.p,90,this.p);
        fill(255,0,0);
        rect(1300,280-this.s,90,this.s);
        fill(0);
        text("Rock",1145,295);
        text("Paper",1245,295);
        text("Scissors",1345,295);
        text(this.rNum,1145,270-this.r);
        text(this.pNum,1245,270-this.p);
        text(this.sNum,1345,270-this.s);
    }
}