let cols = 10;
let rows = 10;
let spacingX, spacingY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  ellipseMode(CENTER);
  calculateSpacing();
}

function draw() {
  background(15, 17, 26);
  
  let mouseFactorX = map(mouseX, 0, width, 0.5, 2.5);
  let mouseFactorY = map(mouseY, 0, height, -0.5, 0.5);




  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      
      let x = spacingX / 2 + i * spacingX;
      let y = spacingY / 2 + j * spacingY;
      
      let index = i * rows + j;
      let angle = frameCount * 0.02 * mouseFactorX + sin(frameCount * 0.03 + index * 0.1);
      let scaleFactor = map(sin(frameCount * 0.04 + (i + j) * 0.3), -1, 1, 0.4, 0.95);
      let shearVal = mouseFactorY * cos(frameCount * 0.02 + i * 0.2);




      push();
      
      translate(x, y);
      





      rotate(angle);
      
      shearX(shearVal);
      
      scale(scaleFactor);

      if ((i + j) % 2 === 0) {
        // Pattern Variant A
        stroke(100, 200, 255, 220);
        strokeWeight(2);
        fill(255, 100, 150, 40);
        rect(0, 0, spacingX * 0.75, spacingY * 0.75);

        noStroke();
        fill(255, 220, 100, 180);
        ellipse(0, 0, spacingX * 0.25, spacingY * 0.25);
      } else {
        // Pattern Variant B
        stroke(255, 100, 150, 220);
        strokeWeight(2);
        fill(100, 200, 255, 40);
        ellipse(0, 0, spacingX * 0.75, spacingY * 0.75);

        // Inner detail
        noStroke();
        fill(100, 255, 180, 180);
        rect(0, 0, spacingX * 0.25, spacingY * 0.25);
      }

      pop();
    }
  }
}

function calculateSpacing() {
  spacingX = width / cols;
  spacingY = height / rows;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  calculateSpacing();
}