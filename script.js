// this code reflects the stages of the sun during sunrise, daytime, noon, sunset, and nighttime. It includes various conditional statements that permit for user interaction, as well as an animation that changes when the user interacts. I chose to do this because I find watching the sky to be a very joyful thing to do as it makes me feel peaceful. Press 'a' for it to become daytime, hold down the mouse for it be noon, press 'b' for sunset, and the right arrow for nighttime, and keep going with this cycle for as long as you wish.
//state
let morningMessage = "Good morning! Hold the mouse for it to become noon!";
let daytimeMessage = "The sun is rising! Press the 'a' key for it to become daytime!";
let showMessage = true;
let birdX;
let birdY;

function setup() {
  createCanvas(550, 400); // creates canvas
  birdX = -25; // defines variable
  birdY = height / 2; // defines variable
}

function draw() { // opens draw function
  background(255); // sets background color to white
  drawSky(); // calls drawSky function
  drawGrass(); // calls drawGrass function
  drawSun();  // calls drawSun function
  drawClouds(); // calls drawClouds function
  drawBird(); // calls drawBird function

  handleKeyPress(); // calls handleKeyPress function
  handleMousePress(); // calls handleMousePress function

// this conditional statement shows the text that will appear on the screen depending on which key is pressed

  if (showMessage) { //opens if statement
    fill(242, 56, 5); // sets text color to orange
    textSize(15); // sets text size to 15
    textAlign(LEFT, BOTTOM); // sets text alignment to the bottom left
    if (key === 'a') { // opens if statement
      text(morningMessage, 125, 289); // sets text and coordinates
    } else if (key === 'b') { // if statement closes, else if statement opens
      text("The sun is setting! Enjoy the view! Press the right arrow to go to sleep.", 20, 230); // sets text and coordinates
    } else if (key === 'ArrowRight') { // else if statement closes, else statement opens
      text("Good night! Don't let the bed bugs bite! Press any key to wake up!", 100, 275); // sets text and coordinates
    } else { // else if statement closes, else statement opens
      text(daytimeMessage, 125, 289); // sets text and coordinates
    } // closes else statement
  } // closes if statement
} // closes draw function

function drawBird() {
  // draw bird wings (thin black arcs)
  stroke(0); // sets stroke color to black
  noFill(); // sets no fill
  arc(birdX - 10, birdY, 20, 20, PI, 0);  // draws left wing
  arc(birdX + 10, birdY, 20, 20, PI, 0); // draws right wing

// this conditional statement changes the speed of the bird depending on the keys pressed
  if (key === 'a') { // opens if statement
    birdX = birdX + 0.5; // adjusts speed
  } else if (key === 'b') { // closes if statement, opens else if statement
    birdX = birdX + 3; // adjusts speed
  } else if (key === 'ArrowRight') { // closes else if statement, opens else if statement
    birdX = birdX + 5; // adjusts speed
  } else { // closes else if statement, opens else statement
    birdX = birdX + 3.5; // adjusts speed
  } // closes else statement
  // reset bird's position when it goes off-screen
  if (birdX > width + 25) { // opens if statement
    birdX = -25; // resets birdX
  } // closes if statement
} // closes drawBird function

function drawSky() { // opens drawSky function
  noStroke(); // no stroke
  // Draw the sky
  fill(217, 64, 22); // sets fill color red
  rect(0, 190, 550, 70); // draws rectangle
  fill(232, 78, 35); // sets fill color orange
  rect(0, 170, 550, 70); // draws rectangle
  fill(230, 108, 32); // sets fill color orange
  rect(0, 166, 550, 70); // draws rectangle
  fill(230, 110, 5); // sets fill color orange
  rect(0, 166, 550, 30); // draws rectangle
  fill(235, 111, 35); // sets fill color orange
  rect(0, 0, 550, 170); // draws rectangle
} // closes drawSky function

function drawGrass() { // opens drawGrass function
  // Draw the grass
  noStroke(); // no stroke
  fill(16, 94, 14); // sets fill color green
  rect(0, 259, 550, 200); // draws rectangle
} // closes drawGrass function

function drawSun() { // opens drawSun function
  // Draw the sun
  fill(237, 53, 12); // sets fill color red
  circle(479, 209, 70); // draws circle
} // closes drawSun function

