/**
 * UFO on a Dark Night
 * Jolene Bodika
 * 
 * Examples on changing varibales
 * A UFO. On a dark night. It just sits there?
 */

"use strict";

// Our UFO
let ufo = {
    // Position
    x: 200,
    y: 375,
    // Dimensions
    width: 150,
    height: 50,
    // Fill colour (greyscale)
    fill: 255
};

// Shade to fill the sky (background)
let skyShade = 0;

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(400, 400);
}

/**
 * Displays a UFO
*/
function draw() {
    //change the sky colour
    skyShade +=1;

    // Display the sky
    background(skyShade);

    //make the ufo go up
    ufo.y -=2;

    //makes the ufo go to the right 
    ufo.x +=0.5;
    // makes the ufo darker
    ufo.fill *= 0.999;
    // changes the ufo's dimensions
    ufo.width /= 1.005;
    ufo.height /=1.005;

    // Draw the UFO based on its properties
    push();
    fill(ufo.fill);
    noStroke();
    ellipse(ufo.x, ufo.y, ufo.width, ufo.height);
    pop();
}