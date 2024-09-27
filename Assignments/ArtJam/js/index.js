/*
* Name: Jolene Bodika
* Project: Art Jam Assignment 
* Description: This program is a claw machine game.
* Course: CART 253 - Creative Computing I 
*/

// CONSTANT VARIABLES

const claw = {}

const joystick = {}


const colours = {
  mainBlue:"#6b82e0",
  secondaryBlue:"#1f3694",
  shadingBlue:"#415fd7",
  lightGray:"#D3D3D3",
  darkGray:"#808080",
  lightGreen:"#90EE90",
  groundColour:"#c0caf2",
  black:"#000",
  white:"#fff",
  backgroundColour: "#eaedfb"

}


// FUNCTIONS

function setup() {
  createCanvas(800, 800);
  //angleMode(DEGREES);
}



// displays the canvas
function draw() {
  background(colours.backgroundColour);

  drawMachine();

}


function drawMachine() {


  //ground
  push()
  noStroke()
  fill(colours.groundColour)
  rect(0, 700, 800, 100)
  pop()

  //machine base
  push();
  noStroke()
  fill(colours.mainBlue)
  rect(200, 50, 400, 700)
  rect(175, 720, 450, 40)
  rect(175, 500, 450, 50)
  rect(175, 40, 450, 70)

  triangle(175, 500, 150, 580, 215, 580)
  triangle(625, 500, 580, 580, 650, 580)
  
  fill(colours.shadingBlue)
  rect(200, 580, 400, 10)
  pop();


  //white screen
  push();
  noStroke();
  fill(colours.white);
  rect(250, 80, 300, 420);
  pop();

  // air vents
  push();
  noStroke();
  fill(colours.secondaryBlue);
  rect(280, 520, 50, 10);
  rect(280, 535, 50, 10);
  rect(280, 550, 50, 10);

  //coin slot
  fill(colours.lightGray);
  rect(250, 515, 20, 40);
  fill(colours.black);
  rect(257, 525, 5, 20);

  //joystick bottom
  fill(colours.secondaryBlue)
  rect(400, 520, 70, 40)
  fill(colours.black)
  rect(257, 525, 5, 20)

  //Joystick base
  fill(colours.darkGray)
  ellipse(435, 540, 30, 30);
  fill(colours.secondaryBlue)

  //Joystick Ball
  ellipse(435, 540, 20, 20);
  fill(colours.black)
  ellipse(435, 510, 10, 70);
  fill(colours.secondaryBlue)
  ellipse(435, 480, 45, 45);

  //Green machine button
  fill(colours.secondaryBlue)
  rect(500, 520, 40, 40)
  fill(colours.lightGray)
  ellipse(518, 540, 20, 20)
  fill(colours.lightGreen)
  ellipse(520, 540, 20, 20)
  pop();

} 
