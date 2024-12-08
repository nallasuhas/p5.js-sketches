function setup() {
  createCanvas(640, 400);
   background(255);
}

function draw() {
 let x = randomGaussian(320,60)
 let r = randomGaussian(120, 50)
 if(r < 0) r= 360 + r;
 noStroke();
  colorMode(HSL)
  fill(r, 100, 50)
  circle(x, 200,20)
}