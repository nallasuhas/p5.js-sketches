// The upper portion of canvas depicts random function and lower portion depicts perlin noise

function setup() {
  createCanvas(400, 400);
  background(220);
}
let t1 = 0;
let t2 = 100;

function draw() {
  // to depict random 
   let x1 = random(0, width)
   let y1 = random(0, height/2)
   fill(0, 10);
  circle(x1,y1,10)
  // to depict perlin noise
  // two dimensional perlin noise
  
  let x2 = map(noise(t1), 0, 1, 0, width)
  let y2 = map(noise(t2), 0, 1, 201, height)
  
  fill(125)
  circle(x2, y2, 16)
  // increment the variable
  
   t1 +=0.01;
   t2 += 0.01
  
  
}