let gridSize = 20;
let cols, rows;

function setup() {
  createCanvas(400, 400);
  cols = int(width / gridSize);
  rows = int(height / gridSize);
  
  // Required so atan2() angles work with rotate() in degrees
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  // ==========================
  // 1. BACKGROUND PATTERN
  // ==========================
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * gridSize + gridSize / 3;
      let y = j * gridSize + gridSize / 6;

      stroke(0);
      strokeWeight(1);
      noFill();
      rect(x, y, gridSize);
      line(x - gridSize / 4, y + gridSize / 2, x + gridSize / 2, y - gridSize / 2);
      triangle(
        x - gridSize / 2, y - gridSize / 3,
        x - gridSize / 2, y + gridSize / 2,
        x + gridSize / 5, y + gridSize / 2
      );
    }
  }

  // ==========================
  // 2. CAT HEAD & BODY PARTS
  // ==========================
  
  // --- Left Ear ---
  fill('#F5E2A6');
  stroke('#333');
  strokeWeight(3);
  triangle(120, 150, 160, 50, 210, 120);

  // --- Right Ear ---
  triangle(280, 150, 240, 50, 190, 120);

  // --- Head ---
  ellipse(200, 200, 180, 180); 

  // ==========================
  // 3. MOUSE-TRACKING EYES
  // ==========================
  
  // --- Left Eye ---
  let leftX = 170;
  let leftY = 180;
  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

  push();
  translate(leftX, leftY);
  fill(255);          // White of the eye
  stroke('#333');
  strokeWeight(1);
  ellipse(0, 0, 30, 30); // Scaled down to fit the cat
  
  rotate(leftAngle);
  fill('#333');       // Pupil
  noStroke();
  ellipse(7, 0, 12, 12); // Pupil offset
  pop();

  // --- Right Eye ---
  let rightX = 230;
  let rightY = 180;
  let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

  push();
  translate(rightX, rightY);
  fill(255);          // White of the eye
  stroke('#333');
  strokeWeight(1);
  ellipse(0, 0, 30, 30); // Scaled down to fit the cat
  
  rotate(rightAngle);
  fill('#333');       // Pupil
  noStroke();
  ellipse(7, 0, 12, 12); // Pupil offset
  pop();

  // ==========================
  // 4. NOSE, MOUTH & WHISKERS
  // ==========================
  
  // --- Nose ---
  fill('#EDB39A');
  stroke('#333');
  strokeWeight(1);
  triangle(200, 215, 190, 205, 210, 205);

  // --- Mouth ---
  noFill();
  stroke('#333');
  strokeWeight(3);
  arc(190, 220, 20, 20, 0, PI);
  arc(210, 220, 20, 20, 0, PI);

  // --- Whiskers ---
  strokeWeight(2);
  // Left Whiskers
  line(150, 210, 100, 200);
  line(150, 220, 95, 220);
  line(150, 230, 100, 240);
  // Right Whiskers
  line(250, 210, 300, 200);
  line(250, 220, 305, 220);
  line(250, 230, 300, 240);
}