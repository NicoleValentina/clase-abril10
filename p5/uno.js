function setup() {
  createCanvas(windowWidth, windowHeight/2);
  background(0);
  noLoop ();
}

function draw() {
  for (var x = 0; x < windowWidth; x+=windowWidth/250) {
    colorMode(HSB);
         noStroke();
      fill(160,x/24,200);
    ellipse(x, windowHeight/4, 50, 50);   
  }
}
