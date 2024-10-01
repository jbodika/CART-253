/*
* Arcade Claw Machine Simulation
* Jolene Bodika
*
* Controls:
* - you must pay before using the machine! insert a coin in the coin slot to start the game
* - press and hold on the machine joystick to move around
*
* Uses:
* p5.js library
* https://p5js.org
*/

"use strict";
// CONSTANT VARIABLES
const claw = {
  left: {
    x: 380,
    y: 290
  },
  right: {
    x: 410,
    y: 290
  }
}

const clawChain = {
  x: 395,
  y: 110
};

const joystick = {
  top: {
    x: 435,
    y: 480,
    size: 45,
  },
  bottom: {
    x: 435,
    y: 510
  }
}

const coin = {
  x: undefined,
  y: undefined,
  size: 25
}

const colours = {
  mainBlue: "#6b82e0",
  secondaryBlue: "#1f3694",
  shadingBlue: "#415fd7",
  lightGray: "#D3D3D3",
  darkGray: "#808080",
  lightGreen: "#90EE90",
  groundColour: "#c0caf2",
  black: "#000",
  white: "#fff",
  backgroundColour: "#eaedfb"

}

//FLAG VARIABLES 
let isClicked = false
let isCoinVisible = true;
let isMouseOverlapping;

// FUNCTIONS
function setup() {
  createCanvas(800, 800);
}

// Continously gets called to display content on the canvas
function draw() {
  background(colours.backgroundColour);

  //draws all the key components of the arcade machine
  drawGround();
  drawMachine();
  drawMachineBackground();
  drawPlushies();
  drawClawChainBase();
  drawClawChain();
  drawReflectiveGlass();
  drawToySlot();
  drawConvexButton();
  drawCoinSlot();
  drawAirVents();
  drawJoystick();
  
  // flag to check if the coin is on the screen or not
  if (!isCoinVisible) {
    moveJoystick();
    moveClaw();
  } else {
    drawCoin();
  }
  insertCoin(); //sets isCoinVisible to false

}

function drawGround(){ 
  push();
  noStroke();
  fill(colours.groundColour);
  rect(0, 700, 800, 100);
  pop();
};


function drawMachine() {
  push();
  noStroke();
  fill(colours.mainBlue);
  rect(200, 50, 400, 700);
  rect(175, 720, 450, 40);
  rect(175, 500, 450, 50);
 
  //top section
  rect(175, 20, 450, 70);

  triangle(175, 500, 150, 580, 215, 580);
  triangle(625, 500, 580, 580, 650, 580);

  //shading area
  fill(colours.shadingBlue);
  rect(200, 580, 400, 10);
  pop();
}

function drawToySlot(){
  push();
  noStroke();
  fill(colours.lightGray);
  rect(460, 620, 80, 70);
  pop();
}

function drawMachineBackground(){
  push();
  noStroke();
  fill(colours.white);
  rect(250, 80, 300, 410);
  pop();

}

function drawAirVents(){
  push();
  noStroke();
  fill(colours.secondaryBlue);
  rect(280, 520, 50, 10);
  rect(280, 535, 50, 10);
  rect(280, 550, 50, 10);
  pop();
 
}

function drawCoinSlot(){
  push();
  noStroke();
  fill(colours.lightGray);
  rect(250, 515, 20, 40);
  fill(colours.black);
  rect(257, 525, 5, 20);
  pop();
}



function drawConvexButton(){
  push();
  noStroke();
  fill(colours.secondaryBlue);
  rect(500, 520, 40, 40);
  fill(colours.darkGray);
  ellipse(518, 540, 20, 20);
  fill(colours.lightGreen);
  ellipse(520, 540, 20, 20);
  pop();
}

function drawClawChainBase(){
  push();
  noStroke();
  fill(colours.black);
  rect(250, 80, 300, 20);
  ellipse(clawChain.x + 5, 100, 15, 15);
  pop();
}

function drawClawChain(){
  push();
  noStroke();
  fill(colours.black);
  rect(clawChain.x, clawChain.y, 10, 180);
  rect(claw.left.x, claw.left.y, 10, 30);
  rect(claw.right.x, claw.right.y, 10, 30);
  pop();
}

