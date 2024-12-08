class Walker{
  constructor(){
    this.x = width/2;
    this.y = height/2;
  }
  show(){
    stroke(0);
    point(this.x, this.y)
  }
  step(){
    let xstep = random(-1,1)
    let ystep = random(-1,1)
    this.x += xstep;
    this.y += ystep
  }
}
let walker;

function setup() {
  createCanvas(400, 400);
   walker  = new Walker()
   background(255);
}

function draw() {
  walker.show();
  walker.step();
 
}