let posX, posY, speedX, speedY;
let posX2, posY2, speedX2, speedY2;
let scaleFactor = 1.5;

function setup() {
  createCanvas(600, 500);
  background(118, 204, 245);

  // Initial positions and speeds for creatures
  posX = random(width);
  posY = random(height);
  speedX = random(2, 5);
  speedY = random(2, 5);

  posX2 = random(width);
  posY2 = random(height);
  speedX2 = random(2, 5);
  speedY2 = random(2, 5);
}

function draw() {
  background(0, 117, 136, 100); // Semi-transparent background for motion trail effect

  // Update positions for both creatures
  posX += speedX;
  posY += speedY;
  posX2 += speedX2;
  posY2 += speedY2;

  // Bounce on X
  if (posX < 0) {
    speedX = -speedX;  // Left 
  }
  if (posX > width) {
    speedX = -speedX;  // Right 
  }

  // Bounce on Y
  if (posY < 0) {
    speedY = -speedY;  // Top
  }
  if (posY > height) {
    speedY = -speedY;  // Bottom
  }

  // Bounce on X for the second creature
  if (posX2 < 0) {
    speedX2 = -speedX2;  // Left
  }
  if (posX2 > width) {
    speedX2 = -speedX2;  // Right
  }

  // Bounce on Y for the second creature
  if (posY2 < 0) {
    speedY2 = -speedY2;  // Top
  }
  if (posY2 > height) {
    speedY2 = -speedY2;  // Bottom
  }

  push();
  translate(posX, posY);
  rotate(frameCount * 0.05);
  scale(scaleFactor);
  drawCreature1();
  pop();

  push();
  translate(posX2, posY2);
  rotate(-frameCount * 0.03);
  scale(scaleFactor * 0.8);
  drawCreature2();
  pop();
}

// Creature 1
function drawCreature1() {
  drawBody(); 
  drawFace(); 
  drawHat(); 
}

// Creature 2
function drawCreature2() {
  drawBody(); 
  drawFace('glasses');
}

// Function to draw the body and add hands
function drawBody() {
  fill(150, 200, 250);
  ellipse(0, 0, 50, 80); // Body
  fill(100, 150, 200);
  ellipse(0, 50, 35, 20); // Feet
  fill(50, 100, 150);
  ellipse(0, -30, 40, 20); // Head
  drawHands(); // Add hands to the creature
}

// Function to draw cute, small hands
function drawHands() {
  fill(255, 140, 0); // Light pink for cute hands
  ellipse(-30, 10, 10, 25); // Left hand
  ellipse(30, 10, 10, 25);  // Right hand
}

function drawFace(glasses) {
  fill(0);
  ellipse(-10, -30, 10, 10); // Left eye
  ellipse(10, -30, 10, 10); // Right eye
  
  if (glasses === 'glasses') {
    drawGlasses(-10, -30, 10); 
  }

  fill(200, 50, 50);
  ellipse(0, -20, 10, 5); 
}

function drawGlasses(x, y, size) {
  noFill();
  stroke(0);
  strokeWeight(1);
  ellipse(x, y, size + 5, size + 5); // Left lens
  ellipse(x + 20, y, size + 5, size + 5); // Right lens
  line(x + 10, y, x + 15, y); // Connecting the glasses
  noStroke();
}

function drawHat() {
  push();
  fill(0);
  rectMode(CENTER);
  rect(0, -45, 30, 5); // Brim of the hat
  rect(0, -60, 20, 20); // Top part of the hat
  pop();
}

function scDrawTriangle(x, y) {
  push();
  translate(x, y);
  rotate(radians(45));
  fill(255, 100, 100);
  triangle(0, 0, 20, 0, 10, -20);
  pop();
}

function scRandomDots() {
  let dotX = random(width);
  let dotY = random(height);
  fill(255);
  ellipse(dotX, dotY, random(5, 15), random(5, 15));
}
