/*
* Arcade Claw Machine Simulation
* Jolene Bodika
*
* Controls:
* - you must pay before using the machine! insert a coin in the coin slot to start the game
* - press and hold on the machine handle to move around
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
//FLAG VARIABLES 
let isClicked = false
let isCoinVisible = true;

const handle = {
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

const clawChain = {
  x: 395,
  y: 110
};

// GLOBAL VARIABLES
let mouseIsOverlapping;

// FUNCTIONS
function setup() {
  createCanvas(800, 800);
}

// displays the content on the canvas
function draw() {
  background(colours.backgroundColour);

  drawMachine();
  if (!isCoinVisible) {
    moveHandle();
    moveClaw();
  } else {
    drawCoin();
  }
  insertCoin();

}

function drawMachine() {
  //Ground area
  noStroke();
  push();
  fill(colours.groundColour);
  rect(0, 700, 800, 100);
  pop();

  //Claw machine base
  push();
  noStroke();
  fill(colours.mainBlue);
  rect(200, 50, 400, 700);
  rect(175, 720, 450, 40);
  rect(175, 500, 450, 50);

  rect(175, 20, 450, 70);

  triangle(175, 500, 150, 580, 215, 580);
  triangle(625, 500, 580, 580, 650, 580);

  fill(colours.shadingBlue);
  rect(200, 580, 400, 10);
  pop();


  //toy slot
  push();
  noStroke();
  rect(460, 600, 80, 70);
  fill(colours.lightGray);
  pop();



  //white screen
  push();
  noStroke();
  fill(colours.white);
  rect(250, 80, 300, 410);
  pop();

  drawPlushies();



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

  //handle bottom
  fill(colours.secondaryBlue);
  rect(400, 520, 70, 40);
  fill(colours.black);
  rect(257, 525, 5, 20);

  //handle base
  fill(colours.darkGray);
  ellipse(435, 540, 30, 30);
  fill(colours.secondaryBlue)


  //Green machine button
  fill(colours.secondaryBlue);
  rect(500, 520, 40, 40);
  fill(colours.lightGray);
  ellipse(518, 540, 20, 20);
  fill(colours.lightGreen);
  ellipse(520, 540, 20, 20);
  pop();

  //claw
  push();
  noStroke();
  fill(colours.black);
  rect(250, 80, 300, 20);
  ellipse(clawChain.x + 5, 100, 15, 15);
  // clawchain
  rect(clawChain.x, clawChain.y, 10, 180);

  rect(claw.left.x, claw.left.y, 10, 30);
  rect(claw.right.x, claw.right.y, 10, 30);
  pop();

  // //reflective glass
  push()

  fill(167, 199, 203, 127);
  rect(250, 80, 300, 410);

  fill(219, 225, 227, 127);
  noStroke();
  triangle(250, 100, 550, 490, 550, 100);

  pop();

  //handle ball

  push()
  ellipse(435, 540, 20, 20);
  fill(colours.black);
  ellipse(handle.bottom.x, handle.bottom.y, 10, 70);
  fill(colours.secondaryBlue);
  ellipse(handle.top.x, handle.top.y, handle.top.size);
  pop()


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
  mouseIsOverlapping = (distance < coin.size / 2);

  if (mouseIsOverlapping && mouseIsPressed) {
    isClicked = false
    isCoinVisible = false;
   
  }
}


function moveHandle() {

  const distance = dist(mouseX, mouseY, handle.top.x, handle.top.y); // code snippet taken from the conditionals challenge
  mouseIsOverlapping = (distance < handle.top.size / 2);



  if (mouseIsOverlapping && mouseIsPressed) {

    handle.top.x = mouseX;
    handle.bottom.x = mouseX;
    handle.top.y = mouseY;

    handle.top.x = constrain(handle.top.x, 425, 450);
    handle.top.y = constrain(handle.top.y, 465, 490);
    handle.bottom.x = constrain(handle.bottom.x, 430, 443);

  }

}

function moveClaw() {
  let axisX;
  let axisY;
  const distance = dist(mouseX, mouseY, handle.top.x, handle.top.y); // code snippet taken from the conditionals challenge
  mouseIsOverlapping = (distance < handle.top.size / 2);


  if (mouseIsOverlapping && mouseIsPressed) {

    clawChain.x = constrain(clawChain.x, 265, 525);
    clawChain.y = constrain(clawChain.y, 110, 270);
    claw.left.y = constrain(claw.left.y, 290, 450);
    claw.right.y = constrain(claw.right.y, 290, 450);


    claw.left.x = constrain(claw.left.x, 250, 510);
    claw.right.x = constrain(claw.right.x, 280, 540);


    axisX = handle.top.x - 395;
    axisY = handle.top.y - 110

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