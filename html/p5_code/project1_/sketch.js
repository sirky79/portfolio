let currentkey = '1';
let bgc;
let gkcount;

function setup() {
    createCanvas(800, 600);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
}

function draw() {
    // Triggering the clear_print function
    if (keyIsPressed) {
        clear_print();
    }
    // Triggering the drawChoice
    if (mouseIsPressed) {
        drawChoice();
    }
}

// Wrapper function (no parameters or arguments)
function drawChoice() {
    // The key mapping statements that you can change
    // Just make sure each key option has a stroke or fill and what type of graphic function
    let currentkey = key;

    switch (currentkey) {
        case '1':
            console.log("1");  // black line
            drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
            break;
        case '2':
            console.log("2");  // green line
            drawline(color(0, 255, 0), mouseX, mouseY, pmouseX, pmouseY);
            break;
        case '3':
            console.log("3");  // random color line
            RanColorLine(mouseX, mouseY, pmouseX, pmouseY);
            break;
        case '4':
            console.log("4");  // fat red line
            FatRedLine(color(255, 0, 0), mouseX, mouseY, pmouseX, pmouseY);
            break;
        case '5':
            console.log("5");  // erase with bg color
            eraser(bgc, mouseX, mouseY, 25);
            break;
        case '6':
            console.log("6");  // dotted line brush
            drawDottedLine(color(0, 0, 255), mouseX, mouseY, pmouseX, pmouseY);
            break;
        case'7':
            console.log("7")    //arc brush
            BlackLines(gkcount, mouseX, mouseY, pmouseX, pmouseY);
        default:  // Default executes if the case labels don't match the switch parameter
            console.log("None");
            break;
    }
}

function drawline(k, lx, ly, px, py) {
    strokeWeight(5);
    stroke(k);
    line(lx, ly, px, py);
    console.log(mouseX);
    console.log(pmouseX);
}

function FatRedLine(k, lx, ly, px, py) {
    strokeWeight(10);
    stroke(k);
    line(lx, ly, px, py);
}

function RanColorLine(x, y, px, py) {
    stroke(random(0, 255), random(0, 255), random(0, 255));  // random color
    strokeWeight(15);
    line(x, y, px, py);  // draw the line
}

function drawDottedLine(k, lx, ly, px, py) {
    stroke(k);
    strokeWeight(10);
    for (let i = 0; i < 1; i += 1) {  // Adjust the increment to draw more points
        let x = lerp(px, lx, i);
        let y = lerp(py, ly, i);
        point(x, y);
    }
}

function eraser(k, lx, ly, sz) {
    fill(k);
    stroke(k);
    ellipse(lx, ly, sz, sz);
}

function BlackLines(kcount, lx, ly) {
    // Loop to draw kcount lines
    for (let i = 0; i < kcount; i++) {
        let endX = lx + i * 10;
        let endY = ly;            

        strokeWeight(5);         
        stroke(0, 0, 0);       
        line(lx, ly, endX, endY); // Draw the line from (lx, ly) to (endX, endY)
    }
}
function clear_print() {
  
    if (key === 'x' || key === 'X') {
        background(255);
    } else if (key === 'p' || key === 'P') {
        saveFrames('image-0', 'png', 1, 1);
        key = '';  // Reset the key so it does not make more than one image.
    }
}
