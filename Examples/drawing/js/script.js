/**
 * Function Calls
 * Jolene Bodika
 * 
 * Function calls examples for CART 253
 * these are comments lol :))
 */

"use strict";

// creates the canvas 
function setup() {
    createCanvas(640, 640);
}


// draws every frame 
function draw() {
    background(150, 230, 176);

    push();
    fill("pink");
    stroke("blue")
    ellipse(320, 320, 480);
    pop();

    push();
    fill("hotpink")
    stroke("red")
    ellipse(320,320,40)

}