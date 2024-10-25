function setup() {
  createCanvas(900, 500); 
  noStroke(); 
  rectMode(CENTER); 
}

function draw() {
  let r = random(20); 
  let x = mouseX;     
  let y = mouseY;     

  
  console.log("MouseX: " + x + " | MouseY: " + y + " | Random Size: " + r);

  // Background color control: Changes depending on the mouse's Y position
  if (y < height / 2) {  
    background(random(100, 255), x / 2, y / 2);
  } else {  
    background(20);  //bottom Black
  }

  // Change fill color based on the mouse's X position
  if (x < width / 2) { 
    fill(255, random(100, 255), random(100, 255), 150);  // red
    stroke(150);  
  } else { 
    fill(random(100, 255), 255, random(100, 255), 150);  // green
    stroke(255); 
  }

  // draw on y
  if (y < height / 2) {  
    ellipse(x, y, r * 10, r * 2);  
  } else { 
    rect(x, y, r * 2, r * 5);  
    
 strokeWeight(4);  // Set stroke thickness for shapes
  }

  // Draw random shapes
  for (let i = 0; i < 5; i++) {  
    let ranx = random(width);   // Random x 
    let rany = random(height);  // Random y  
    let rans = random(10, 60);  // 10-60 size

    // Random RGB color for shapes
    let r = random(255);
    let g = random(255);
    let b = random(255);
    fill(r, g, b, 90);  

    // ellipse/rect
    if (random(1) < 0.5) { 
      if (rans < 20) { 
          ellipse(ranx, rany, rans, rans);
      } else {
          rect(ranx, rany, rans, rans);  
      }
  } else {
      if (rans < 30) {
          arc(ranx, rany, rans, rans, 0, PI);
      } else {
          let ranxs = ranx + rans;  
          let ranys = rany + rans;  
          line(ranx, rany, ranxs, ranys);
      }
  }

  //for loop for ellipse
  for (let i = 0; i < width; i += 70) {
    for (let j = 0; j < height; j += 70) {
    
      fill(r, g, b, 90);

      let size = random(0, 15); 
      ellipse(i, j, size, size); 
    }
  }
    }
  }
