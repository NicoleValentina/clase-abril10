function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,255,170);
  noLoop();
}

function draw() {
  for ( var x=0; x< windowWidth; x+=10) {
    for  (var y=0; y< windowWidth; x+=10 ) {
      rectMode(CENTER);
      line(x,y,5,5);    
  }
}
}