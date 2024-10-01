/**
 * Jolene Bodika
 * Movemetn Varibales examples
 */

"use strict";

let bird = {
    x: 120,
    y: 480,
    size: 50,
    velocity:{
        x:1,
        y:-2
    },
    acceleration:{
        x:0.025,
        y:-0.05
    },
    minVelocity:{
        x:-3,
        y:-2
    },
    maxVelocity:{
        x:3,
        y:2
    }
}

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(0);
    
    // Move the bird
    bird.velocity.x += bird.acceleration.x;
    bird.velocity.y += bird.acceleration.y;

   bird.velocity.x = constrain(bird.velocity.x,bird.minVelocity.x,bird.maxVelocity.x)
    bird.velocity.y = constrain(bird.velocity.y,bird.minVelocity.y,bird.maxVelocity.y)

    bird.x += bird.velocity.x
    bird.y += bird.velocity.y
    

    // Draw the bird
    ellipse(bird.x, bird.y, bird.size);
}