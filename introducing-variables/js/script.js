/**
 * Jolene Bodika
 * Intro to Variables
 */

"use strict";

function setup() {
    // Create the canvas
    createCanvas(640, 640);
}

function draw() {
    background(0);
    
    // Draw a circle in the centre of the canvas
    push();
    noStroke();
    fill(mouseX, mouseY, 0);
    //changed the width and height to always keep the circle in the center and changed the numbers to use mouseX and mouseY variables in order to change the size of the circle based on where the mouse is placed
    ellipse(width/2, height/2, mouseX, mouseY);
    pop();
}