function drawClouds() { // opens drawClouds function
  // Draw the clouds
  noStroke(); // no stroke
  fill(219, 129, 11); // sets fill color yellow-orange
  ellipse(100, 100, 50, 50); // draws ellipse
  ellipse(150, 100, 50, 50); // draws ellipse
  ellipse(120, 90, 50, 50); // draws ellipse
  ellipse(130, 110, 50, 50); // draws ellipse
} // closes drawClouds function

function handleKeyPress() { // opens handleKeyPress function
  // Handle key press
// this conditional statement shows will will appear on the screen when 'a' is pressed
  if (key === 'a') { // opens if statement
    showMessage = false; // sets showMessage to false
    noStroke(); // no stroke
    // grass brightens
    fill(58, 168, 56); // sets fill color light green
    rect(0, 259, 550, 200); // draws rectangle
    // sky brightens
    fill(80, 207, 230); // sets fill color light blue
    rect(0, 0, 550, 260); // draws rectangle
    // sun moves
    fill(255, 255, 0); // sets fill color yellow
    circle(361, 121, 70); // draws circle
    // cloud turns white
    noStroke(); // no stroke
    fill(255); // sets fill color white
    ellipse(100, 100, 50, 50); // draws circle
    ellipse(150, 100, 50, 50); // draws circle
    ellipse(120, 90, 50, 50); // draws circle
    ellipse(130, 110, 50, 50); // draws circle
    // bird moves
    drawBird(); // calls drawBird function
  } // closes if statement

// this conditional statement shows what will appear on the screen when 'b' is pressed
  if (key === 'b') { // opens if statement
    showMessage = false; // sets showMessage to false
    // sky changes color
    noStroke(); // no stroke
    fill(217, 64, 22); // sets fill color red
    rect(0, 190, 550, 70); // draws rectangle
    fill(232, 78, 35); // sets fill color orange
    rect(0, 170, 550, 70); // draws rectangle
    fill(230, 108, 32); // sets fill color orange
    rect(0, 166, 550, 70); // draws rectangle
    fill(230, 110, 5); // sets fill color orange
    rect(0, 166, 550, 30); // draws rectangle
    fill(235, 111, 35); // sets fill color orange
    rect(0, 0, 550, 170); // draws rectangle
    // grass changes color
    fill(16, 94, 14); // sets fill color green
    rect(0, 259, 550, 200); // draws rectangle
    // cloud changes color
    fill(219, 129, 11); // sets fill color yellow-orange
    ellipse(100, 100, 50, 50); // draws ellipse
    ellipse(150, 100, 50, 50); // draws ellipse
    ellipse(120, 90, 50, 50); // draws ellipse
    ellipse(130, 110, 50, 50); // draws ellipse
    // sun darkens
    fill(237, 53, 12); // sets fill color red
    circle(85, 150, 70); // draws circle
    // flower
    // draw stem
    fill(34, 139, 34); // sets fill color green
    rect(345, 300, 10, 60); // draws rectangle
    // draw petals
    fill(222, 122, 222); // sets fill color pink
    ellipse(335, 285, 30, 30); // draws circle
    ellipse(350, 270, 30, 30); // draws circle
    ellipse(365, 286, 30, 30); // draws circle
    ellipse(350, 300, 30, 30); // draws circle
    // draw flower center
    fill(240, 151, 19); // sets fill color yellow-orange
    ellipse(350, 285, 20, 20); // draws circle
    // bird
    drawBird(); // calls drawBird function
  } // closes if statement

// this conditional statement shows what will appear on the screen when the right arrow is pressed
  if (key === 'ArrowRight') { // opens if statement
    // sky
    noStroke(); // no stroke
    fill(39, 39, 59); // sets fill color navy
    rect(0, 0, 550, 260); // draws rectangle
    // moon
    fill(179, 169, 166); // sets fill color grey
    circle(230, 90, 70); // draws circle
    // grass darkens
    fill(17, 41, 14); // sets fill color dark green
    rect(0, 259, 550, 200); // draws rectangle
    // draw stars
    fill(255); // sets fill color white
    circle(100, 198, 5); // draws circle
    circle(150, 109, 5); // draws circle
    circle(120, 99, 5); // draws circle
    circle(130, 123, 5); // draws circle
    circle(100, 138, 5); // draws circle
    circle(310, 129, 5); // draws circle
    circle(367, 145, 5); // draws circle
    circle(319, 93, 5); // draws circle
    circle(325, 106, 5); // draws circle
    circle(390, 148, 5); // draws circle
    circle(440, 68, 5); // draws circle
    circle(420, 99, 5); // draws circle
    circle(410, 80, 5); // draws circle
    circle(434, 170, 5); // draws circle
    circle(487, 100, 5); // draws circle
    circle(220, 184, 5); // draws circle
    circle(202, 256, 5); // draws circle
    circle(190, 201, 5); // draws circle
    circle(227, 172, 5); // draws circle
    circle(287, 132, 5); // draws circle
    circle(245, 245, 5); // draws circle
    circle(350, 189, 5); // draws circle
    circle(336, 204, 5); // draws circle
    circle(376, 223, 5); // draws circle
    // bird
    drawBird(); // calls drawBird function
  } // closes if statement
} // closes handleKeyPress function

