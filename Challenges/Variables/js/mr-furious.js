/**
 * Mr. Furious
 * Jolene Bodika
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  rage:0,

  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};

let bird ={
  x:10,
  y:10,

  velocity:{
    x:1,
    y:-2
  },
  acceleration:{
    x:0.025,
    y:0.05
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

let sky={
  r:0,
  g:0,
  b:255
}
/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(160, 180, 200);
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  changeToRed();
  dayToNight();
  birdFlying();
 // console.log(mrFurious.fill.r)
 mrFurious.rage +=0.2
 let randX = mrFurious.x + random(-mrFurious.rage,mrFurious.rage);
 let randY = random(-5,5)+mrFurious.y;

console.log(randX)
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(randX, randY, mrFurious.size);
  pop();

  
}

function changeToRed(){
  mrFurious.fill.r +=2 
  mrFurious.fill.g -=2 
  mrFurious.fill.b -=2 

  mrFurious.fill.r = constrain(mrFurious.fill.r,0,255)
}

function dayToNight(){
pop();
sky.r-=2;
sky.g-=2
sky.b-=2

sky.r = constrain(sky.r,0,255)
sky.g = constrain(sky.g,0,255)
sky.b = constrain(sky.b,0,255)

background(sky.r,sky.g,sky.b)
push();

}

function birdFlying(){

  pop();
  noStroke()
  
  bird.velocity.x += bird.acceleration.x
  bird.velocity.y += bird.acceleration.y


  bird.velocity.x = constrain(bird.velocity.x, bird.minVelocity.x,bird.maxVelocity.x)
  bird.velocity.y = constrain(bird.velocity.y, bird.minVelocity.y,bird.maxVelocity.y)
  
bird.x += bird.velocity.x;
bird.y += bird.velocity.y

  ellipse(bird.x,bird.y,30,4)
  
  push();
  
  }