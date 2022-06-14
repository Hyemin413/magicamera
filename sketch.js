
let div= 15;
let sym= 360/div;
let capture;
let vid;
let img;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  vid=createCapture(VIDEO);
  vid.hide();
  angleMode(DEGREES);
  noCursor();
}

function draw() {
  background(0);     
  noStroke();
  texture(vid);
  
              
  for (i=0; i<360; i+=sym) {
    
    push();
    rotate(i);
    texture(vid);
     let x1 = map(mouseX, 0, width, 10,200);
       rect(-mouseX, mouseY, 300, 300);
    triangle(x1, mouseY, -mouseX, -mouseY, 50,50);

  
    
    pop();
    push();
   rotate(i);
    texture(vid);
    x1 = map(mouseX, 0, width, 10, 200);
    ellipse (x1, mouseY*3, -mouseX, -mouseY);
    pop();
    
    push();
   rotate(i);
    texture(vid);
    x1 = map(mouseX, 0, width, 10, 200);
    ellipse(x1, mouseY*1.5, -100, -mouseY);
    pop();
  }
}