function handleMousePress() { // opens handleMousePress function
// this conditional statement shows what will appear on screen when the mouse is pressed, and what will be on screen when it is released (not pressed)
  if (mouseIsPressed) { // opens if statement
    showMessage = false; // sets showMessage to false
    // sky brightens
    noStroke(); // no stroke
    fill(80, 207, 230); // sets fill color light blue
    rect(0, 0, 550, 260); // draws rectangle
    // sun moves
    fill(255, 255, 0); // sets fill color yellow
    circle(275, 96, 70); // draws circle
    // cloud
    fill(255); // sets fill color white
    ellipse(360, 110, 50, 50); // draws ellipse
    ellipse(410, 110, 50, 50); // draws ellipse
    ellipse(380, 90, 50, 50); // draws ellipse
    ellipse(390, 120, 50, 50); // draws ellipse
    // cloud turns white
    noStroke(); // no stroke
    fill(255); // sets fill color white
    ellipse(100, 100, 50, 50); // draws ellipse
    ellipse(150, 100, 50, 50); // draws ellipse
    ellipse(120, 90, 50, 50); // draws ellipse
    ellipse(130, 110, 50, 50); // draws ellipse
    // grass brightens
    fill(58, 168, 56); // sets fill color green
    rect(0, 259, 550, 200); // draws rectangle
    // flower
    // draw stem
    fill(34, 139, 34); // sets fill color green
    rect(91, 313, 10, 60); // draws rectangle
    // draw petals
    fill(173, 127, 219); // sets fill color purple
    ellipse(80, 300, 30, 30); // draws circle
    ellipse(95, 284, 30, 30); // draws circle
    ellipse(112, 300, 30, 30); // draws circle
    ellipse(95, 315, 30, 30); // draws circle
    // draw flower center
    fill(255, 255, 0); // sets fill color yellow
    ellipse(96, 300, 20, 20); // draws circle
    //text
    fill(242, 56, 5); // sets fill color orange
    textSize(15); // sets text size 15
    noStroke(); // no stroke
    textAlign(LEFT, BOTTOM); // sets text alignment to bottom left
    text("Quick! The sun is going to set! Press 'b'!", 135, 289); // sets text and coordinates
    // bird
    drawBird(); // calls drawBird function
  } else { // closes if statement, opens else statement
    showMessage = true; // sets showMessage to true
    // flower
    // draw stem
    noStroke(); // no stroke
    fill(34, 139, 34); // sets fill color green
    rect(91, 313, 10, 60); // draws rectangle
    // draw petals
    fill(222, 13, 58); // sets fill color red-pink
    ellipse(80, 300, 30, 30); // draws circle
    ellipse(95, 284, 30, 30); // draws circle
    ellipse(112, 300, 30, 30); // draws circle
    ellipse(95, 315, 30, 30); // draws circle
    // draw flower center
    fill(240, 151, 19); // sets fill color yellow-orange
    ellipse(96, 300, 20, 20); // draws circle
    } // closes else statement
  } // closes handleMousePress function
