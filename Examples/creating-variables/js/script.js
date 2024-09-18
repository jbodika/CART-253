/**
 *Jolene Bodika
* Examples on Creating Variables
 */

"use strict";
//colours for the cheese
let cheeseRed = 255;
let cheeseGreen = 255;
let cheeseBlue = 255;

// coordinates for the cheese
let holeShade = 0;
let holeX = 140;
let holeY = 175;
let holeSize = 180;

function setup() {
    // Create the canvas
    createCanvas(480, 480);
}

function draw() {
    // Cheese colour (yellow)
    background(cheeseRed,cheeseGreen,cheeseBlue);
    
    // Draw a hole in the upper left
    push();
    noStroke();
    fill(holeShade);
    ellipse(holeX, holeY, holeSize);
    pop();
}