function drawReflectiveGlass(){
  push();
  noStroke();
  fill(167, 199, 203, 127);
  rect(250, 80, 300, 410);

  fill(219, 225, 227, 127);
  noStroke();
  triangle(250, 100, 550, 490, 550, 100);

  pop();
}

function drawJoystick(){
  push();
  noStroke();
  //joystick base bottom
  fill(colours.secondaryBlue);
  rect(400, 520, 70, 40);
  fill(colours.black);
  rect(257, 525, 5, 20);

  //joystick base bottom circle
  fill(colours.darkGray);
  ellipse(435, 540, 30, 30);
  fill(colours.secondaryBlue);

  // joystick
  ellipse(435, 540, 20, 20);
  fill(colours.black);
  ellipse(joystick.bottom.x, joystick.bottom.y, 10, 70);
  fill(colours.secondaryBlue);
  ellipse(joystick.top.x, joystick.top.y, joystick.top.size);
  pop();



}


function drawCoin() {
  push()
  fill('#eeb501');
  ellipse(coin.x, coin.y, coin.size);
  coin.x = mouseX
  coin.y = mouseY
  pop()


}


function insertCoin() {
  const distance = dist(coin.x, coin.y, 257, 525); // code snippet taken from the conditionals challenge
  isMouseOverlapping = (distance < coin.size / 2);

  if (isMouseOverlapping && mouseIsPressed) {
    isClicked = false
    isCoinVisible = false;
  }
}


function moveJoystick() {

  const distance = dist(mouseX, mouseY, joystick.top.x, joystick.top.y); // code snippet taken from the conditionals challenge
  isMouseOverlapping = (distance < joystick.top.size / 2);



  if (isMouseOverlapping && mouseIsPressed) {

    joystick.top.x = mouseX;
    joystick.bottom.x = mouseX;
    joystick.top.y = mouseY;

    joystick.top.x = constrain(joystick.top.x, 425, 450);
    joystick.top.y = constrain(joystick.top.y, 465, 490);
    joystick.bottom.x = constrain(joystick.bottom.x, 430, 443);

  }

}

function moveClaw() {
  let axisX;
  let axisY;
  const distance = dist(mouseX, mouseY, joystick.top.x, joystick.top.y); // code snippet taken from the conditionals challenge
  isMouseOverlapping = (distance < joystick.top.size / 2);


  if (isMouseOverlapping && mouseIsPressed) {

    clawChain.x = constrain(clawChain.x, 265, 525);
    clawChain.y = constrain(clawChain.y, 110, 270);
    claw.left.y = constrain(claw.left.y, 290, 450);
    claw.right.y = constrain(claw.right.y, 290, 450);


    claw.left.x = constrain(claw.left.x, 250, 510);
    claw.right.x = constrain(claw.right.x, 280, 540);


    axisX = joystick.top.x - 395;
    axisY = joystick.top.y - 110

    //ternary conditional operator they work exactly the same as an 'if' statement but they're just displayed in one line
    // for example: axis > 40 if yes increment by 1 if no decrement by 1
    clawChain.x += (axisX > 40 ? 0.5 : -0.5);
    clawChain.y += (axisY > 370 ? -0.5 : 0.5);
    claw.left.y += (axisY > 370 ? -0.5 : 0.5);
    claw.right.y += (axisY > 370 ? -0.5 : 0.5);

    claw.left.x += (axisX > 40 ? 0.5 : -0.5);
    claw.right.x += (axisX > 40 ? 0.5 : -0.5);
  }
}


function drawPlushies() {
  let colourArray = ['#f920aa', '#20aaf9', '#aaf920', '#ad03de', '#FF7518']
  push();
  noStroke();
  let lineJump = 0;
  for (let i = 265; i < 550; i += 30) {
    for (let j = 350; j < 500; j += 30) {
      fill(colourArray.slice(-1));
      ellipse(i, j, 30);
      // added functionality to change the colours of the toys
      //every toy the linejump varibale gets incremented
      // once it reaches 10 in removes the last colour from the colourArray
      lineJump++;
      if (lineJump == 10) {
        lineJump = 0;
        colourArray.pop();

      }

    }
  }

  pop()

}