let counterG = 0;
let counterR = 0;
let bgColor;
let cx, cy; 
let gridSize = 40; 
let value = 0; 
let purpOn = false;

function preload() {
  f = loadFont('assets/CoffeeSoda.otf');
  b = loadImage('assets/frog.jpg');
  b2 = loadImage('assets/dab.gif');
  sad = loadImage('assets/sad.jpg');
}

function setup() {
  createCanvas(800, 800);
  counterR = height;
  cx = width / 2; 
  cy = height / 2; 
  textSize(40);
  bgColor = color(random(50, 150), random(200, 255), random(50, 150)); // Shades of green
}

function draw() {
  background(bgColor); // Set background color
  textFont(f);
  
  if (mouseIsPressed && keyIsPressed) {
    fill(255, 0, 0);
    textSize(counterR / 2.5);
    textAlign(CENTER);
    text("Yeet", width / 2, counterR);
    counterR -= 0.75;
    if (counterR < -50) {
      counterR = height; // Reset position
    }
    image(b2, width / 2 , height / 2 , 300, 300);
  } else {
    textSize((counterG + 50) / 3);
    textAlign(CENTER);
    text("Lag", width / 2, counterG);
    counterG += 1.5;
    if (counterG > height) {
      counterG = -50; // Reset position
    }
  }

  // Draw frog
  image(b, cx, cy, 100, 100); 
  // Draw Sad frog
  if (purpOn) {
    image(sad, 200, 200, 500, 500);
  }

  // Display simple shapes based on mouse movement
  fill(255, 255, 0);
  rect(mouseX - 25, mouseY - 25, 50, 50); // Rectangle follows mouse
}

function keyPressed() {
  if ((key == 'p' || key == 'P')) {
    purpOn = !purpOn; 
  }

  if ((key == 'x' || key == 'X' || key == " ")) {
    purpOn = false;    
  }

  switch (key) {
    case 'a':
      cx -= gridSize; // left
      break;
    case 'w':
      cy -= gridSize; // up
      break;
    case 'd':
      cx += gridSize; // right
      break;
    case 's':
      cy += gridSize; // down
      break;
    default:
      break; // Do nothing for other keys
  }
}

function mousePressed() {
  bgColor = color(random(50, 150), random(200, 255), random(50, 150));
}
