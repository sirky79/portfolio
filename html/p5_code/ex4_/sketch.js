// Class for your creature (JM_Creature)
class JM_Creature {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(2, 5), random(2, 5));
    this.scaleFactor = 1.5;
  }

  // Method to update position
  update() {
    this.position.add(this.velocity);
    if (this.position.x < 0 || this.position.x > width) this.velocity.x = -this.velocity.x;
    if (this.position.y < 0 || this.position.y > height) this.velocity.y = -this.velocity.y;
  }

  // Method to display the creature
  display() {
    push();
    translate(this.position.x, this.position.y);
    rotate(frameCount * 0.05);
    scale(this.scaleFactor);
    this.drawBody(); 
    this.drawFace(); 
    this.drawHat(); 
    pop();
  }

  // Action method to increase scale
  scaleUp() {
    this.scaleFactor += 0.1;
  }

  // Action method to decrease scale
  scaleDown() {
    this.scaleFactor -= 0.1;
  }

  // Method to draw the body
  drawBody() {
    fill(150, 200, 250);
    ellipse(0, 0, 50, 80); // Body
    fill(100, 150, 200);
    ellipse(0, 50, 35, 20); // Feet
    fill(50, 100, 150);
    ellipse(0, -30, 40, 20); // Head
    this.drawHands(); // Hands
  }

  // Method to draw hands
  drawHands() {
    fill(255, 140, 0);
    ellipse(-30, 10, 10, 25); // Left hand
    ellipse(30, 10, 10, 25);  // Right hand
  }

  // Method to draw face
  drawFace(glasses = false) {
    fill(0);
    ellipse(-10, -30, 10, 10); // Left eye
    ellipse(10, -30, 10, 10);  // Right eye
    
    if (glasses) {
      this.drawGlasses(-10, -30, 10);
    }

    fill(200, 50, 50);
    ellipse(0, -20, 10, 5); // Mouth
  }

  drawGlasses(x, y, size) {
    noFill();
    stroke(0);
    strokeWeight(1);
    ellipse(x, y, size + 5, size + 5); // Left lens
    ellipse(x + 20, y, size + 5, size + 5); // Right lens
    line(x + 10, y, x + 15, y); // Connecting line
    noStroke();
  }

  // Method to draw the hat
  drawHat() {
    push();
    fill(0);
    rectMode(CENTER);
    rect(0, -45, 30, 5); // Brim
    rect(0, -60, 20, 20); // Top part
    pop();
  }
}

// Placeholder class for friend's creature
class FriendCreature {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(2, 5), random(2, 5));
    this.size = random(20, 40);
  }

  // Update position of friend's creature
  update() {
    this.position.add(this.velocity);
    if (this.position.x < 0 || this.position.x > width) this.velocity.x = -this.velocity.x;
    if (this.position.y < 0 || this.position.y > height) this.velocity.y = -this.velocity.y;
  }

  // Display friend's creature
  display() {
    push();
    translate(this.position.x, this.position.y);
    fill(random(100, 255), random(100, 255), random(100, 255));
    ellipse(0, 0, this.size, this.size); // Simple creature display
    pop();
  }
}

let creatures = [];
let friendCreatures = [];

function setup() {
  createCanvas(600, 500);

  // Initialize 15 JM_Creatures
  for (let i = 0; i < 15; i++) {
    creatures.push(new JM_Creature(random(width), random(height)));
  }

  // Initialize 15 FriendCreatures
  for (let i = 0; i < 15; i++) {
    friendCreatures.push(new FriendCreature(random(width), random(height)));
  }
}

function draw() {
  background(0, 117, 136, 100);

  // Update and display your creatures
  for (let i = 0; i < creatures.length; i++) {
    creatures[i].update();
    creatures[i].display();
  }

  // Update and display friend's creatures
  for (let i = 0; i < friendCreatures.length; i++) {
    friendCreatures[i].update();
    friendCreatures[i].display();
  }
}

// Control creature scaling with keyboard input
function keyPressed() {
  if (key === 'W') {
    creatures.forEach(creature => creature.scaleUp());
  } else if (key === 'S') {
    creatures.forEach(creature => creature.scaleDown());
  }
}
